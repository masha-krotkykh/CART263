class Avatar extends Agent {
  constructor(x,y,size,decrease) {
    super(x,y,size,'#cccc55');
    this.maxSize = size;
    this.decrease = decrease;
  }

  update() {
    if(!this.active) {
      return;
    }
    this.x = mouseX;
    this.y = mouseY;
    // this.size = size - decrease;
    this.size = constrain(this.size-this.decrease,0,this.maxSize);
    // this.size = constrain(this.size,0,this.maxSize);
    if(this.size === 0) {
      this.active = false;
    }
  }

  eat(other) {
    if(!this.active){
      return;
    }
    this.size = constrain(this.size + other.size, 0, this.maxSize);
    other.reset();
  }
}
