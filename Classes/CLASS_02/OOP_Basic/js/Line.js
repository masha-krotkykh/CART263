class Line extends Shape {
  constructor(x,y,x2,y2) {
    super(x,y,undefined);
    this.x2 = x2;
    this.y2 = y2;
  }
  update() {
    super.update(); // Do the generic Shape update()
    this.x2 += random(-1,1);
    this.y2 += random(-1,1);
  }
  display() {
    push();
    stroke(127, 63, 120);
    line(this.x,this.y,this.x2,this.y2);
    pop();
  }
}
