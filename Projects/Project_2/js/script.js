"use strict";

/*****************

Project_2
Masha Krotkykh

Script using external JSON file with inspirational quotes from various famous people.
Using RiTa.js to replace contents randomly creating nonsensical "wise" phrases.

Credits:
JSON source: https://gist.github.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80
RiTa functionality based on Daniel Shiffman's tutorial: https://www.youtube.com/watch?v=lIPEvh8HbGQ

******************/

let lexicon; // to get rita lexicon component
var result; // final output variable

// list of URLs to get background from
let backgrounds = [
  "url('https://images.unsplash.com/photo-1496526311033-8a80ae14a1f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
  "url('https://images.unsplash.com/photo-1478399305562-fbc9c0adb0e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80')",
  "url('https://images.unsplash.com/photo-1441422454217-519d3ee81350?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80')",
  "url('https://images.unsplash.com/photo-1494763709848-dc2193cd45b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80')",
  "url('https://images.unsplash.com/photo-1488489153583-89ce18dd4968?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80')",
  "url('https://images.unsplash.com/photo-1459305953069-79f984c538c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
  "url('https://images.unsplash.com/photo-1508492107686-e9fa051269c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
  "url('https://images.unsplash.com/photo-1481450112092-f00a4c77e381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80')",
  "url('https://images.unsplash.com/photo-1423474695515-c64cdacb6a07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
  "url('https://images.unsplash.com/photo-1473147319958-21c51372f690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80')",
  "url('https://images.unsplash.com/photo-1463677361184-5d995504403a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
  "url('https://images.unsplash.com/photo-1454551272232-16b9502430e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80')",
  "url('https://images.unsplash.com/photo-1472190649224-495422e1b602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
  "url('https://images.unsplash.com/photo-1548312441-acaf3800c032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
  "url('https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
  "url('https://images.unsplash.com/photo-1549338246-9d2864dbc22a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80')",
  "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
  "url('https://images.unsplash.com/photo-1495917898236-efd1704e9906?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
  "url('https://images.unsplash.com/photo-1505533321630-975218a5f66f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80')",
  "url('https://images.unsplash.com/photo-1454540723233-f0b9ff08b132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80')",
  "url('https://images.unsplash.com/photo-1493130952181-47e36589f64d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1423&q=80')",
  "url('https://images.unsplash.com/photo-1498496294664-d9372eb521f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
  "url('https://images.unsplash.com/photo-1462502124931-adc5046f1b45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
  "url('https://images.unsplash.com/photo-1431203488627-64527eb86dd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
];

// Executes when the document is ready
$(document).ready(function () {
  randombg(); // setting random background
  getQuote(); // getting a quote from JSON, manipulating and displaying it

  // introducing annyang for voice control
  if (annyang) {
      // Let's define our first command. First the text we expect, and then the function it should call
      var commands = {
        'tell me more': moreWisdom,
        'repeat': say,
      };
      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start();
  }
});

function getQuote() {
  // pulling entries from the JSON file
  $.getJSON('quotes.json', function (data){
    let jsonEntries = data.quotes; // populating the jsonEntries array with entries from JSON file

    let input = $('#input'); // target div in HTML file to be populated with resulting text
    lexicon = new RiLexicon(); // rita specific vocabulary component

    // calculating random index for quotes array
    let randomIndex = Math.floor(Math.random() * jsonEntries.length); // to pull a random entry from the JSON file

   // replacing placeholder text in the DOM element with a random quote
    input.text(jsonEntries[randomIndex].quote);

    processRita(); // to manipulate the resulting quote

    console.log(randomIndex);
    console.log(jsonEntries[randomIndex].quote);
  });
}

// Function that replaces specific words with random words from rita lexicon
function processRita() {
  let input = $('#input'); // is now populated with a quote
  let rs = new RiString(input.text()); // turn the text of input into string
  let words = rs.words(); // extracting individual words from the string
  let pos = rs.pos(); // defining part of speech for every word

  let probability = Math.random(); // setting probability variable to a random number between 0 and 1

  console.log(words);
  console.log(pos);

  var output = ''; // defining an output as an empty string
 // checking every word for being a specific POS (noun singular or noun plural)
 // replacing words with random words from RiTa lexicon

 // if probability variable is between 0 and .4, all nouns will be replaced with random nouns
  for (var i = 0; i < words.length; i++) {
    if (probability < .4) {
      if (/nn.*/.test(pos[i])) {
        output += ' ' + lexicon.randomWord(pos[i]); // replacing a word with another of the same POS (nouns)
      }
      else if(words[i] != ',' && words[i] != '.' && words[i] != ':' && words[i] != ';' && words[i] != '?' && words[i] != '!') {
        output += ' ' + words[i]; // other POS will stay unchanged and the space will be added before them unless they are punctuation
      }
      else {
        output += words[i]; // other POS will stay unchanged
      }
    }

   // if probability variable is between .4 and .8, all verbs will be replaced with random verbs
    else if (probability < .8) {
      if (/vb.*/.test(pos[i])) {
        output += ' ' + exicon.randomWord(pos[i]); // replacing a word with another of the same POS (verbs)
      }
      else if(words[i] != ',' && words[i] != '.' && words[i] != ':' && words[i] != ';' && words[i] != '?' && words[i] != '!') {
        output += ' ' + words[i]; // other POS will stay unchanged and the space will be added before them unless they are punctuation
      }
      else {
        output += words[i]; // other POS will stay unchanged
      }
    }

   // if probability variable is between .8 and 1, both nouns and verbs will be replaced with random
    else {
      if (/nn.*/.test(pos[i])) {
        output += ' ' + lexicon.randomWord(pos[i]); // replacing a word with another of the same POS (nouns)
      }

      else if (/vb.*/.test(pos[i])) {
        output += ' ' + lexicon.randomWord(pos[i]); // replacing a word with another of the same POS (verbs)
      }
      else if(words[i] != ',' && words[i] != '.' && words[i] != ':' && words[i] != ';' && words[i] != '?' && words[i] != '!') {
        output += ' ' + words[i]; // other POS will stay unchanged and the space will be added before them unless they are punctuation
      }
      else {
        output += words[i]; // other POS will stay unchanged
      }
    }

    // output += ' '; // adding a space after each word
    console.log(probability);
    result = output;
  }

  input.text(output); // outputing resulting text on the page
  say(); // make responsiveVoice read the quote
}

// When the button is pressed page reloads
function moreWisdom() {
  location.reload();
}

// To repeat the phrase that is currently displayed
function say() {
  responsiveVoice.speak(result, "UK English Female", {rate: 0.8});
}

// Function to load random background from the list of URLs
function randombg(){
  var random= Math.floor(Math.random() * backgrounds.length);
  document.getElementById("image").style.backgroundImage = backgrounds[random];
}
