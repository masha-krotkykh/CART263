"use strict";

let myAvatar;
// let myFood;
let treats = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  myAvatar = new Avatar(mouseX,mouseY,50,.1);
  // myFood = new Food(random(0,width),random(0,height),10,50,random(1,5),random(1,5));
  for (let i = 0; i < 10; i++) {
    treats[i] = new Food(random(0,width),random(0,height),10,50,random(1,5),random(1,5));
  }
}

function draw() {
  background(255);
  myAvatar.update();
  for (let i = 0; i < 10; i++) {
    treats[i].update();
    treats[i].display();
  }
  for (let i = 0; i < 10; i++) {
    if(myAvatar.overlap(treats[i])) {
      myAvatar.eat(treats[i]);
    }
  }
  myAvatar.display();
}
