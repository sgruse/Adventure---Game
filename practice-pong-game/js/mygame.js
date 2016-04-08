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

var ballStatus = 1;
var playerOneBallCount = 0;
var playerTwoBallCount = 0;


var sizeGains = [25, 80, 100]
var sizeGainsIndex = 0;
console.log(sizeGainsIndex)

// PADDLE VARIABLES 1
var paddleHeight = sizeGains[sizeGainsIndex];
var paddleWidth = sizeGains[sizeGainsIndex];
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = (canvas.height-paddleHeight)/2;

// PADDLE VARIABLES 2
var paddleHeight2 = sizeGains[sizeGainsIndex];
var paddleWidth2 = sizeGains[sizeGainsIndex];
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
        wPressed = true;
    }
    else if(e.keyCode == 68) {
        dPressed = true;
    }
    else if(e.keyCode == 83) {
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
        wPressed = false;
    }
    else if(e.keyCode == 68) {
        dPressed = false;
    }
    else if(e.keyCode == 83) {
        sPressed = false;
    }
    else if(e.keyCode == 65) {
        aPressed = false;
    }
}

//BALL COORDINATES
var xYCord = [[80, 90], [50, 75], [125, 130], [354, 22], [354, 89], [644, 233], [444, 858], [234, 344]]
var index = 0;
function drawBall() {
  if (ballStatus == 1) {
  ctx.beginPath();
  ctx.arc(xYCord[index][0], xYCord[index][1], ballRadius, 0, Math.PI*2);
  // console.log('INDEX COUNTER : ' + index);
  ctx.fillStyle = "#666";
  ctx.fill();
  ctx.closePath();
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


function bb() {
  // BALL STATUS AND DISSIPEARING
  var dist = ((paddleX - xYCord[index][0]) * (paddleX - xYCord[index][0]) + (paddleY - xYCord[index][1]) * (paddleY - xYCord[index][1]))
  var dist2 = ((paddleX2 - xYCord[index][0]) * (paddleX2 - xYCord[index][0]) + (paddleY2 - xYCord[index][1]) * (paddleY2 - xYCord[index][1]))

// console.log(dist);
if (dist < 100) {
  playerOneBallCount ++
  // console.log('Player One Ball Count : ' + playerOneBallCount);
  ballStatus = 0;
  index ++
  ballStatus = 1;
  powerIndex ++
  sizeGainsIndex ++
}


if (dist2 < 100) {
  playerTwoBallCount ++
  console.log('Player Two Ball Count : ' + playerTwoBallCount);
  ballStatus = 0;
  index ++
  ballStatus = 1;
  powerIndex ++

  }
}

var powerSpeeds = [2, 3, 4, 5, 6, 7, 8, 9]
var powerIndex = 0;

function draw() {
  drawPaddleTwo();
  drawPaddle();
  drawBall();
  bb();

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += powerSpeeds[powerIndex];
  }
  if(leftPressed && paddleX > 0) {
    paddleX -= powerSpeeds[powerIndex];
  }
  if(upPressed && paddleY > 0) {
    paddleY -= powerSpeeds[powerIndex];
  }
  else if(upPressed && paddleY < canvas.height-paddleHeight)
    paddleY = 25;
  if(downPressed && paddleY < canvas.height-paddleHeight+25 ) {
    paddleY += powerSpeeds[powerIndex];
  }


  if(dPressed && paddleX2 < canvas.width-paddleWidth2) {
    paddleX2 += powerSpeeds[powerIndex];
  }
  if(aPressed && paddleX2 > 0) {
    paddleX2 -= powerSpeeds[powerIndex];
  }
  if(wPressed && paddleY2 > 0) {
    paddleY2 -= powerSpeeds[powerIndex];
  }
  else if(wPressed && paddleY2 < canvas.height-paddleHeight2)
    paddleY2 = 25;
  if(sPressed && paddleY2 < canvas.height-paddleHeight2+25 ) {
    paddleY2 += powerSpeeds[powerIndex];
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);

}

draw()
