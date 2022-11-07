let flower;


function setup() {
  createCanvas(400, 400);
  flower = new walker();
}

function draw() {
  background(50);
  
  flower.show();
  let wind = createVector(0.1,0);
  flower.applyForce(wind);
  
  let gravity = createVector(0,0.2);
  
  let weight=p5.Vector.mult(gravity, flower.mass);
  
  flower.applyForce(weight);
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
  
  applyForce(force){
    let f = p5.Vector.div(force,this.mass);
    this.acc.add(f);
  }
  
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
    
  }
}
  