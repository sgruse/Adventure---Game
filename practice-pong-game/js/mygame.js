'use strict';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var wPressed = false;
var dPressed = false;
var sPressed = false;
var aPressed = false;


// PADDLE VARIABLES 1
var paddleHeight = 25;
var paddleWidth = 25;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = (canvas.height-paddleHeight)/2;

// PADDLE VARIABLES 2
var paddleHeight2 = 25;
var paddleWidth2 = 25;
var paddleX2 = (canvas.width-paddleWidth2)/1.5;
var paddleY2 = (canvas.height-paddleHeight2)/1.5;

//EVENT LISTENTERS
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('keydown', keyDownHandler, false);

//EVENT HANDLERS
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 38) {
        upPressed = true;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
    }


    if(e.keyCode == 87) {
      console.log('Up has been pressed');
        wPressed = true;
    }
    else if(e.keyCode == 68) {
        dPressed = true;
    }
    else if(e.keyCode == 83) {
      console.log('Down Key is presed down');
        sPressed = true;
    }
    else if(e.keyCode == 65) {
        aPressed = true;
    }


}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    if(e.keyCode == 37) {
        leftPressed = false;
    }
    if(e.keyCode == 38) {
        upPressed = false;
    }
    if(e.keyCode == 40) {
        downPressed = false;
    }

    if(e.keyCode == 87) {
      console.log('Up has been pressed');
        wPressed = false;
    }
    else if(e.keyCode == 68) {
        dPressed = false;
    }
    else if(e.keyCode == 83) {
      console.log('Down Key is presed down');
        sPressed = false;
    }
    else if(e.keyCode == 65) {
        aPressed = false;
    }
}

function drawPaddle() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.rect(paddleX, paddleY-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    // ctx.fillStyle = "img/myMonster.png";

    ctx.fill();
    ctx.closePath();
}

function drawPaddleTwo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.rect(paddleX2, paddleY2-paddleHeight2, paddleWidth2, paddleHeight2);
    // ctx.fillStyle = "#0095DD";
    ctx.fillStyle = "img/myMonster.png";

    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
  // var blah = ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  drawPaddleTwo();
  drawPaddle();
  drawBall();

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 2;
  }
  if(leftPressed && paddleX > 0) {
    paddleX -= 2;
  }
  if(upPressed && paddleY > 0) {
    paddleY -= 2;
  }
  else if(upPressed && paddleY < canvas.height-paddleHeight)
    paddleY = 25;
  if(downPressed && paddleY < canvas.height-paddleHeight+25 ) {
    paddleY += 2;
  }


  if(dPressed && paddleX2 < canvas.width-paddleWidth2) {
    paddleX2 += 2;
  }
  if(aPressed && paddleX2 > 0) {
    paddleX2 -= 2;
  }
  if(wPressed && paddleY2 > 0) {
    paddleY2 -= 2;
  }
  else if(wPressed && paddleY2 < canvas.height-paddleHeight2)
    paddleY2 = 25;
  if(sPressed && paddleY2 < canvas.height-paddleHeight2+25 ) {
    paddleY2 += 2;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);

}

draw()
