// window.addEventListener('DOMContentLoaded', (event) => {
// 	console.log('DOM fully loaded and parsed');

// 	const body = document.querySelector('body');
// 	const Btn = document.createElement('button');
// 	const container = document.querySelector('.container');
// 	const squares = document.querySelectorAll('.square');
// 	Btn.textContent = 'Create A New Grid';
// 	body.insertBefore(Btn, container);

// 	Btn.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		for (let i = 0; i < 256; i++) {
// 			const el = document.createElement('div');
// 			container.append(el);
// 			let squares = el.classList.add('square');
// 			el.setAttribute('id', i);
// 		}
// 	});

// 	squares.forEach((square) => {
// 		square.addEventListener('mouseover', (e) => {
// 			console.log(e);
// 			e.preventDefault();
// 			square.style.backgroundColor = 'black';
// 		});
// 	});
// });
const container = document.querySelector('.container');

const Btn = Object.assign(document.createElement('button'), {
	textContent: `Click to Create A New Grid, 
							Double Click to Reset`,
});
document.body.prepend(Btn);

Btn.addEventListener(
	'click',
	(e) => {
		for (let i = 0; i < 256; i++) {
			const el = Object.assign(document.createElement('div'), {
				className: 'square',
				id: `per-${i}`,
			});
			container.append(el);
		}
	},
	{ passive: true }
);

// Delegated event listener
container.addEventListener(
	'mouseover',
	(e) => {
		if (!e.target.matches('.container .square')) return;
		e.target.classList.add('hovered');
	},
	{ passive: true }
);

Btn.addEventListener('dblclick', (e) => {
	window.location.reload();
});
