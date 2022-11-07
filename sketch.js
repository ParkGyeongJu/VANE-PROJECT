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
  this.pos = createVector(width/2,height/2);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
}
  show(){
  translate(200, 200);  
  noStroke();
  fill(150,50,50,50);
  for (let i = 0; i < 10; i ++) {
  ellipse(0, 30, 20, 80);
  rotate(PI/3);
  }
  }
}