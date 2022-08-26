// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

// ██ IMPORT ██
// MY-SLIDERS
import { initSliderHome } from './blocks/my-sliders.js';



document.addEventListener('DOMContentLoaded', () => {

	// █████ HAMBURGER
	// vars
	const html = document.documentElement;
	const fixedMenu = document.querySelector('.fixed-menu');
	const mainNavTrigger = document.querySelector('.js-show-main-nav');

	// Events
	mainNavTrigger.addEventListener('click', function () {
		if (html.classList.contains('show-main-nav')) {
			mainNavOpen();
		} else {
			mainNavClose();
		}
	});

	// Functions
	function mainNavClose() {
		html.classList.toggle('show-main-nav');
		setTimeout(() => {
			fixedMenu.classList.toggle('fixed-menu--active');
		}, 300);
	};

	function mainNavOpen() {
		html.classList.toggle('show-main-nav');
		setTimeout(() => {
			fixedMenu.classList.toggle('fixed-menu--active');
		}, 300);
	};


	// █████ SCROLL
	// Elements UI
	const rootElement = document.documentElement;
	const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

	// Observed elements
	// Мы выбираем элемент, на который хотим нацелиться
	// !!! FIXED
	const targets = document.querySelectorAll(".js-observe");
	// Затем мы создаем экземпляр наблюдателя с помощью функции, которую мы создали выше. Для этого требуется дополнительная конфигурация
	// объект, который мы будем использовать в других примерах.
	let observer = new IntersectionObserver(callback);
	// Наконец, начните наблюдать за целевыми элементами
	targets.forEach((el) => {
		observer.observe(el);
	});


	// Далее мы хотим создать функцию, которая будет вызываться при пересечении этого элемента
	function callback(entries, observer) {
		// Обратный вызов вернет массив записей, даже если вы наблюдаете только один элемент
		entries.forEach((entry) => {
			// получаем свойства, которые доступны в объекте entry
			const {
				target,
				isIntersecting
			} = entry;

			let observeEl = target.dataset.observeElement === undefined ? false : target.dataset.observeElement;
			let addClass = target.dataset.observeAddClass === undefined ? false : target.dataset.observeAddClass;
			let removeClass = target.dataset.observeRemoveClass === undefined ? false : target.dataset.observeRemoveClass;

			if (isIntersecting) {
				// ██████ Скрылся из вида ██████
				// Для элемента: ${observeEl} удаляем класс: ${addClass}
				if (observeEl && addClass) {
					// console.log('- ' + addClass);
					document.querySelector(`.${observeEl}`).classList.remove(addClass);
				};
				// Для элемента: ${observeEl} добавляем класс: ${removeClass}
				if (observeEl && removeClass) {
					// console.log('+ ' + removeClass);
					document.querySelector(`.${observeEl}`).classList.add(removeClass);
				};

				// Для тек. элемента удаляем класс: ${addClass}
				if (!observeEl && addClass) {
					// console.log('- ' + addClass);
					target.classList.remove(addClass);
				};
				// Для тек. элемента добавляем класс: ${removeClass}
				if (!observeEl && removeClass) {
					// console.log('+ ' + removeClass);
					target.classList.add(removeClass);
				};

			} else {

				// ██████ Появился в поле зрения ██████
				// Для элемента: ${observeEl} добавляем класс: ${addClass}
				if (observeEl && addClass) {
					// console.log('+ ' + addClass);
					document.querySelector(`.${observeEl}`).classList.add(addClass);
				};
				// Для элемента: ${observeEl} удаляем класс: ${removeClass}
				if (observeEl && removeClass) {
					// console.log('- ' + addClass);
					document.querySelector(`.${observeEl}`).classList.remove(removeClass);
				};

				// Для тек. элемента добавляем класс: ${addClass}
				if (!observeEl && addClass) {
					// console.log('- ' + addClass);
					target.classList.add(addClass);
				};
				// Для тек. элемента удаляем класс: ${removeClass}
				if (!observeEl && removeClass) {
					// console.log('- ' + removeClass);
					target.classList.remove(removeClass);
				};

			}
		});
	}


	// █████ MY-SLIDERS
	// Home-slider
  initSliderHome();

})
