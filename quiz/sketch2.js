let H;
let W;

function setup() {
 createCanvas(500,500); 
 
}



function draw(){
	background(0);
	H = 100;
	W = mouseX/5;
	if (mouseX > 500){
		mouseX = 500;
	}
	fill(255,0,0);
	rect(100,100,W,H);
	fill(255,255,0);
	rect(200,200,W,H);
	fill(0,0,255);
	rect(300,300,W,H);
	
	
	
	
}