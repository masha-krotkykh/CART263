class Food extends Agent {
  constructor(x,y,minSize,maxSize,vx,vy) {
    super(x,y,random(minSize,maxSize),'#5588ff');
    this.maxSize = maxSize;
    this.minSize = minSize;
    this.vx = vx;
    this.vy = vy;
  }

  update() {
      let randomX = random(0,1);
      let randomY = random(0,1);
      if(randomX > .8) {
        this.vx = -this.vx;
      }
      if(randomY > .5) {
        this.vy = -this.vy;
      }

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

  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(this.minSize,this.maxSize);
  }
}
