const coffeeMenu = document.getElementById('coffee-menu')
const coffeeBtn = document.getElementById('coffee-btn')

// function menuToggle() {
//     if (coffeeMenu.classList.contains('hidden')){
//         coffeeMenu.classList.remove('hidden')
//         coffeeMenu.classList.add('show')
//     } else {
//         coffeeMenu.classList.remove('show')
//         coffeeMenu.classList.add('hidden')
//     }
// }

function openMenu() {
    if (coffeeMenu.classList.contains('show')){
        coffeeMenu.classList.remove('show')
        coffeeMenu.classList.add('hidden')
    } else {
        coffeeMenu.classList.remove('hidden')
        coffeeMenu.classList.add('show')
    }
}

function closeMenu() {
    if (coffeeMenu.classList.contains('hidden')){
        coffeeMenu.classList.remove('hidden')
        coffeeMenu.classList.add('show')
    } else {
        coffeeMenu.classList.remove('show')
        coffeeMenu.classList.add('hidden')
    }
}

coffeeBtn.addEventListener('mouseover', menuToggle)

