import { Swiper, EffectFade, Navigation, Parallax, Pagination, Controller } from 'swiper'
Swiper.use([EffectFade, Navigation, Parallax, Pagination, Controller])

// document.addEventListener('DOMContentLoaded', () => {
function initSliderHome() {

	const swiperIMG = new Swiper('.slider-img', {
		loop: false,
		speed: 2400,
		parallax: true,
		pagination: {
			el: '.slider-pagination-count .total',
			type: 'custom',
			renderCustom: function(swiper, current, total) {
				// let totalRes = total >= 10 ? total : `0${total}`
				// return totalRes
				return total
			}
		},
		// TODO: убрать для slider-text
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	})

}

export {initSliderHome}