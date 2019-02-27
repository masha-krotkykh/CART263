"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let animals = [
      "aardvark",
      "alligator",
      "alpaca",
      "antelope",
      "ape",
      "armadillo",
      "baboon",
      "badger",
      "bat",
      "bear",
      "beaver",
      "bison",
      "boar",
      "buffalo",
      "bull",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "dog",
      "donkey",
      "dromedary",
      "elephant",
      "elk",
      "ewe",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guinea pig",
      "hamster",
      "hedgehog",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "kangaroo",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lynx",
      "mandrill",
      "marmoset",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "pig",
      "platypus",
      "polar bear",
      "porcupine",
      "porpoise",
      "prairie dog",
      "puma",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "reptile",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "squirrel",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wildcat",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra"
];

// An array of all possible answers
let answers = [];
// For now we are offering 5 options to choose from
const NUM_OPTIONS = 5;
// There is only one correct answer in each round
let correctAnimal;

// Current score
let score = 0;

// Random parameters for the voice
let options = {
  rate: Math.random(),
  pitch: Math.random()
};

$(document).ready(function() {
  $("#clickable").on('click', function() {
    $(this).remove();
    $('#score').text('Your current score: ' + score);

    if (annyang) {
      // Let's define our first command. First the text we expect, and then the function it should call
      var commands = {
        'i give up': giveUp,
        'say it again': speakAnimal,
        'i think it is *tag': checkGuess
      };

      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start();
    }

    startGame();
  });
});

function startGame() {
  console.log("Let's go!");
  newRound();
}

function addButton(label) {
  let $guess = $('<div class="guess"></div>');
  $guess.text(label);
  $guess.button();
  $guess.on('click', checkGuess);

  $('body').append($guess);
}

function checkGuess(tag){
  if($(this).text() === correctAnimal || tag === correctAnimal) {
    console.log("correct!");
    // remove all buttons
    $('.guess').remove();
    // start new round
    setTimeout(newRound, 1000);
    score += 1;
  }
  else {
    console.log("wrong!");
    // shake the wrong button and repeat the correct animal
    $(this).effect('shake');
    speakAnimal(correctAnimal);
    // and reset the score
    score = 0;
  }
  $('#score').text('Your current score: ' + score);
}



function newRound() {
  answers = [];
  for(let i=0; i<NUM_OPTIONS; i++) {
    let animal = animals[Math.floor(Math.random() * animals.length)];
    addButton(animal);
    answers.push(animal);
  }
  // Choosinng a random animal from an array to be the correct animal
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
  speakAnimal(correctAnimal);
}

function speakAnimal() {
  let reverseAnimal = correctAnimal.split('').reverse().join('');
  let options = {
    rate: Math.random(),
    pitch: Math.random()
  };

  responsiveVoice.speak(reverseAnimal, "UK English Male", options);
}

function giveUp() {
  $('.guess').each(function () {
    if ($(this).text() === correctAnimal){
      $(this).effect('shake');
    }
  });

  setTimeout(function() {
  // Remove all the buttons
    $('.guess').remove();
  }, 1000);

  score = 0;
  // Start a new round
  setTimeout(newRound,1000);
}
