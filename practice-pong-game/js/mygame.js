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

var coordX,
  coordY;
// RANDOM BALL COORDINATES
function randomCoordX(min, max) {
  coordX = Math.floor(Math.random() * (max - min)) + min;
}

function randomCoordY(min, max) {
  coordY = Math.floor(Math.random() * (max - min)) + min;
}

//BALL COORDINATES
// var xYCord = [[80, 190], [50, 75], [125, 130], [354, 22], [354, 89], [80, 233], [90, 80], [234, 344], [81, 92], [51, 78], [125, 130], [354, 22], [354, 89], [644, 233], [444, 858], [234, 344]]
var xYCord = [[80, 190], [50, 75], [125, 130], [354, 22], [354, 89], [80, 233], [90, 80], [234, 344], [81, 92], [51, 78], [125, 130], [354, 22], [354, 89], [644, 233], [444, 858], [234, 344]]

var index = 0;
function drawBall() {
  if (ballStatus == 1) {
  ctx.beginPath();
  ctx.arc(coordX, coordY, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#666";
  ctx.fill();
  ctx.closePath();
  }
}

// function drawBall() {
//   if (ballStatus == 1) {
//   ctx.beginPath();
//   ctx.arc(xYCord[index][0], xYCord[index][1], ballRadius, 0, Math.PI*2);
//   ctx.fillStyle = "#666";
//   ctx.fill();
//   ctx.closePath();
//   }
// }

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY-sizeGains[sizeGainsIndexOne], sizeGains[sizeGainsIndexOne], sizeGains[sizeGainsIndexOne]);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddleTwo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.rect(paddleX2, paddleY2-sizeGains[sizeGainsIndexTwo], sizeGains[sizeGainsIndexTwo], sizeGains[sizeGainsIndexTwo]);
    // ctx.fillStyle = "#0095DD";
    ctx.fillStyle = "img/myMonster.png";

    ctx.fill();
    ctx.closePath();
}

var powerSpeeds = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9]
var powerIndexOne = 0;
var powerIndexTwo = 0;

var sizeGains = [30, 30, 30, 40, 40, 40, 50, 50, 50, 60, 60, 60, 70, 70, 70]
var sizeGainsIndexOne = 0;
var sizeGainsIndexTwo = 0;

// PADDLE VARIABLES 1
var paddleHeight = sizeGains[sizeGainsIndexOne];
var paddleWidth = sizeGains[sizeGainsIndexOne];
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = (canvas.height-paddleHeight)/2;

// PADDLE VARIABLES 2
var paddleHeight2 = sizeGains[sizeGainsIndexTwo];
var paddleWidth2 = sizeGains[sizeGainsIndexTwo];
var paddleX2 = (canvas.width-paddleWidth2)/1.5;
var paddleY2 = (canvas.height-paddleHeight2)/1.5;


function bb() {
  // BALL STATUS AND DISSIPEARING
  var dist = ((paddleX - coordX) * (paddleX - coordX) + (paddleY - coordY) * (paddleY - coordY))
  var dist2 = ((paddleX2 - coordX) * (paddleX2 - coordX) + (paddleY2 - coordY) * (paddleY2 - coordY))

// PLAYER ONE
if (dist < 100) {
  playerOneBallCount ++
  sizeGainsIndexOne ++
  ballStatus = 0;
  // index ++
  randomCoordX(0, 479)
  randomCoordY(0, 319)
  ballStatus = 1;
  powerIndexOne ++
}

// PLAYER TWO
if (dist2 < 100) {
  playerTwoBallCount ++
  ballStatus = 0;
  // index ++
  ballStatus = 1;
  powerIndexTwo ++
  sizeGainsIndexTwo ++

  }
}

function draw() {
  drawPaddleTwo();
  drawPaddle();
  drawBall();
  bb();
  console.log('SIZE ONE INDEX VALUE : ' + sizeGainsIndexOne);

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += powerSpeeds[powerIndexOne];
  }
  if(leftPressed && paddleX > 0) {
    paddleX -= powerSpeeds[powerIndexOne];
  }
  if(upPressed && paddleY > 0) {
    paddleY -= powerSpeeds[powerIndexOne];
  }
  else if(upPressed && paddleY < canvas.height-paddleHeight)
    paddleY = 25;
  if(downPressed && paddleY < canvas.height-paddleHeight+25 ) {
    paddleY += powerSpeeds[powerIndexOne];
  }


  if(dPressed && paddleX2 < canvas.width-paddleWidth2) {
    paddleX2 += powerSpeeds[powerIndexTwo];
  }
  if(aPressed && paddleX2 > 0) {
    paddleX2 -= powerSpeeds[powerIndexTwo];
  }
  if(wPressed && paddleY2 > 0) {
    paddleY2 -= powerSpeeds[powerIndexTwo];
  }
  else if(wPressed && paddleY2 < canvas.height-paddleHeight2)
    paddleY2 = 25;
  if(sPressed && paddleY2 < canvas.height-paddleHeight2+25 ) {
    paddleY2 += powerSpeeds[powerIndexTwo];
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);

}
randomCoordX(0, 479)
randomCoordY(0, 319)
draw()
