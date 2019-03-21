"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let synth;
let kick;
let snare;
let hihat;
let frequencies = [55, 61.74, 69.30, 73.42, 82.41, 92.50, 103.83];
let pattern = ['x','o','','x','x*','o*','x*','o*']; // DRUMMACHINE PATTERN
let patternIndex = 0;
let clickable = true;


// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
  synth = new Pizzicato.Sound({
      source: 'wave',
  });

  kick = new Pizzicato.Sound('assets/sounds/kick.wav');
  snare = new Pizzicato.Sound('assets/sounds/snare.wav');
  hihat = new Pizzicato.Sound('assets/sounds/hihat.wav');
}

// draw()
//
// Description of draw()

function draw() {

}

function playNote() {
  let randomFr = random(frequencies); // RANDOM IN P5!!!
  synth.frequency = randomFr;

  var tremolo = new Pizzicato.Effects.Tremolo({
      speed: 7,
      depth: 0.8,
      mix: 0.8
  });
  synth.addEffect(tremolo);
  synth.play();
  console.log('playing');
  setTimeout(stopNote, 300 * floor(random(5)));
}

function stopNote() {
  synth.stop();
  setTimeout(playNote, 100 * floor(random(5)));
  console.log('stopped');
}

function playDrum() {
  let symbols = pattern[patternIndex];
  var reverb = new Pizzicato.Effects.Reverb({
    time: 0.01,
    decay: 0.01,
    reverse: false,
    mix: 0.5
});

  if(symbols.indexOf('x') !== -1) {
    kick.addEffect(reverb);
    kick.play();
  }
  if(symbols.indexOf('o') !== -1) {
    snare.addEffect(reverb);
    snare.play();
  }
  if(symbols.indexOf('*') !== -1) {
    hihat.addEffect(reverb);
    hihat.play();
  }

  patternIndex++;
  if (patternIndex === pattern.length) {
    patternIndex = 0;
  }
}

  function mousePressed() {
    if(clickable) {
      playNote();
      setInterval(playDrum,300);
    }
    clickable = false;
  }
