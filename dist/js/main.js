const menuBtn = document.querySelector('.menu-btn'),
    menu = document.querySelector('.menu'),
    brand = document.querySelector('.menu-branding'),
    navbar_nav = document.querySelector('.navbar-nav'),
    navItem = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', (e) => {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        brand.classList.add('show');
        navbar_nav.classList.add('show');
        navItem.forEach((item) => {
            item.classList.add('show');
        });
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        brand.classList.remove('show');
        navbar_nav.classList.remove('show');
        navItem.forEach((item) => {
            item.classList.remove('show');
        });
        showMenu = false;
    }

})