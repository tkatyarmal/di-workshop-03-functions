//var x = 0
var speedX = 2
var speedY = 2

var ballPositionX = 0
var ballPositionY = 0


var canvasLength = 300
var canvasHeight = 500

function setup() {
  createCanvas(canvasLength, canvasHeight)
}

function draw() {
  background(100)

  // x = x + speed

  // if (x < 0) {
  //   speed = speed * -1
  // } else if (x > 300) {
  //   speed = speed * -1
  // }

  ballPositionX = ballPositionX + speedX
  ballPositionY = ballPositionY + speedY

  ballShouldBounce(ballPositionX, ballPositionY)




  ellipse(ballPositionX, ballPositionY, 10, 10)
}


function ballShouldBounce(x, y) {

  if (x < 0 || x > canvasLength) {
    speedX = speedX * -1
  }

  if (y < 0 || y > canvasHeight) {
    speedY = speedY * -1
  }

}

