let btnMenu = document.getElementById('btn-abrir-menu');
let menuMobile = document.getElementById('menu-mobile');
let btnFechar = document.querySelector('.btn-fechar');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menuMobile.classList.add('menu-mobile-ativo');
});

btnFechar.addEventListener('click', () => {
    menuMobile.classList.remove('menu-mobile-ativo');
});

overlay.addEventListener('click', () => {
    menuMobile.classList.remove('menu-mobile-ativo');
});