//<CloseWindow>
const closeWindow = function () {
	function closeAccordeon(event) {
		if (!event.classList.contains("menu-footer__title")) {
			document.querySelectorAll("#accordeon").forEach(item => {
				if (item.classList.contains("_active")) {
					item.classList.remove("_active");
					item.nextElementSibling.classList.remove("_active");
				}
			});
		}
	}
	function closeBurger(event) {
		if (
			!event.classList.contains("_burger-cross") &&
			!event.classList.contains("menu-header__list")
		) {
			document.querySelectorAll("._burger-cross").forEach(item => {
				if (item.classList.contains("_is-active")) {
					item.classList.remove("_is-active");
					document
						.querySelector(".menu-header__list")
						.classList.remove("_is-active");
				}
			});
		}
	}
	window.addEventListener("click", event => {
		closeAccordeon(event.target);
		closeBurger(event.target);
	});
};
closeWindow();
// Бургер
const burger = function () {
	const icon = document.querySelector(".menu-header__burger");

	function active() {
		this.classList.toggle("_is-active");
		document.querySelector(".menu-header__list").classList.toggle("_is-active");
	}
	icon.addEventListener("click", active);
};
burger();
// Аккордеон
const accordeon = function () {
	const btn = document.querySelectorAll("#accordeon");

	btn.forEach(item => {
		item.addEventListener("click", active);
	});
	function active() {
		if (!this.classList.contains("_active")) {
			btn.forEach(item => {
				if (item.classList.contains("_active")) {
					item.classList.remove("_active");
					item.nextElementSibling.classList.remove("_active");
				}
			});
		}
		this.classList.toggle("_active");
		this.nextElementSibling.classList.toggle("_active");
	}
};
accordeon();
