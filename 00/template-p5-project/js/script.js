"use strict";

let myAvatar;
let myFood;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myAvatar = new Avatar(mouseX,mouseY,50,.1);
  myFood = new Food(random(0,width),random(0,height),20,100);
}

function draw() {
  background(255);
  myAvatar.update();
  if(myAvatar.overlap(myFood)) {
    myAvatar.eat(myFood);
  }
  myAvatar.display();
  myFood.display();
}
