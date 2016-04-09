'use strict';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 7;
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

var totalGameScore = playerOneScore + playerTwoScore;
var playerOneScore = 0;
var playerTwoScore = 0;

console.log('WELCOME TO THE GREATEST GAME ON EARTH.  BLUE VS GREY! THE FIRST PLAYER TO COLLECT 15 POINTS WINS THE GAME');

//EVENT LISTENTERS
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('keydown', keyDownHandler, false);

var Character = function() {
  this.name = name;
  this.speed = 0;
  this.width = 0;
  this.height = 0;
}

var BlueCharacter = function() {
  this.speed = 5;
  this.draw = drawPaddle();
}

BlueCharacter.prototype = new Character();

var greyCharacter = function() {
  this.height = 15;
  this.width = 15;
  this.draw = drawPaddleTwo();
}

greyCharacter.prototype = new Character();

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

function drawScorePlayerOne() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Blue Player Score : "+playerOneScore, 8, 20);
}

function drawScorePlayerTwo() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#666';
  ctx.fillText("Grey Player Score : " +playerTwoScore, 315, 20);
}

//BALL COORDINATES
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

var powerCordX,
  powerCordY;

var powerStatus = 0;

// DRAW POWER UP
function drawPowerUp() {
  if (powerStatus == 1) {
    ctx.beginPath();
    ctx.arc(coordX+50, coordY+50, 15, 0, Math.PI*2);
    ctx.fillStyle = '#FOOOOO';
    ctx.fill();
    powerCordX = coordX+50;
    powerCordY = coordY+50;
    ctx.closePath();
  }
}

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
    ctx.fillStyle = "img/myMonster.png";

    ctx.fill();
    ctx.closePath();
}

var powerSpeeds = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9]
var powerIndexOne = 0;
var powerIndexTwo = 0;

var sizeGains = [5, 7, 8, 10, 11, 13, 15, 20, 23, 25, 27, 30, 33, 36, 40]
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

  var powerDistOne = ((paddleX - powerCordX) * (paddleX - powerCordX) + (paddleY - powerCordY) * (paddleY - powerCordY))
  var powerDistTwo = ((paddleX2 - powerCordX) * (paddleX2 - powerCordX) + (paddleY2 - powerCordY) * (paddleY2 - powerCordY))

// PLAYER ONE
if (dist < 100) {
  playerOneBallCount ++
  sizeGainsIndexOne ++
  ballStatus = 0;
  randomCoordX(30, 460)
  randomCoordY(30, 300)
  ballStatus = 1;
  playerOneScore ++
  powerIndexOne ++
  if (playerOneScore >= 15) {
    console.log('GAME OVER! PLAYER ONE WINS!!!');
  }
}

if (powerDistOne < 100) {
  console.log('PLAYER ONE GETS A SPEED POWER UP OF +5');

  powerStatus = 0;
  alert();
}

if (powerDistTwo < 100) {
  console.log('PLAYER TWO GETS A SIZE POWER UP OF +5 PIXELS');
  powerStatus = 0;
}

// PLAYER TWO
if (dist2 < 100) {
  playerTwoBallCount ++
  ballStatus = 0;
  randomCoordX(30, 440)
  randomCoordY(30, 270)
  ballStatus = 1;
  playerTwoScore ++
  powerIndexTwo ++
  sizeGainsIndexTwo ++
  if (playerTwoScore >= 15) {
    console.log('GAME OVER! PLAYER TWO WINS!!!');
  }
  }
}

function draw() {
  drawPaddleTwo();
  drawPaddle();
  drawBall();
  drawScorePlayerOne();
  drawScorePlayerTwo();
  bb();

  totalGameScore = playerOneScore + playerTwoScore

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

  if (totalGameScore == 4 || totalGameScore == 10) {
    powerStatus = 1;
    drawPowerUp();
  }

  requestAnimationFrame(draw);

}

randomCoordX(30, 460)
randomCoordY(30, 285)
draw()
