// const sliderLine = document.querySelector('.slider-line');
// let offset = 0;

// document.querySelector('.button-scroll').addEventListener('click', function () {
//     offset += 70;
//     if (offset > 80) {
//         offset = 0;
//     }
//     sliderLine.style.bottom = offset + 'px'
// });

const sliderLine = document.querySelector('.slider-line'); 
const buttonScroll = document.querySelector('.button-scroll');

let offset = 0;

buttonScroll.addEventListener('click', async () => { 
    offset += 150;
        if (offset > 170) {
            offset = 0;
        }
    sliderLine.style.bottom = offset + 'px'
});