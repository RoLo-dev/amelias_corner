let categoriesLink = document.getElementById('categories')
let subMenu = document.querySelector('.sub-menu')

categoriesLink.addEventListener('mouseove', () => {
    subMenu.classList.toggle('show')
})