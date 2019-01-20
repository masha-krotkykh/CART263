class Menace extends Agent {
  constructor(x,y,size,vx,vy) {
    super(x,y,size,'#800000');
    this.vx = vx;
    this.vy = vy;
  }

  update() {

    if(this.x + this.size/2 >= width || this.x - this.size/2 <= 0){
      this.vx = -this.vx;
    }
    if(this.y + this.size/2 >= height || this.y - this.size/2 <= 0){
      this.vy = -this.vy;
    }

    // this.x += this.vx;
    // this.y += this.vy;
    this.x = constrain(this.x + this.vx, this.size/2, width-this.size/2);
    this.y = constrain(this.y + this.vy, this.size/2, height-this.size/2);
  }
  
}
