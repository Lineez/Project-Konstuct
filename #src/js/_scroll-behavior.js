// Плавный переход по якорям (работает)
// Добавить класс .scroll-to к "якорям" чтобы сделать их прокрутку плавной

let anchors = document.querySelectorAll('.scroll-to');
//выбираем все ссылки к якорю на странице
let V = 0.3;
// скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

for (let anchor of anchors) {
	
	anchor.addEventListener('click', function (e) { //по клику на ссылку
		// Проверка открытого мобильного меню
		if(menuBurger.classList.contains('active')) {
			menu.classList.remove('active');
			navList.classList.remove('active');
			menuBurger.classList.remove('active');
		}
		
		e.preventDefault() //отменяем стандартное поведение
		const blockID = anchor.getAttribute('href');

		let w = window.pageYOffset, // производим прокрутку
		hash = this.href.replace(/[^#]*(.*)/, blockID); // id элемента, к которому нужно перейти
		let t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
			start = null;
		requestAnimationFrame(step);
		function step(time) {
			if (start === null) start = time;
			let progress = time - start,
				r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
			window.scrollTo(0, r);
			if (r != w + t) {
				requestAnimationFrame(step)
			} else {
				location.hash = hash // URL с хэшем
			}
		}
	}, false);
}