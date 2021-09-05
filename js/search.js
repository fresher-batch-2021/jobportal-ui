const result = document.getElementById('result')
const filter = document.getElementById('filter').value;
const listItems = []
window.addEventListener('input', (e) =>filterData(e.target.value))
function filterData(searchTerm) {
console.log(searchTerm);
console.table(listItems);
listItems.forEach(item => {
if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
item.classList.remove('hide')
} else{
item.classList.add('hide')
 }
})
}
function getAllData(){
    UserService.getJobs().then(res=>{
        let value=res.data.rows;
        let results=value.map(Obj=>Obj.doc);
        results.forEach(user => {
            const li = document.createElement('li');
            listItems.push(li)
            console.log("yesh",user.imageUrl);
            li.innerHTML = `
            <img src="images/${user.imageUrl}" alt="${user.companyName}">
            <div class="user-info">
            <h4>${user.companyName}</h4>
            <h5>Required :${user.skills}</h5>
            <h5><button><a href ="applied.html?id=${user._id}">Apply</a></button></h5>
            </div>
            `;
            result.appendChild(li)
            }
        )}).catch(err=>{console.log(err)})
    } 
    getAllData();
