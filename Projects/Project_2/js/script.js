"use strict";

/*****************

Project_2
Mariia Krotkykh

Script using external JSON file with inspirational quotes from various famous people.
Using RiTa.js to replace contents randomly creating nonsensical "wise" phrases.

Credits:
JSON source: https://gist.github.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80
RiTa functionality based on Daniel Shiffman's tutorial: https://www.youtube.com/watch?v=lIPEvh8HbGQ

******************/
let jsonEntries = []; // an array of entries from the JSON file
let randomIndex; // to pull a random entry from the JSON file

let lexicon; // to get rita lexicon component

// pulling entries from the JSON file
$.getJSON('quotes.json', function (data){
  jsonEntries = data.quotes;
});

// Executes when the document is ready
$(document).ready(function () {

  let input = $('#input'); // target div in HTML file to be populated with resulting text
  lexicon = new RiLexicon(); // rita specific vocabulary component

  // calculating random index for quotes array
  randomIndex = Math.floor(Math.random() * jsonEntries.length);

  console.log(randomIndex);
  console.log(jsonEntries[randomIndex].quote);

 // replacing placeholder text in the DOM element with a random quote
  input.text(jsonEntries[randomIndex].quote);

processRita();
});

// Function that replaces specific words with random words from rita lexicon
function processRita() {
  let input = $('#input'); // is now populated with a quote
  let rs = new RiString(input.text()); // turn the text of input into string
  let words = rs.words(); // extracting individual words from the string
  let pos = rs.pos(); // defining part of speech for every word

  let probability = Math.random(); // setting probability variable to a random number between 0 and 1

  console.log(words);
  console.log(pos);

  let output = ''; // defining an output as an empty string
 // checking every word for being a specific POS (noun singular or noun plural)
 // replacing words with random words from RiTa lexicon

 // if probability variable is between 0 and .4, all nouns will be replaced with random nouns
  for (var i = 0; i < words.length; i++) {
    if (probability < .4) {
      if (/nn.*/.test(pos[i])) {
        output += lexicon.randomWord(pos[i]); // replacing a word with another of the same POS (nouns)
      }

      else {
        output += words[i]; // other POS will stay unchanged
      }
    }

   // if probability variable is between .4 and .8, all verbs will be replaced with random verbs
    else if (probability < .8) {
      if (/vb.*/.test(pos[i])) {
        output += lexicon.randomWord(pos[i]); // replacing a word with another of the same POS (verbs)
      }

      else {
        output += words[i]; // other POS will stay unchanged
      }
    }

   // if probability variable is between .8 and 1, both nouns and verbs will be replaced with random
    else {
      if (/nn.*/.test(pos[i])) {
        output += lexicon.randomWord(pos[i]); // replacing a word with another of the same POS (nouns)
      }

      else if (/vb.*/.test(pos[i])) {
        output += lexicon.randomWord(pos[i]); // replacing a word with another of the same POS (verbs)
      }

      else {
        output += words[i]; // other POS will stay unchanged
      }

    }

    output += ' '; // adding a space after each word
    console.log(probability);
  }

  input.text(output); // outputing resulting text on the page
}

// When the button is pressed page reloads
function moreWisdom() {
  location.reload();
}
