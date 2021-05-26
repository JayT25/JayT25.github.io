const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const frameWidth = 63;
const frameHeight = 69;
const xPos = 230;
const yPos = 260;


const fps = 60;
const secUpdate = 1 * fps;
let count = 0;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

const spritesheet = new Image("acharz.png");

function animate() {
	//start drawing the sprite on sheet
	ctx.drawImage(
		spritesheet, 
		0, 
		0, 
		frameWidth, 
		frameHeight, 
		xPos,
		yPos, 
		frameWidth*scale, 
		frameHeight*scale
	);

}

function frame() {
	ctx.clearRect(0, 0, width, height);
	animate();
	requestAnimationFrame(frame);
}

frame();