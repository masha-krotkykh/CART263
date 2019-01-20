"use strict";

let myAvatar;
// let myFood;
let myMenace;
let treats = [];
let treatsNum = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myAvatar = new Avatar(mouseX,mouseY,50,.1);
  // myFood = new Food(random(0,width),random(0,height),10,50,random(1,5),random(1,5));
  myMenace = new Menace(random(0,width),random(0,height),30,2,2);
  for (let i = 0; i < treatsNum; i++) {
    treats[i] = new Food(random(0,width),random(0,height),10,50,random(1,5),random(1,5));
  }
}

function draw() {
  background('#F0F4F3');
  myAvatar.update();
  if(myAvatar.overlap(myMenace)) {
    myAvatar.damagedBy(myMenace);
  }
  myAvatar.display();
  myMenace.update();
  myMenace.display();

  for (let i = 0; i < treatsNum; i++) {
    treats[i].update();
    treats[i].display();
  }
  for (let i = 0; i < treatsNum; i++) {
    if(myAvatar.overlap(treats[i])) {
      myAvatar.eat(treats[i]);
    }
  }

}
