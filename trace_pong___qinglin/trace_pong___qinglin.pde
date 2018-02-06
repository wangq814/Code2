
int xPos = width/2;  // x position of the ball
int yPos = height/2;
//float[] ballX = new float[balls];
//float[] ballY = new float[balls];
int d = 40; // diameter of the ball;
float xSpeed = random(4,6);
float ySpeed = random(3,5);
int boxY = 0;
int num = 30;
float[] lineY = new float[num];
//int pad1X = 40;
//int pad1Y = height/2;
//int pad2X = width - 40;
//int pad2Y = height/2;
int pad1X = 40;
int pad1Y = 300;
int pad2X = 760;
int pad2Y = 300;
int padWidth = 15;
int padHeight = 100;
int padSpeed = 10;



int score1 = 0;
int score2 = 0;

boolean pad1Up = false;
boolean pad1Down = false;
boolean pad2Up = false;
boolean pad2Down = false;







void setup() {
size(800,600);
  noStroke();
  rectMode(CENTER);
  for (int i = 0; i < num; i++){
    lineY[i] = i * 30;
  } 
}

void draw() {
  background(0);
  
  textSize(40);
  text(score1, 200, 100);
  text(score2, 600, 100);
  
  fill(255);
  
  for (int i = 0; i <num; i++) {
    rect(400, lineY[i], 8, 25);
   
  }
 
  
  rect(pad1X, pad1Y, padWidth, padHeight);
  rect(pad2X, pad2Y, padWidth, padHeight);


  if (pad1Up && pad1Y >= padHeight/2) {
    pad1Y -= padSpeed;
  }
  if (pad1Down && pad1Y <= height-padHeight/2) {
    pad1Y += padSpeed;
  }
  if (pad2Up && pad2Y >= padHeight/2) {
    pad2Y -= padSpeed;
  }
  if (pad2Down && pad2Y <= height-padHeight/2) {
    pad2Y += padSpeed;
  }
  fill(255);
  ellipse(xPos, yPos, d, d);
  
  xPos += xSpeed;
  yPos += ySpeed;

  if (xPos + d/2 >= width) {
    xSpeed *= -1;
    score1++;
    xPos = width/2;
    yPos = height/2;
  }

  if (xPos - d/2 <= 0) {
    xSpeed *= -1;
    score2++;
    xPos = width/2;
    yPos = height/2;

  }

  if (yPos - d/2 <= 0 ||
    yPos + d/2 >= height) {

    ySpeed *= -1;
  }
  
  
  if(xPos - d/2 <= pad1X + padWidth/2 && yPos + d/2 >= pad1Y - padHeight/2
 && yPos - d/2 <= pad1Y + padHeight/2 ){
    xSpeed *= -1;
    xPos += 5;
  }
 
  if(xPos + d/2 >= pad2X - padWidth/2 && yPos + d/2 >= pad2Y - padHeight/2
 && yPos - d/2 <= pad2Y + padHeight/2 ){  
  xSpeed *= -1;
  xPos -=5;
}
}


void keyPressed(){

if(key == 'w'||key == 'W'){
  pad1Up = true;
}

if(key == 's'||key == 'S'){
  pad1Down = true;
}

if(keyCode == UP){
  pad2Up =true;
}

if(keyCode == DOWN){
  pad2Down = true;
}
}
void keyReleased(){
if(key == 'w'){
  pad1Up = false;
}

if(key == 's'){
 pad1Down = false;
}

if(keyCode == UP){
  pad2Up =false;
}

if(keyCode == DOWN){
  pad2Down = false;
}
}