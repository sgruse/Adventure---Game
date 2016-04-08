
var stage = document.getElementById('gameCanvas');
stage.width = stageWidth
stage.height = stageHeight
var ctx = stage.getContext('2d')
ctx.fillStyle = 'black';
ctx.font = gameFonts;

var gameLoop = setInterval(update, timePerFrame)
var counter = 0

function update(){
  counter ++;

  ctx.fillStyle = '#AAA';
  ctx.fillRect(0, 0, stage.width, stage.height);

  ctx.fillStyle = '#000';
  ctx.fillText(counter, counterX, counterY);
}

//---------------
//Preloading ...
//---------------
//Preload Art Assets
// - Sprite Sheet

var isMoving = false;

var charImage = new Image();
charImage.ready = false;
charImage.onload = setAssetReady;
charImage.src = PATH_CHAR

function setAssetReady() {
  this.ready = true;
}

//Display preloading
ctx.fillRect(0,0,stage.width,stage.height);
ctx.fillStyle = "#000";
ctx.fillText(textPreloading, textPreloadingX, textPreloadingY);
var preloader = setInterval(preloading, timePerFrame);
var gameloop, currX, currY;

function preloading()
{
	if (charImage.ready)
	{
		clearInterval(preloader);

    faceing = 'E';
    isMoving = false;

		gameloop = setInterval(update, timePerFrame);
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
	}
}

// KEY HANDLERS

function keyDownHandler(e) {
  var keyPressed = String.fromCharCode(e.keycode);

// if (keyPressed == 'W') || (keyPressed == 'A') || (keyPressed == 'S') || (keyPressed == 'D') {
//   isMoving = false;
// }

  if (keyPressed == 'W') {
    faceing = 'N';
    isMoving = true;
  }
  else if (keyPressed == 'D') {
    faceing = 'E';
    isMoving = true;
  }
  else if (keyPressed == 'S') {
    facing = 'S';
    isMoving = true;
  }
  else if (keyPressed == 'A') {
    facing = 'W';
    isMoving = true;
  }
}

function keyUpHandler(e)
{
	var keyPressed = String.fromCharCode(e.keyCode);

	if ((keyPressed == "W") || (keyPressed == "A") ||
		(keyPressed == "S") || (keyPressed == "D"))
	{
		isMoving = false;
	}
}

//------------
//Game Loop
//------------
currX = imageStartX;
currY = imageStartEastY;
charX = charStartX
charY = charStartY

function update() {
	//Clear Canvas
	ctx.fillStyle = "grey";
	ctx.fillRect(0, 0, stage.width, stage.height);

	//Draw Image
	ctx.drawImage(charImage,currX,currY,charWidth,charHeight,
					charStartX,charStartY,charWidth,charHeight);

	currX += charWidth;
	if (currX >= spriteWidth)
		currX = 0;
}

if (isMoving) {
  if (facing == 'N') {
    charY -= charSpeed;
    currY = imageStartNorthY;
  }
  else if (facing == 'E') {
    charX += charSpeed;
    currY = imageStartEastY
  }
  else if (facing == 'S') {
    charY += charSpeed;
    currY = imageStartSouthY;
  }
  else if (facing == 'W') {
    charX -= charSpeed;
    curry = imageStartWestY
  }
  currx += charWidth;

  if (currX >= spriteWidth)
  currX = 0;
}
ctx.drawImage(charImage,currX, currY, charWidth, charHeight, charX, charY, charWidth, charHeight)
