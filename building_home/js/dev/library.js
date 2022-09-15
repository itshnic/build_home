const swiper = new Swiper(".swiper-catalog", {
	loop: true,
	slidesPerView: 4,
	grabCursor: true,
	breakpoints: {
		320: {
			slidesPerView: 1.1,
		},
		400: {
			slidesPerView: 1.3,
		},
		460: {
			slidesPerView: 1.5,
		},
		530: {
			slidesPerView: 1.8,
		},
		645: {
			slidesPerView: 2.1,
		},
		750: {
			slidesPerView: 2.5,
		},
		890: {
			slidesPerView: 3.0,
		},
		1060: {
			slidesPerView: 3.5,
		},
		1250: {
			slidesPerView: 4,
		},
	},
});

const swiperGallery = new Swiper(".main-gallery__swiper", {
	loop: true,
	slidesPerView: 3,
	grabCursor: true,
	spaceBetween: 9,
	loopAdditionalSliders: true,
	pagination: {
		el: ".main-gallery__dotts",
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1.0,
		},
		360: {
			slidesPerView: 1.2,
		},
		440: {
			slidesPerView: 1.4,
		},
		525: {
			slidesPerView: 1.8,
		},
		680: {
			slidesPerView: 2.1,
		},
		790: {
			slidesPerView: 2.5,
		},
		920: {
			slidesPerView: 2.8,
		},
		1060: {
			slidesPerView: 3.0,
		},
	},
});
const swiperFeedback = new Swiper(".main-info__feedback", {
	loop: true,
	slidesPerView: 1,
	grabCursor: true,
	spaceBetween: 20,
	loopAdditionalSliders: true,
	pagination: {
		el: ".feedback__dotts",
		clickable: true,
	},
});
const swiperAbout = new Swiper(".about-info__swiper", {
	loop: true,
	slidesPerView: 10,
	grabCursor: true,
	spaceBetween: 5,
	loopAdditionalSliders: true,
	pagination: {
		el: ".about-info__dotts",
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 2.2,
		},
		400: {
			slidesPerView: 3,
		},
		500: {
			slidesPerView: 4,
		},
		600: {
			slidesPerView: 5,
		},
		700: {
			slidesPerView: 6,
		},
		900: {
			slidesPerView: 7,
		},
		1150: {
			slidesPerView: 9,
		},
		1300: {
			slidesPerView: 10,
		},
	},
});
