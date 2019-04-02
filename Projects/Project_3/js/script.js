"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let imageTotal = 13;
let images = [];
for(let i = 0; i < imageTotal; i ++) {
  images.push(i+'.png');
}

let imageQty = 10;
console.log(images);

$(document).ready(function() {

  for (let i = 0; i < imageQty; i ++) {
    $('<img src="assets/images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#collage');
    let randomTop = Math.floor(Math.random() * $ ('#collage').height());
    let randomLeft = Math.floor(Math.random() * $ ('#collage').width());
    $(this).css({
      'top' : randomTop,
      'left' : randomLeft
    });
  }

})
