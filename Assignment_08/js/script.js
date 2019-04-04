"use strict";

/*****************

Project_3
Masha Krotkykh

******************/


let imageTotal = 13; // total number of images in the mmage folder
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

console.log(images);

$(document).ready(function() {
// On document ready select random images and display them at random position and randmly scaled on the screen
  for (let i = 0; i < imageQty; i ++) {
    let randomTop = Math.floor(Math.random() * $('#collage').height());
    let randomLeft = Math.floor(Math.random() * $('#collage').width());
    let randomWidth = Math.floor(Math.random() * 350) + 50;
    $('<img src="assets/images/' + images[Math.floor(Math.random() * images.length)] + '" style="top:'+randomLeft+'px; left:'+randomTop+'px; width:'+randomWidth+'px;">').appendTo('#collage');
  }
  $('img').draggable(); // making images draggable to move them around

  // When the mouse is over an image it becomes active and allows for transfomations
  $('img').mouseover(function() {
    $(this).addClass("active");
  });

  // When mouse is no longer over the image, it stops being active and is no longer affected by the transformations
  $('img').mouseout(function() {
    $(this).removeClass("active");
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

    }
  })
})
//a = 97; s = 115; z = 122; x = 120; space = 32
