const btn = document.querySelector('.btn')
const ul = document.querySelector(".ul-wrap");

function addList(listData = []) {
    listData.forEach((list) =>{
    const li = document.createElement('li')

        li.textContent = list.description
        ul.appendChild(li)
}) 

}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const input = document.querySelector(".input");
    
    if (input.value) {
        const data = [{ description: input.value }];
        addList(data)
    
    }

    if (input.value == '') {
        alert('Siz malumot kiritmadingiz iltimos molumot kiriting')
    }

    input.value = '';
    
})
