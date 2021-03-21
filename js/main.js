const nav = document.querySelector('.ListHeader')
const burgare = document.querySelector('.burgare')

function toggleMenu() {
    nav.classList.toggle('activemenu')
    burgare.classList.toggle('toggle')
    console.log('hej')

}

burgare.addEventListener('click', toggleMenu)