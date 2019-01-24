/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
"use strict";

$(document).ready(setup);
  // This code will run when the document is ready

function setup () {
  setInterval(update,500);
  $('span').on('click',spanClicked);
}

function update() {
  console.log("Update!");
  $('span').each(updateSpan)
}

function updateSpan() {
  let num = Math.random();
  if(num <= .1) {
    // $(this).removeClass("redacted");
    $(this).addClass("revealed");
  }
  console.log("Updating spam!");
}

function spanClicked() {
  $(this).removeClass("revealed");
  // $(this).addClass("redacted");
}
