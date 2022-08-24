import { Swiper, EffectFade, Navigation, Parallax } from 'swiper'
Swiper.use([EffectFade, Navigation, Parallax])

// document.addEventListener('DOMContentLoaded', () => {
function initSliderHome() {

	const swiperIMG = new Swiper('.slider-img', {
		loop: false,
		speed: 2400,
		parallax: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

}

export {initSliderHome}