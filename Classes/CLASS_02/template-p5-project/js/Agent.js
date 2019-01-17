class Agent {
  constructor(x,y,size,agentColor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = agentColor;
    this.active = true;
  }

  display() {
    if(!this.active) {
      return;
    }

    push();
    ellipseMode(CENTER);
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  overlap(other) {
    if(!this.active) {
      return;
    }

    let d = dist(this.x,this.y,other.x,other.y);

    if (d < this.size/2 + other.size/2) {
      return true;
    }
    else {
      return false;
    }
  }

}
