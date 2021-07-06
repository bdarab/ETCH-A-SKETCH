const buttons = document.querySelectorAll('button');
const gridContainer = document.querySelector('.screen');

let pixel = '';
let blockSize = 50;

const createGrid = (screenSize) => {
	for (i = 0; i < screenSize ** 2; i++) {
		pixel = document.createElement('div');
		pixel.classList.add('pixel');
		pixel.style.backgroundColor = 'white';
		gridContainer.appendChild(pixel);
	}
	gridContainer.style.gridTemplateColumns = `repeat(${screenSize}, auto)`;
	gridContainer.style.gridTemplateRows = `repeat(${screenSize}, auto)`;
};

createGrid(blockSize);

const clear = (request) => {
	if (request === 'resize') {
		blockSize = prompt('please enter a new grid size of not more than 100', 50);
		if (blockSize > 100 || blockSize === null) {
			blockSize = 50;
		}
	}
	gridContainer.innerHTML = '';
	createGrid(blockSize);
	active();
};

let defaultColor = 'black';
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.id === 'resize' || button.id === 'clear') {
			clear(button.id);
		} else {
			defaultColor = button.id;
			clear(button.id);
		}
	});
});

const randomColor = () => {
	let color = 'rgba(';
	for (let i = 0; i < 3; i++) {
		color += Math.floor(Math.random() * 255) + ',';
	}
	return color + '1)';
};

const active = () => {
	let pixels = document.querySelectorAll('.pixel');
	pixels.forEach((pxl) => {
		pxl.addEventListener('mouseover', (e) => {
			let currentColor = getComputedStyle(pxl, null).getPropertyValue(
				'background-color'
			);
			switch (defaultColor) {
				case 'black':
					e.target.style.backgroundColor = 'rgba(0,0,0)';
					break;
				case 'colors':
					e.target.style.backgroundColor = randomColor();
					break;
				case 'shading':
					e.target.style.backgroundColor = shading(currentColor);
			}
		});
	});
};
active();
