class Tile {
  constructor(xPosition, yPosition, tileSize) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.tileSize = tileSize;
    this.processData();
    
   
  }

  update() {
  }


  display() {
   
    resetMatrix();
    translate(this.xPosition, this.yPosition);
  }
    
}
