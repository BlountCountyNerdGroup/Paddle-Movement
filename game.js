var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();

    if(rightPressed) {
    paddleX += 7;
    }
    else if(leftPressed) {
        paddleX -= 7;
    }

}
setInterval(draw, 10);