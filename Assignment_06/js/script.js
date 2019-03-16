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

  let verb = 'tastes';
  if((condiment.charAt(condiment.length - 1)) === 's') {
    verb = 'taste';
  }

  let characteristics = getRandomElement(data.descriptions);

  let first_article = 'a';
  if(characteristics.charAt(0) === 'a' || characteristics.charAt(0) === 'e' || characteristics.charAt(0) === 'i' ||characteristics.charAt(0) === 'o' ||characteristics.charAt(0) === 'u') {
    first_article = 'an';
  }

  let cat = getRandomElement(data.cats);

  let name = getRandomElement(data.firstNames);

  let material = getRandomElement(data.materials);

  let second_article = 'a';
  if(material.charAt(0) === 'a' || material.charAt(0) === 'e' || material.charAt(0) === 'i' ||material.charAt(0) === 'o' ||material.charAt(0) === 'u') {
    second_article = 'an';
  }

  let room = getRandomElement(data.rooms);

  let description = `${condiment} ${verb} exactly like ${first_article} ${characteristics} ${cat} ${name} in ${second_article} ${material} ${room}.`;
  console.log(description);
  $('#content').append(description);
  responsiveVoice.speak(description, "Spanish Latin American Female")

}

function getRandomElement(array){

  let randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;

}
