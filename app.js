const body = document.querySelector('body');
const squares = document.querySelectorAll('.square');
const Btn = document.createElement('button');
const container = document.querySelector('.container');

body.append(Btn);
body.insertBefore(Btn, container);
Btn.innerText = 'Create A New Grid';
Btn.addEventListener('click', (e) => {
	e.preventDefault();
	for (i = 0; i < 256; i++) {
		const el = document.createElement('div');

		container.append(el);
		let squares = el.classList.add('square');
		el.setAttribute('id', i);
	}
});
