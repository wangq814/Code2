let H;
let W;
let F;
let R1,G1,B1;
let R2,G2,B2;
let R3,G3,B3;


function setup() {
 createCanvas(500,500); 
 
}



function draw(){
	background(0);
	H = 100;
    W = 100;
    F = 255;
	R1=255;
	G1=0;
	B1=0;
	R2=255;
	G2=255;
	B2=0;
	R3=0;
	G3=0;
	B3=255;
	fill(R1,G1,B1);
	rect(100,100,W,H);
	fill(R2,G2,B2);
	rect(200,200,W,H);
	fill(R3,G3,B3);
	rect(300,300,W,H);
	
	
}


function mouseClicked(){
//	
//	R1=0;
//	G1=255;
//	B1=0;
//	R2=0;
//	G2=255;
//	B2=255;
//	R3=255;
//	G3=0;
//	B3=255;
	 console.log(mouseClicked());
}