// ██ IMPORT ██
// Swiper
import { Swiper, EffectFade, Navigation, Parallax, Pagination, Controller } from 'swiper'
Swiper.use([EffectFade, Navigation, Parallax, Pagination, Controller])
// Gsap
import { gsap, Power2 } from 'gsap'

// document.addEventListener('DOMContentLoaded', () => {
function initSliderHome() {

	const swiperIMG = new Swiper('.slider-img', {
		loop: false,
		speed: 2400,
		parallax: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	})

	const swiperText = new Swiper('.slider-text', {
		loop: false,
		speed: 2400,
		pagination: {
			el: '.slider-pagination-count .total',
			type: 'custom',
			renderCustom: function(swiper, current, total) {
				// let totalRes = total >= 10 ? total : `0${total}`
				// return totalRes
				return `${total}`;
			}
		},
		// TODO: убрать для slider-text
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})


	// █████ Связка слайдов
	swiperText.controller.control = swiperIMG;
	swiperIMG.controller.control = swiperText;

	// █████ Slide-change
	let curnum = document.querySelector('.slider-pagination-count .current');

	swiperText.on('slideChange', function () {
		let ind = swiperText.realIndex + 1;
		console.log(ind);
		gsap.to(curnum, .2, {
			force3D: true,
			y: -10,
			opacity: 0,
			easy: Power2.easeOut,
			onComplete: function () {
				gsap.to(curnum, .1, {
					force3D: true,
					y: 10
				});
				curnum.innerHTML = ind;
			}
			
		});
		gsap.to(curnum, .2, {
			force3D: true,
			y: 0,
			opacity: 1,
			easy: Power2.easeOut,
			delay: .3
		})

	});



}

export {initSliderHome}