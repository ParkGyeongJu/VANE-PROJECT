// let flower;


// function setup() {
//   createCanvas(400, 400);
//   ellipseMode(CENTER);
//   flower = new walker(200,200,0.5);
// }

// function draw() {
//   background(50);
  
//   flower.show();
  
//   if(mouseIsPressed){
//   let wind = createVector(5,0);
//   flower.applyForce(wind);
//   }
  
  
//   let gravity = createVector(0,0.1);
  
//   let weight=p5.Vector.mult(gravity, flower.mass);
  
//   flower.applyForce(weight);
  
//   flower.update();
// }

// class walker {
  
  
  
//   constructor(x,y,m) {
//   this.pos = createVector(width/2,height/2);
//   this.vel = createVector(0,0);
//   this.acc = createVector(0,0);
//   this.mass=m;
  
// }
  
  
  
//   show(){  
//     push();
//     noStroke();
//   fill(150,50,50,50);
//  translate(width/2,height/2);
//     rotate(PI/3);
//     ellipse(0,30,20,80);
//     pop();
//   }
//   // for (let i = 0; i < 10; i ++) {
//   // ellipse(this.pos.x, this.pos.y, 20, 80);
//   // rotate(PI/3);
//   //}
  
//   applyForce(force){
//     let f = p5.Vector.div(force,this.mass);
//     this.acc.add(f);
//   }
  
  
//   update(){
//     this.vel.add(this.acc);
//     this.pos.add(this.vel);
//     this.acc.set(0,0);
//   }
// }

let flower;

let degree;
let framerate;

function setup(){
  createCanvas(400,400);
  ellipse(CENTER);
  noStroke();
  degree=0;
  framerate=30;
  
  flower = new walker(200,200);
}

function draw(){
  background(0);
  fill(255);
  frameRate(framerate);
  flower.turnEllipse();
}

class walker{
  constructor(x,y){
    this.pos = createVector(width/2,height/2);
  }
  
  turnEllipse(){
    fill(0,255,0,30);
    push();
    translate(width/2,height/2);
    
    if(mouseIsPressed){
      rotate(++degree);
    }else{
      rotate(0);
    }
    ellipse(0,30,20,80);
    pop();
  }
} 
  