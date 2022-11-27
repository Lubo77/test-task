let btnDemo = document.querySelector('.hero-left__btn');
let bannerChecked = document.querySelector('.hero-left__checked-banner');

btnDemo.addEventListener('click', () => {
    btnDemo.classList.toggle('hide');
    bannerChecked.classList.toggle('show');
})