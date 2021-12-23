const coffeeMenu = document.getElementById('coffee-menu')
const coffeeBtn = document.getElementById('coffee-btn')

function menuToggle() {
    if (coffeeMenu.style.display === 'block'){
        coffeeMenu.style.display = 'none'
    } else {
        coffeeMenu.style.display = 'block'
    }
    // coffeeMenu.classList.toggle('show')
}

coffeeBtn.addEventListener('click', menuToggle)

