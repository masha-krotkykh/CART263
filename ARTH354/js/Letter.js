// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-6: Text breaking up

var r = 255;
var g = 255;
var b = 255;
var a;
var movement;

class Letter {
  constructor(x, y, letter, a, movement) {
    // The object knows its original " home " location
    // As well as its current location
    this.homex = this.x = x;
    this.homey = this.y = y;
    this.letter = letter;
    this.a = a;
    this.movement = movement;
  }

  update() {
    if(active) {
      movement = 15;
    }
    else {
      movement = 0;
    }
    this.homex = this.homex - movement;
  }

  // Display the letter
  display() {
    fill(r,g,b,this.a);
    textAlign(LEFT);
    text(this.letter, this.x, this.y);
  }

  // Move the letter randomly
  shake() {
    this.x += random(-10,10);
    this.y += random(-30,30);
    this.a = random(0,200);
  }

  // At any point, the current location can be set back to the home location by calling the home() function.
  home() {
    this.x = lerp(this.x,this.homex,0.05);
    this.y = lerp(this.y,this.homey,0.05);
    this.a = lerp(this.a,255,0.02);
  }
}
