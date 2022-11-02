let flower;


function setup() {
  createCanvas(400, 400);
  flower = new walker();
}

function draw() {
  background(50);
  
  flower.show();
}

class walker {
  constructor() {
  translate(200, 200);  
}
  show(){
  translate(200, 200);  
  noStroke();
  for (let i = 0; i < 10; i ++) {
  ellipse(0, 30, 20, 80);
  rotate(PI/5);
  }
  }
}