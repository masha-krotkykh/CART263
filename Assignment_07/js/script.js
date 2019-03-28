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
  synth.on('play', function() {
    var tremolo = new Pizzicato.Effects.Tremolo({
        speed: 7,
        depth: 0.8,
        mix: 0.8
    });
    synth.addEffect(tremolo);
  })

  kick = new Pizzicato.Sound('assets/sounds/kick.wav');
  kick.on('play', function() {
    var reverb = new Pizzicato.Effects.Reverb({
      time: 0.01,
      decay: 0.01,
      reverse: false,
      mix: 0.5
    });
    kick.addEffect(reverb);
  })

  snare = new Pizzicato.Sound('assets/sounds/snare.wav');
  snare.on('play', function() {
    var reverb = new Pizzicato.Effects.Reverb({
      time: 0.01,
      decay: 0.01,
      reverse: false,
      mix: 0.5
    });
    snare.addEffect(reverb);
  })

  hihat = new Pizzicato.Sound('assets/sounds/hihat.wav');
  hihat.on('play', function() {
    var reverb = new Pizzicato.Effects.Reverb({
      time: 0.01,
      decay: 0.01,
      reverse: false,
      mix: 0.5
    });
    hihat.addEffect(reverb);
  })

}

// draw()
//
// Description of draw()

function draw() {

}

function playNote() {
  let randomFr = random(frequencies); // RANDOM IN P5!!!
  synth.frequency = randomFr;

  synth.play();
  console.log('playing');
  setTimeout(stopNote, 500 * floor(random(5)));
}

function stopNote() {
  synth.stop();
  setTimeout(playNote, 100 * floor(random(5)+1));
  console.log('stopped');
}

function playDrum() {
  let symbols = pattern[patternIndex];


  if(symbols.indexOf('x') !== -1) {
    kick.volume = 0.3;
    kick.play();
  }
  if(symbols.indexOf('o') !== -1) {
    snare.volume = 0.3;
    snare.play();
  }
  if(symbols.indexOf('*') !== -1) {
    hihat.volume = 0.3;
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
