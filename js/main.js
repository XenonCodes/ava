document.querySelector('.header__mobile-menu-button').addEventListener('click', function(event) {
    let menu = document.querySelector('.header__list');
    menu.classList.toggle('show-menu');
    document.body.classList.toggle('overflow-hidden');
})