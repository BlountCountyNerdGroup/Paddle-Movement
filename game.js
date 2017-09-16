var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();

}
setInterval(draw, 10);