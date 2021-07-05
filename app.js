const container = document.querySelector('.container');

const Btn = Object.assign(document.createElement('button'), {
	textContent: `Click For Grid with Random Colors, Double Click to Reset`,
});
BtnContainer.prepend(Btn);

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
	{ passive: true, once: true }
);

// Delegated event listener
container.addEventListener(
	'mouseover',
	function setBg(e) {
		if (!e.target.matches('.container .square')) return;
		e.target.classList !== 'hovered';

		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		e.target.style.backgroundColor = '#' + randomColor;
	},
	{ passive: true }
);

Btn.addEventListener('dblclick', (e) => {
	window.location.reload();
});
