var overhang = 5;
var roofHeight = 50;


function setup() {
  createCanvas(500, 500)  //creates canvas of size 400x400
  background(255)         //Canvas background has a grayscale gradient of 255
}

function draw() {                     //function which is called repeatedly
  fill(255, 130, 0)                   //the colour of the shapes will be of fill (255,130,0)
  stroke(0)                           //the colour of the border is black
  house(mouseX, mouseY, 100, 100)
  house(mouseX + 110, mouseY, 50, 80)
  house(mouseX - 110, mouseY, 50, 80)



}



function square(x, y, width, height) {
  rect(x, y, width, height)
}
function roof(x, y, width) {
  var roofWidth = width + (2 * overhang)
  triangle(x, y, x + (roofWidth / 2), y - roofHeight, x + roofWidth, y)
}


function house(x, y, width, height) {
  square(x + overhang, y, width, height)
  roof(x, y, width)
}





