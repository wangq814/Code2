let H;
let W;
let value;

function setup() {
 createCanvas(500,500); 
 
}



function draw(){
	
	background(0);
	H = 100;
	W = 100;
	
	
	
	if (mouseIsPressed){
	   background(255);
	}
	
	fill(255,0,0);
	rect(100,100,W,H);
	
}

//function mouseClicked(){
//	if((mouseX>100)&&(mouseX<200)&&(mouseY>100)&&(mouseY<200)){
//		value = 255;
//	}
//	
//}