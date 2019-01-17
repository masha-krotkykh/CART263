"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let avatar = {
  x: 0,
  y: 0,
  maxSize: 64,
  size: 60,
  alive: true,
  color: "#ff2277"
};

let food = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 64,
  color: "#cc5555"
};


// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
  createCanvas(windowWidth, windowHeight);
  avatar.x = width/2;
  avatar.y = height/2;
  food.x = random(0,width);
  food.y = random(0,height);

  noCursor();

  food.vx = 3;
  food.vy = 3;
}


// draw()
//
// Description of draw()

function draw() {
  background(200,100,200);
  displayFood();
  if(avatar.alive) {
    checkCollision();
    updateFood();
    updateAvatar();
    displayAvatar();
  }
  else {
    return;
  }
}

function updateAvatar() {
  avatar.x = mouseX;
  avatar.y = mouseY;
  avatar.size -= 0.25;
  avatar.size = constrain(avatar.size,0,avatar.maxSize);
  if(avatar.size === 0) {
    avatar.alive = false;
  }
}

function displayAvatar() {
  push();
  noStroke();
  fill(avatar.color);
  ellipse(avatar.x, avatar.y, avatar.size);
  pop();
}

function updateFood() {


  let randomX = random(0,1);
  let randomY = random(0,1);
  if(randomX > .9) {
    food.vx = -food.vx;
  }
  if(randomY > .9) {
    food.vy = -food.vy;
  }

  if(food.x + food.size/2 >= width || food.x - food.size/2 <= 0){
    food.vx = -food.vx;
  }
  if(food.y + food.size/2 >= height || food.y - food.size/2 <= 0){
    food.vy = -food.vy;
  }
  food.x += food.vx;
  food.y += food.vy;
  food.x = constrain(food.x, food.size/2, width-food.size/2);
  food.y = constrain(food.y, food.size/2, height-food.size/2);
}

function displayFood() {
  push();
  noStroke();
  fill(food.color);
  ellipse(food.x, food.y, food.size);
  pop();
}

function checkCollision() {
  let distance = dist(avatar.x, avatar.y, food.x, food.y);
  if(distance < (avatar.size/2 + food.size/2)) {
    avatar.size += 10;
    avatar.size = constrain(avatar.size,0,avatar.maxSize);
    food.x = random(0,width);
    food.x = constrain(food.x, food.size/2, width-food.size/2);
    food.y = random(0,width);
    food.y = constrain(food.y, food.size/2, height-food.size/2);
  }
}
