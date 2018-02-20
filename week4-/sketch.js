let v;
let vehicles = [];

function setup(){
createCanvas(800, 800);
let numVehicles = 15;
for (let i = 0; i<numVehicles;i++){

v = new Vehicle(createVector(random(0,width),random(0,height)))
v.color = color(random(0,255), random(0,255),random(0,255));
v.maxSpeed =  random(1,8);
vehicles.push(v);
}
v = new Vehicle(createVector(width/2, height/2));
}


function draw(){
  background(255);

  // fill(200,200,200,100);
  // stroke(0);
  // strokeWeight(2);
  // ellipse(mouseX, mouseY,48,48);
  for (let v of vehicles) {
  v.seek(createVector(mouseX, mouseY)); 
  v.update();
  v.display();
}
}


class Vehicle{
constructor(position){

this.position = position;
this.velocity = createVector(0,0);
this.acceleration = createVector(0,0);

this.r = 6;
this.color = color(255,0,0);

this.maxSpeed = 4; 
}

seek(target){
   let desired = target.sub(this.positioin);
   desired.setMag(this.maxSpeed);
   let steer = desired.sub(this.velocity);
   this.applyForce(steer);
}


applyForce(force){
    this.acceleration.add(force);


}


update() {

this.velocity.add(this.acceleration);
this.position.add(this.velocity);
this.acceleration.mult(0);
}


display(){
	
	let theta = this.velocity.heading()+HALF_PI;

	fill(this.color);
	stroke(0);
	strokeWeight(1);
	translate(this.position.x, this.position.y);
	rotate(theta);



	beginShape();
    vertex(0, -this.r*2);
    vertex(-this.r,this.r*2);
    vertex(this.r,this.r*2);
	endShape(CLOSE); 

    resetMatrix();


}

}
