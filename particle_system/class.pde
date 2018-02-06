 class Particle {
  float x, y, xSpeed, ySpeed;
  float gravity = 1;
  float maxSpeed = 10;

  
  Particle() {
    x = width/2;
    y = height/3;
   
    
   
    PVector speed = PVector.random2D();
    xSpeed = speed.x * random(-maxSpeed, maxSpeed);
    ySpeed = speed.y * random(-maxSpeed, maxSpeed);
    
  
  }
  void move() {
    x+=xSpeed;
    y+=ySpeed;
    ySpeed += gravity;
    
    fill(random(155),random(155),255);
    ellipse(x, y, 15, 15);
  }
}