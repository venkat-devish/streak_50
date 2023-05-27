const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus();
})

input.addEventListener('blur', (e) => {
    let val = e.target.value;
    if (val === "") {
        search.classList.remove('active');
        val = "";
    }
})