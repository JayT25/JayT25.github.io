var barking = new Audio("barking.wav");
var chime = new Audio("chime.mp3");
var piano = new Audio("piano.wav")
var camera = new Audio("camera_shutter.mp3")
var lion = new Audio("lion_roar.mp3")


function play(x)
{
  x.play();
}

const dogButton = document.getElementById('dogButton');
dogButton.onclick = function() {
  play(barking);
}

const chimeButton = document.getElementById('chimeButton');
chimeButton.onclick = function() {
  play(chime);
}

const pianoButton = document.getElementById('pianoButton');
pianoButton.onclick = function() {
  play(piano);
}

const cameraButton = document.getElementById('cameraButton');
cameraButton.onclick = function() {
  play(camera);
}

const roarButton = document.getElementById('roarButton');
roarButton.onclick = function() {
  play(lion);
}