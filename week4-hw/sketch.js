


let vehicles = [];


function setup() {
  createCanvas(800, 600);
  for (var i=0; i<100; i++){
    vehicles.push(new Vehicle())
  }

}

function draw() {
  background(255);
  let mousePosition = createVector(mouseX, mouseY);
  for (var i=0; i<vehicles.length; i++){
    vehicles[i].seek(mousePosition);
    vehicles[i].update();
    vehicles[i].display();
  }
  
}

class Vehicle {
  constructor(width, height) {
    this.position = createVector(width, height);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);

    // (we can tweak these to make the Vehicle
    // behave differently)
    this.r = 6;
    this.maxSpeed = 4;
    this.maxForce = 0.1;
}

  seek(target) {
    let desired = target.sub(this.position);
    desired.setMag(this.maxSpeed);
    let steer = desired.sub(this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity)

    this.acceleration.mult(0);
  }

  display() {
    let theta = this.velocity.heading() + HALF_PI;

    fill(127);
    stroke(0);
    strokeWeight(1);

    translate(this.position.x, this.position.y);
    rotate(theta);

    beginShape();
    vertex(0, -this.r*2);
    vertex(-this.r, this.r*2);
    vertex(this.r, this.r*2);
    endShape(CLOSE);
    
    resetMatrix();
  }

}