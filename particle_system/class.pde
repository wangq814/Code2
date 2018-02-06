 class Particle {
  float x, y, xSpeed, ySpeed;
  float gravity = 1;
  float maxSpeed = 10;
  color drawFill;
  
  Particle() {
    x = buttonX;
    y = buttonY;
    drawFill = color(random(255), 0, 100 + random(155));
    
   
    PVector speed = PVector.random2D();
    xSpeed = speed.x * random(-maxSpeed, maxSpeed);
    ySpeed = speed.y * random(-maxSpeed, maxSpeed);
    
  
  }
  void move() {
    x+=xSpeed;
    y+=ySpeed;
    ySpeed += gravity;
    
    fill(drawFill);
    ellipse(x, y, 20, 20);
  }
}