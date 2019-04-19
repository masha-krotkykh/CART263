"use strict";

/*****************

Project_3
Masha Krotkykh
Credits:
Daniel Shiffman -- tutorial on Markov Chains:
https://www.youtube.com/watch?v=6z7GQewK-Ks
https://www.youtube.com/watch?v=9r8CmofnbAQ
and RiTa:
https://www.youtube.com/watch?v=VaAoIaZ3YKs
D. Howe Github Repo.: https://github.com/dhowe/RiTaJS
The Project Gutenberg Literary Archive Foundation -- http://gutenberg.net/license

******************/

// --------------------------------IMAGES----------------------------- //
let imageTotal = 63; // total number of images in the mmage folder
let images = []; // empty image array

// populating an arry with images
for(let i = 0; i < imageTotal; i ++) {
  images.push(i+'.png');
}

let maxWidth = 500; // max. width of an image
let minWidth = 50; // min. width of an image

let imageQty = 10; // max. number of images to be displayed at the beginning

let posRotation = 10; // rotation increment of 10deg.
let negRotation = 10; // rotation increment of -10deg.
let scaleX = -1; // value for reflecting images along X-axis

// --------------------------------POETRY------------------------------ //
var order = 4; // number of letters in the n-gram
var ngrams = {}; // JS object to store info on all possible outcomes for given n-gram
var beginnings = [];
var verseLength = 30;
var txt = $.ajax({
  url: "assets/txt/comMan.txt",
  async: false
}).responseText;

var randomGram;
var sentences;
var words;

$(document).ready(function() {
// -----------------------IMAGES ON READY----------------------------- //
// On document ready select random images and display them at random position and randmly scaled on the screen
  for (let i = 0; i < imageQty; i ++) {
    addImage();
  }

  // $( ".resizable" ).resizable({
  //   alsoResize: "#mirror"
  // });

  $('#bin').droppable({
    drop: function(event, ui) {
      $(this)
      ui.draggable.remove();
    }
  });

  $( "#instructions" ).hide();
  $( "#instructionsHeader" ).click(function() {
    $( "#instructions" ).toggle();
  });

// Possible transformations for when mouse is over an image and it has a class of "active"
  $(this).keypress(function(event) {
    console.log(event.which);

    switch(event.which) {

      case 113: // Q key makes images smaller by 10% on each keypress until it reaches its min. size
      if($('.active').width() > minWidth) {
        $('.active').css ({
          'width' : $('.active').width() / 1.1
        })
      }
      break;

      case 119: // W key makes images larger by 10% on each keypress until it reaches its max. size
      if($('.active').width() < maxWidth) {
        $('.active').css ({
          'width' : $('.active').width() * 1.1
        })
      }
      break;

      case 115: // A key rotates image anti-clockwise by 10 deg.
      $('.active').css({
        "transform": 'rotate(' + posRotation + 'deg)'
      });
      posRotation += 10;
      break;

      case 97: // S key rotates image clockwise by 10 deg.
      $('.active').css({
        "transform": 'rotate(' + negRotation + 'deg)'
      });
      negRotation -= 10;
      break;

      case 32: // Spacebar flips image on X-axis
      $('.active').css({
        "transform": 'scaleX(' + scaleX + ')'
      });
      scaleX *= -1;
      break;

      case 105:
      addImage();
      break;
    }
  })
//z = 122; x = 120;
  // ------------------------POETRY ON READY----------------------------- //

  var riTxt = new RiString(txt); // Split the string of text into individual words
  sentences = RiTa.splitSentences(txt);
  words = riTxt.words();
  // //
  // var randomWord = words[Math.floor(Math.random()*words.length)];

  // Creating a list of all n-grams existing in the reference text
  for (var j = 0; j < sentences.length; j++) {
    var outTxt = sentences[j];

    for (var i = 0; i <= outTxt.length - order; i++) {
      var gram = outTxt.substring(i, i + order);
      if(i == 0) {
        beginnings.push(gram);
      }

      // If this n-gram doesn't exist yet, create a new array for possible variations of a next character
      if (!ngrams[gram]) {
        ngrams[gram] = [];
      }
      // Push values in the created/existing array
        ngrams[gram].push(outTxt.charAt(i + order));
      // ngrams.push(gram);
    }
  }

  // Create a generate button and append it to the page
  var genButton = document.createElement("BUTTON");
  genButton.innerHTML = "Do DaDa";
  document.getElementById("poem").appendChild(genButton);
  genButton.addEventListener("click", markov); // run markov function on button press

  // Create a clear button and append it to the page
  var clearButton = document.createElement("BUTTON");
  clearButton.innerHTML = "UnDa the Do";
  poem.appendChild(clearButton);
  clearButton.addEventListener("click", clear); // run clear function on button press
})

// -----------------------POETRY FUNCTIONS----------------------------- //
function markov() {
  var currentGram = beginnings[Math.floor(Math.random() * beginnings.length)]; // the n-gram that we start the poem with
  var result = currentGram;

  for (var i = 0; i < verseLength; i++) {
    var possibilities = ngrams[currentGram]; // for the current n-gram check the array of possibilities for the next char

    var next = possibilities[Math.floor(Math.random() * possibilities.length)]; // pick a random option from this array
    result += next;
    currentGram = result.substring(result.length - order, result.length);

    console.log(currentGram);
  }
  var paragraph = document.createElement("P"); // Create a p element in the DOM
  paragraph.innerText = result;
  document.getElementById("result").appendChild(paragraph); // Append p to the "poem" div
}

function clear() {
  //while (result.firstChild) {
    result.removeChild(result.lastChild);
  //}
}


// -----------------------IMAGES FUNCTIONS----------------------------- //
function addImage() {
  let randomTop = Math.floor(Math.random() * 350);
  let randomLeft = Math.floor(Math.random() * 850);
  let randomWidth = Math.floor(Math.random() * 250) + 50;
  $('<img src="assets/images/' + images[Math.floor(Math.random() * images.length)] + '" style="top:'+randomTop+'px; left:'+randomLeft+'px; width:'+randomWidth+'px; max-width: 100%;">').appendTo('#collage');
  $('img').draggable({
    stack: ".images"
  }); // making images draggable to move them around and to set currently dragged image to front

  $('img').addClass("images");
  // When the mouse is over an image it becomes active and allows for transfomations
  $('img').mouseover(function() {
    $(this).addClass("active");
  });

  // When mouse is no longer over the image, it stops being active and is no longer affected by the transformations
  $('img').mouseout(function() {
    $(this).removeClass("active");
  });
}
