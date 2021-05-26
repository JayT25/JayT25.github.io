function init()
{
    window.requestAnimationFrame(draw);
}

var fruit = [

{name:"Apple", quantity:20, color:"red"},
{name:"Orange", quantity:10, color:"orange"},
{name:"Banana", quantity:15, color:"yellow"},
{name:"Kiwi", quantity:3, color:"green"},
{name:"Blueberry", quantity:5, color:"blue"},
{name:"Grapes", quantity:8, color:"purple"}

];

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");




function draw()
{
    window.requestAnimationFrame(draw);

    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    fruit.forEach((f, i) =>
    {
        ctx.fillStyle = f.color;
        ctx.fillRect(i * 100, 600 - (f.quantity * 30), 600 / fruit.length, 600);
        ctx.fillStyle = 'cyan';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(f.quantity, i * 100 + 50, 600 - 50, 600 / fruit.length);
        ctx.fillText(f.name, i * 100 + 50, 600 - 25, 600 / fruit.length);
    });
}

init();

