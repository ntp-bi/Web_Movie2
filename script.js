// var swiper = new Swiper(".popular-content", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     centeredSlides: true,
//     autoplay: {
//       delay: 5500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         280: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//         },
//         320: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//         },
//         510: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//         },
//         758: {
//             slidesPerView: 3,
//             spaceBetween: 15,
//         },
//         900: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//         }
//     }
// });
// Swiper
var swiper = new Swiper(".popular-content", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});
// Show  Video
let playBtn = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let closeBtn = document.querySelector('.close-video');
let myVideo = document.querySelector('#myvideo');

playBtn.onclick = () => {
    video.classList.add('show-video');
    // Auto play when click video on button
    myVideo.play();
}

closeBtn.onclick = () => {
    video.classList.remove('show-video');
    // pause on close video
    myVideo.pause();
}
