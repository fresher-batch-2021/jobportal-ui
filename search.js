const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []
getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('jsondata.json')

    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.companyName}">
            <div class="user-info">
                <h4>${user.companyName}</h4>
                <h5>Required :${user.skills}</h5>
                <p>${user.location.city}, ${user.location.country}</p>
                <h5>Apply<a href="">${user.link}</a></h5>
            </div>
        `

        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

