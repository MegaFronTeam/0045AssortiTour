"use strict";

const $ = jQuery;


function eventHandler() {

	JSCCommon.init()


	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener('scroll', () => {
		JSCCommon.setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();


	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}

	new Swiper('.breadcrumb-slider--js', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true
	});

	const swiper4 = new Swiper('.sBanners__slider--js', { // если не используешь методы swiper  - можно обращаться без нее к Swiper
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,

	});

	let defaultSliders = document.querySelectorAll('.default-slider-js');
	for (const defaultSlider of defaultSliders) {
		new Swiper(defaultSlider, { 
			slidesPerView: 'auto',
			navigation: {
				nextEl: defaultSlider.querySelector('.swiper-button-next'),
				prevEl: defaultSlider.querySelector('.swiper-button-prev'),
			},
		});
	}

	document.addEventListener('click', (event) => {
		let subMenuBtntarget = event.target.closest('.menu-item-has-children');
		if(subMenuBtntarget && window.matchMedia('(max-width: 992px)').matches) {
			$('.menu-item-has-children').toggleClass('active');
			$('.menu-item-has-children .sub-menu').slideToggle();
		}
	});
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }