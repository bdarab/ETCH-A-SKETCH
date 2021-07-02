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
