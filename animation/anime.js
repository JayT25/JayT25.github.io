const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const frameWidth = 66;
const frameHeight = 92;
const xPos = 120;
const yPos = 190;
const scale = 1;

const fps = 60;
const secUpdate = 1 * fps;
let count = 0;
var frameIndex = 0;

canvas.style.marginTop = window.innerHeight / 2 - canvas.height / 2 + "px";

const spriteSheet = new Image();
spriteSheet.src = "charz.png";

function animate() {
	//start drawing the sprite on sheet
	ctx.drawImage(
		spriteSheet, 
		frameIndex * frameWidth, 
		0, 
		frameWidth, 
		frameHeight, 
		xPos,
		yPos, 
		frameWidth*scale, 
		frameHeight*scale
	);

	count++;

	if (count > 16) {
		frameIndex++;
		count = 0;
	}

	if (frameIndex > 17) {
		frameIndex = 0;
	}

}

function frame() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	animate();
	requestAnimationFrame(frame);
}

frame();