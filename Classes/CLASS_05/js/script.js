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
let answers = [];
const NUM_OPTIONS = 5;
let correctAnimal;
let options = {
  rate: Math.random(),
  pitch: Math.random()
};

$(document).ready(function() {
  $("#clickable").on('click', function() {
    $(this).remove();
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
  $guess.on('click', function(){
    if($(this).text() === correctAnimal) {
      console.log("correct!");
      $('.guess').remove();
      setTimeout(newRound, 1000);
    }
    else {
      console.log("wrong!");
      speakAnimal(correctAnimal);
    }
  });
  $('body').append($guess);
}

function newRound() {
  answers = [];
  for(let i=0; i<NUM_OPTIONS; i++) {
    let animal = animals[Math.floor(Math.random() * animals.length)];
    addButton(animal);
    answers.push(animal);
  }
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
