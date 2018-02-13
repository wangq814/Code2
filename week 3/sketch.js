var bubbles = [];
var numOfBubbles = 200;



function setup() {
	createCanvas(500, 700, WEBGL);

	
	//let position = createVector(x,y);

	for (var i = 0; i< numOfBubbles; i++){
          bubbles.push(new Bubble());
	}
}

function draw() {
    ambientLight(200,150,150);
    directionalLight(255,255,255,200,-200,100); 
	background(156,121,255);

	
    for (var i=0; i<bubbles.length;i++){
    	bubbles[i].move();
    	bubbles[i].display();
    }
}

function Bubble(){
	
	this.x = random(-250, width-250);
	this.y = random(-10000, -500);
	this.z = random(-200,100);
	this.speed = random(0.05,0.2);
    //this.acceleration = 0.1;
	this.diameter = random(30,50);
	//this.xoff = random(100);


  this.move = function(){
  //this.x += (-1,1);
  this.y += this.speed;
  //this.z += this.speed;

  this.speed += 0.01;
  rotateZ(20);
}

  this.display = function(){
   //ellipse(this.x, this.y, this.diameter, this.diameter);
   push();
   
   translate(this.x, this.y, this.z);
   //noFill();
   noStroke();
   ambientMaterial(255);
   //normalMaterial();
   sphere(this.diameter,14,14);
   pop();


}

}


