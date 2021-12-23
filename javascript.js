const coffeeMenu = document.getElementById('coffee-menu')
const coffeeBtn = document.getElementById('coffee-btn')

function menuToggle() {
    coffeeMenu.classList.toggle('show')
}

coffeeBtn.addEventListener('click', menuToggle)

