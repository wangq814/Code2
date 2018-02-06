int numParticles = 200;
Particle[] parts = new Particle[numParticles];


boolean drawParticles = false;

void setup() {
  size(800, 600);
 
  noStroke();
}
void draw() {
  background(0);
  
  if (drawParticles) {
   
    boolean allOffScreen = true;
    for (int i = 0; i<numParticles; i++) {
      parts[i].move();
    
      if (parts[i].y < height) {
        allOffScreen = false;
      }
    }
    if (allOffScreen) {
      
      drawParticles = false;
     
    }
  }
  
 
}


void mousePressed() {
  
    drawParticles = true;
    for (int i = 0; i<numParticles; i++) {
      parts[i] = new Particle();
    }
 
}