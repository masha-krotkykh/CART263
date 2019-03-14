"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
$(document).ready(function() {

  $.getJSON('data/data.json', dataLoaded);

});

function dataLoaded(data){

  let condiment = getRandomElement(data.condiments);

  let verb = 'is';
  if((condiment.charAt(condiment.length - 1)) === 's') {
    verb = 'are';
  }

  let cat = getRandomElement(data.cats);

  let room = getRandomElement(data.rooms);

  let description = `${condiment} ${verb} exactly like a ${cat} in a ${room}.`;
  console.log(description);
  $('body').append(description);

}

function getRandomElement(array){

  let randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;

}
