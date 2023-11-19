
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d', { willReadFrequently: true });

const windowWidth = window.innerWidth;
var windowUnit = windowWidth / 300;

document.getElementById('inputFile').addEventListener('change', handleImageInput);
const loadingAnimation = document.getElementsByClassName("lds-ring")[0];

function handleImageInput(event) {
    loadingAnimation.style.display = "inline-block"
	const input = event.target;

	if (input.files && input.files[0]) {
		let image_src = '';
		const reader = new FileReader();
		reader.readAsDataURL(input.files[0]);

		reader.onload = function (e) {
			image_src = e.target.result;
			drawImage(image_src);
		};
	}
}


var pixel, r, g, b, avg, unitX, unitY, scaleX = 2, scaleY = 2, charToDraw;
var characters;
var charQuantity;
var useMoreCharacters = false;
var backgroundColor = 'white';
var charColor = 'black';
var inverted = false;
var colored = false;

function drawImage(image_src) {
	const img = new Image();
	img.src = image_src;

	img.onload = function () {
		canvas.width = windowWidth / 3;
		canvas.height = canvas.width / (img.width / img.height);

		canvas2.width = windowWidth / 3;
		canvas2.height = canvas2.width / (img.width / img.height);

		window.unitX = (img.width / img.width) * scaleX;
		window.unitY = (img.height / img.width) * scaleY;
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		loadingAnimation.style.display = "none"
	};
}

function drawASCII() {
	if (useMoreCharacters) {
		characters = " .'`,:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
	} else {
		characters = ' .:-=+*#%@';
	}
	charQuantity = characters.length;

	ctx2.fillStyle = backgroundColor;
	ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

	if (colored === false) {
		for (let y = 0; y <= canvas.height; y += unitY) {
			for (let x = 0; x <= canvas.width; x += unitX) {
				pixel = ctx.getImageData(x, y, unitX, unitY);
				r = pixel.data[0];
				g = pixel.data[1];
				b = pixel.data[2];
				avg = (r + g + b) / 3;
				charToDraw = characters[Math.round((avg * (charQuantity - 1)) / 255)];

				ctx2.fillStyle = charColor;
				ctx2.font = `${unitX * 1.8}px helvetica bold`;
				ctx2.fillText(charToDraw, x, y);
			}
		}
	} else {
		for (let y = 0; y <= canvas.height; y += unitY) {
			for (let x = 0; x <= canvas.width; x += unitX) {
				pixel = ctx.getImageData(x, y, unitX, unitY);
				r = pixel.data[0];
				g = pixel.data[1];
				b = pixel.data[2];
				avg = (r + g + b) / 3;
				charToDraw = characters[Math.round((avg * (charQuantity - 1)) / 255)];

				ctx2.fillStyle = `rgb(${r}, ${g}, ${b})`;
				ctx2.font = `${unitX * 2}px helvetica bold`;
				ctx2.fillText(charToDraw, x, y);
			}
		}
	}
}

const increaseCharBtn = document.getElementById('increaseCharBtn');

function changeCharacters() {
	if (useMoreCharacters) {
		increaseCharBtn.innerHTML = 'USE MORE CHARACTERS';
		useMoreCharacters = false;
	} else {
		increaseCharBtn.innerHTML = 'USE LESS CHARACTERS';
		useMoreCharacters = true;
	}
	drawASCII();
}

function changeStyle() {
	if (inverted === false) {
		backgroundColor = 'black';
		charColor = 'white';
		inverted = true;
	} else {
		backgroundColor = 'white';
		charColor = 'black';
		inverted = false;
	}

	drawASCII();
}

function changeToColored() {
	if (colored === false) {
		colored = true;
	} else {
		colored = false;
	}
	drawASCII();
}

function changeResolution(){
    if(scaleX === 2){
        scaleX = 1;
        scaleY = 1;   
    } else {
        scaleX = 2;
        scaleY = 2;   
    }

}