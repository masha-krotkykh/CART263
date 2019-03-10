"use strict";

/*****************

Project_2
Mariia Krotkykh

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let randomIndex;
let jsonEntries = [];
let lexicon;


$.getJSON('quotes.json', function (data){
  jsonEntries = data.quotes;
});

$(document).ready(function () {

  let input = $('#input');
  lexicon = new RiLexicon();
  randomIndex = Math.floor(Math.random() * jsonEntries.length);

  console.log(randomIndex);
  console.log(jsonEntries[randomIndex].quote);


  input.text(jsonEntries[randomIndex].quote);

processRita();

});

function processRita() {
  let input = $('#input');
  let rs = new RiString(input.text());
  let words = rs.words();
  let pos = rs.pos();
  console.log(words);
  console.log(pos);

  let output = '';
  for (var i = 0; i < words.length - 1; i++) {
    if (/nn.*/.test(pos[i])) {
      output += lexicon.randomWord(pos[i]);
    }
    else {
      output += words[i];
    }

    output += ' ';
  }
  console.log(output);

  input.text(output);
}




function moreWisdom() {
  location.reload();
}
