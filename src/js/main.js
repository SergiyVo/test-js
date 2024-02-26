const sliderLine = document.querySelector('.slider-line'); 
const buttonScroll = document.querySelector('.slider-button-scroll');
const buttonArrow = document.querySelector('.slider-button-arrow');

let offset = 0;

buttonScroll.addEventListener('click', async () => { 
    offset += 150;
    if (offset > 170) {
        offset = 0;
    }
    sliderLine.style.bottom = offset + 'px'
        
    if (offset === 150) {
        buttonArrow.setAttribute('href', './img/symbol-defs.svg#icon-Vector-up1-1');
        } else {
        buttonArrow.setAttribute('href', './img/symbol-defs.svg#icon-Vector-down1-1');
        };
});

//=======================================================================================================



// відкриття та закриття мобільного меню

const menuOpenButton = document.querySelector('.menu-open-btn');
const menuCloseButton = document.querySelector('.menu-close-btn');
const mobMenu = document.querySelector('.mob-menu');

// Відкриття меню при кліку на кнопку відкриття
menuOpenButton.addEventListener('click', () => {
  mobMenu.classList.add('is-open');
  menuOpenButton.classList.remove('is-open')
  menuOpenButton.classList.add('hidden');
  menuCloseButton.classList.remove('hidden');
});

// Закриття меню при кліку на кнопку закриття
menuCloseButton.addEventListener('click', () => {
  mobMenu.classList.remove('is-open');
  menuOpenButton.classList.remove('hidden');
  menuCloseButton.classList.add('hidden');
});