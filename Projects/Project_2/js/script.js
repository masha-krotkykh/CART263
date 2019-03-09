"use strict";

/*****************

Project_2
Mariia Krotkykh

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let randomIndex = 0;
let jsonEntries = [];
let input = $('#input');

$.getJSON('quotes.json', function (data){
  jsonEntries = data.quotes;
});

$(document).ready(function () {

  let randomIndex = Math.floor(Math.random() * jsonEntries.length);

  console.log(randomIndex);
  console.log(jsonEntries[randomIndex].quote);


  input.text(jsonEntries[randomIndex].quote);





  input.on('click', processRita);

});

function processRita() {
  $('#input').text('input');
}




function moreWisdom() {
  location.reload();
}
