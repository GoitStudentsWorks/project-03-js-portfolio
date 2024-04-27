import Accordion from 'accordion-js';
// import Swiper from 'swiper/bu';
// import 'swiper/css';
import Swiper from 'swiper/bundle';


import 'swiper/css/bundle';
new Accordion('.accordion-container');




 let sviperHtml = '.mySwiper';
let swiperButtonNext =  '.swiper-button-next';

if (screen.width < 768) {
  let swiper = new Swiper(sviperHtml, {
    navigation: {
      nextEl: swiperButtonNext,
    },
    loop: true,
    slidesPerView: 2,
    mousewheel: true,
    keyboard: true,
  });
} else if (screen.width < 1400) {
  let swiper = new Swiper(sviperHtml, {
    navigation: {
      nextEl: swiperButtonNext,
    },
    loop: true,
    slidesPerView: 3,
    mousewheel: true,
    keyboard: true,
  });
} else {
  let swiper = new Swiper(sviperHtml, {
    navigation: {
      nextEl: swiperButtonNext,
    },
    loop: true,
    slidesPerView: 6,
    mousewheel: true,
    keyboard: true,
  });
}

// window.onresize = function () {

//     if (screen.width < 768) {
//       let swiper = new Swiper(sviperHtml, {
//         navigation: {
//           nextEl: swiperButtonNext,
//         },
//         loop: true,
//         slidesPerView: 2,
//         mousewheel: true,
//         keyboard: true,
//       });
//     } else if (screen.width < 1400) {
//       let swiper = new Swiper(sviperHtml, {
//         navigation: {
//           nextEl: swiperButtonNext,
//         },
//         loop: true,
//         slidesPerView: 3,
//         mousewheel: true,
//         keyboard: true,
//       });
//     } else {
//       let swiper = new Swiper(sviperHtml, {
//         navigation: {
//           nextEl: swiperButtonNext,
//         },
//         loop: true,
//         slidesPerView: 6,
//         mousewheel: true,
//         keyboard: true,
//       });
//     }
// };
