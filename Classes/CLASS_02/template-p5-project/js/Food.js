class Food extends Agent {
  constructor(x,y,minSize,maxSize,vx,vy) {
    super(x,y,random(minSize,maxSize),'#5588ff');
    this.maxSize = maxSize;
    this.minSize = minSize;
    this.vx = vx;
    this.vy = vy;
  }

  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(this.size,this.minSize,this.maxSize);
  }
}
