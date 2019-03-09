"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/




// let grammar;
// let lines;
// let lexicon;
//
// $(document).ready(function () {
//
//   lexicon = new RiLexicon();
//
//   lines = [ $('#line1'), $('#line2'), $('#line3') ];
//
//   grammar = RiGrammar();
//   grammar.loadFrom('../../data/haiku.yaml', function() {
//
//     lines[0].text("click to");
//     lines[1].text("generate");
//     lines[2].text("a haiku");
//
//     $('#hdiv').click(createHaiku);
//   });
// });
//
// function createHaiku() {
//
//   var result = grammar.expand();
//   var haiku = result.split("%");
//   for (var i = 0; i < lines.length; i++) {
//     lines[i].text(haiku[i]);
//   }
// }



// preload()
//
// Description of preload

// function preload() {
//
// }


// setup()
//
// Description of setup

function setup() {
let input = createInput('Hello my friend');
let button = createButton('Submit');
input.changed(processRita);
button.mousePressed(processRita);
input.size(200);
}


// draw()
//
// Description of draw()

// function draw() {
//
// }
