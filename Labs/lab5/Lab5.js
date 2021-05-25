var barking = new Audio('Labs/lab5/barking.wav');
var chime = new Audio('Labs/lab5/chime.wav');
var piano = new Audio('Labs/lab5/piano.wav');
var camera = new Audio('Labs/lab5/camera.wav');
var lion = new Audio('Labs/lab5/lion.wav');


function playAudio(pA)
{
  pA.play();
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