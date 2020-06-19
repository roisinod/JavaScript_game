var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var x = c.width/2;
var y = c.height - 3;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleheight = 10;
var paddlewidth = 75;
var paddleX = (c.width-paddlewidth)/2;
var rightpress = false;
var leftpress = false;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
function keyDownHandler(e) {
    if(e.keyCode == 39) {
    rightpress = true;
    }
    else if (e.keyCode == 37) {
        leftpress = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
    rightpress = false;
    }
    else if (e.keyCode == 37){
        leftpress = false;
    }
}
function drawball() {
ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, c.height-paddleheight, paddlewidth, paddleheight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawball();
    drawPaddle();

    if (y + dy < 0) {
        dy = -dy;
    } else if (y + dy > c.height) {
        if(x > paddleX && x < paddleX + paddlewidth) {
            dy = -dy;
        } else {
            alert('Game over');
            document.location.reload();
        }
    }
    if( x + dx > c.width || x + dx < 0) {
        dx = -dx;
    }
    if(rightpress && paddleX < c.width-paddlewidth) {
        paddleX += 7;
    }
    else if(leftpress && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}
setInterval(draw, 10);
/*
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = '#FF0000';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
ctx.stroke(); //outline
ctx.closePath();

 */
