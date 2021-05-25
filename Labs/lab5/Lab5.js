var barking = new Audio("barking.wav");
var chime = new Audio("chime.wav");
var piano = new Audio("piano.wav")
var camera = new Audio("camera_shutter.wav")
var lion = new Audio("lion_roar.wav")


function playAudio(x)
{
  x.play();
}

const dogButton = document.getElementById('dogButton');
dogButton.onclick = function() {
  playAudio(barking);
}

const chimeButton = document.getElementById('chimeButton');
chimeButton.onclick = function() {
  playAudio(chime);
}

const pianoButton = document.getElementById('pianoButton');
pianoButton.onclick = function() {
  playAudio(piano);
}

const cameraButton = document.getElementById('cameraButton');
cameraButton.onclick = function() {
  playAudio(camera);
}

const roarButton = document.getElementById('roarButton');
roarButton.onclick = function() {
  playAudio(lion);
}