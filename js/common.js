const burguerMenu = document.querySelector('.burguerMenu');
const buttonMenu = document.querySelector('.navbarToggle');
const menuMobile = document.querySelector('.collapsedMenu');

buttonMenu.addEventListener('click', () => {
	burguerMenu.classList.toggle('animate');
	menuMobile.classList.toggle('menuShow');
	if (burguerMenu.classList.contains('animate')) {
		burguerMenu.style.backgroundColor = 'transparent';
	} else {
		burguerMenu.style.backgroundColor = '#000';
	}
});

// Can also be included with a regular script tag

const typed = new Typed('.typed', {
	strings: ['Web Developer', 'Front-End Designer'],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

// $(document).ready(function() {
//   $('a[href^="#"]').click(function() {
//     var destino = $(this.hash);
//     if (destino.length == 0) {
//       destino = $('a[name="' + this.hash.substr(1) + '"]');
//     }
//     if (destino.length == 0) {
//       destino = $('html');
//     }
//     $('html, body').animate({ scrollTop: destino.offset().top }, 500);
//     return false;
//   });
// });
let nav = document.querySelector('#la-header');
function mostrarScroll() {
	let scrollTop = document.documentElement.scrollTop;
	let alturaNav = nav.offsetTop;
	if (scrollTop > 1) {
		nav.classList.add('la-header-active');
	} else {
		nav.classList.remove('la-header-active');
	}
}

window.addEventListener('scroll', mostrarScroll);

const grid = new Muuri('.grid', {
	layout: {
		rounding: false,
	},
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('img-charged');
	const enlaces = document.querySelectorAll('#category a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (event) => {
			event.preventDefault();
			enlaces.forEach((enlace) => {
				enlace.classList.remove('active');
			});
			event.target.classList.add('active');

			const category = event.target.innerHTML.toLowerCase();
			category === 'all'
				? grid.filter('[data-category]')
				: grid.filter(`[data-category="${category}"]`);
		});
	});
});

const overlay = document.getElementById('overlay');
document
	.querySelectorAll('.grid .item .item-contenido img')
	.forEach((elemento) => {
		const ruta = elemento.getAttribute('src');
		const description = elemento.parentNode.parentNode.dataset.description;
		elemento.addEventListener('click', () => {
			overlay.classList.add('active');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .description').innerHTML = description;
		});
	});

document.querySelector('#btn-close').addEventListener('click', () => {
	overlay.classList.remove('active');
});

overlay.addEventListener('click', (event) => {
	event.target.id === 'overlay' ? overlay.classList.remove('active') : '';
});
