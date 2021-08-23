  
function productSpec() {

    // getting datas from url of the page
    const param = new URLSearchParams(window.location.search.substr(1));
    let Id = param.get("id");

alert(Id);
    UserService.findData(Id).then(res => {

        let value = res.data;
        alert("job Applied successfully")
        console.log(value);
        const id = value._id;
        const name = value.companyname;
        const img_url = value.imageUrl;
        const price = value.skills;
        // const description = value.description;

        let content =
            `<img src="Images/${img_url}" alt="">
        <p>CompanyName:${name}</p>
        <br>
        <p>Skills:${price}</p>
        <p>Status:Applied</p>
        <br>
        <h5><button><a href="index.html">back</a></button></h5>
         
        `;
        document.querySelector(".company").innerHTML = content;

    }).catch(err => {
        alert("failed on getting data");
        console.log(err.resposnse.data);
    });
          
}
productSpec();