"use strict";

var Canv = {
    canvas : undefined,
    canvasContext : undefined,
    rectanglePosition : 0
};

Canv.start = function () {
    Canv.canvas = document.getElementById("mycanvas");
    Canv.context =  Canv.canvas.getContext("2d");


    // color ground 
    Canv.context.fillStyle = "#996600";
    //draw ground
    Canv.context.fillRect(0,(Canv.canvas.height - 80), Canv.canvas.width, 80);
    //color sky
    Canv.context.fillStyle = "#66ccff";
    //draw sky
    Canv.context.fillRect(0,0, Canv.canvas.width, (Canv.canvas.height - 80));

    //Caption
    Canv.context.font = "20px Calibri";
    Canv.context.fillStyle = "Black";
    Canv.context.fillText("Summer", 0,20);


    //Grass
    var i;
    for ( i = 0; i < 10000; i++) {
        //color grass
        Canv.context.fillStyle = "#006600";
        //random x,y pos for grass
        var grassX = Math.floor(Math.random() * (Canv.canvas.width-5)) + 1;
        var grassY = Math.floor(Math.random() * (Canv.canvas.height-10)) + 310;
        // draw grass
        Canv.context.fillRect(grassX,grassY, 2, 25);
    }

    //Sun
    Canv.context.beginPath();
    Canv.context.arc(540, 50, 50, 0, 2 * Math.PI);
    Canv.context.fillStyle = "Gold";
    Canv.context.fill();

    //House
    Canv.context.fillStyle = "#800000";
    var houseX = Canv.canvas.width/2;
    var houseY = Canv.canvas.height/2 - 50;
    Canv.context.fillRect(houseX, houseY, 170, 175);

    //Door
    Canv.context.fillStyle = "#a6a6a6";
    var doorX = 365;
    var doorY = 265;
    Canv.context.fillRect(doorX,doorY, 40, 60);

    //Doorknob
    Canv.context.beginPath();
    Canv.context.arc(400, 300, 5, 0, 2 * Math.PI);
    Canv.context.fillStyle = "Black";
    Canv.context.fill();

    //Arc Window
    Canv.context.beginPath();
    Canv.context.arc(385, 200, 35, 3.12, 2 * Math.PI);
    Canv.context.fillStyle = "#66ccff";
    Canv.context.fill();

    //Lines on window
    Canv.context.beginPath();
    Canv.context.moveTo(385,200);
    Canv.context.lineTo(360,176);
    Canv.context.stroke();

    Canv.context.beginPath();
    Canv.context.moveTo(385,200);
    Canv.context.lineTo(410,176);
    Canv.context.stroke();

    Canv.context.beginPath();
    Canv.context.moveTo(385,200);
    Canv.context.lineTo(385,165);
    Canv.context.stroke();

    //Tree
    Canv.context.fillStyle = "#663300";
    Canv.context.fillRect(40,240,15,80);

    //leaves on tree
    Canv.context.beginPath();
    Canv.context.arc(50, 260, 35, 3.12, 2 * Math.PI);
    Canv.context.fillStyle = "#006600";
    Canv.context.fill();

    Canv.context.beginPath();
    Canv.context.arc(50, 230, 25, 3.12, 2 * Math.PI);
    Canv.context.fillStyle = "#006600";
    Canv.context.fill();

    Canv.context.beginPath();
    Canv.context.arc(50, 208, 15, 3.12, 2 * Math.PI);
    Canv.context.fillStyle = "#006600";
    Canv.context.fill();
    
    //Cloud
    Canv.context.beginPath();
    Canv.context.arc(200, 100, 60 * .5, Math.PI * 0.5, Math.PI * 1.5);
    Canv.context.arc(200 + (70 * .5), 100 - (60 * .5), 70 * .5, Math.PI * 1, Math.PI * 1.85);
    Canv.context.arc(200 + (152 * .5), 100 - (45 * .5), 50 * .5, Math.PI * 1.37, Math.PI * 1.91);
    Canv.context.arc(200 + (200 * .5), 100, 60 * .5, Math.PI * 1.5, Math.PI * 0.5);
    Canv.context.fillStyle = 'white';
    Canv.context.fill();




};

document.addEventListener("DOMContentLoaded", Canv.start);