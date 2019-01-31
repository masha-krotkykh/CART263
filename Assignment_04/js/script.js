"use strict"

let $fly;
let $mouth;
let $candy;

let $buzz = new Audio('../assets/sounds/buzz.mp3');
$buzz.loop = true;
let $crunch = new Audio('../assets/sounds/crunch.wav');
let $ergh = new Audio('../assets/sounds/ergh.mp3');

$(document).ready(function() {

  console.log("Ready!");
  $fly = $('#fly');
  $mouth = $('#mouth');
  $candy = $('#candy');

  $fly.draggable();
  $fly.mousedown(function() {
      $buzz.play();
  });

  $candy.draggable({
      revert: true
    },
    {
      start: function() {
        $ergh.play();
      }
  });

  $mouth.droppable({
    accept: ".eatable",

    drop: function(event, ui) {
      $(this)
      console.log("Yum!");
      ui.draggable.remove();
      let chewInterval = setInterval(chew, 300);

      setTimeout(function() {
        clearInterval(chewInterval);
      }, 2000);
    }
  });

  function chew() {
    if($mouth.attr('src') === 'assets/images/mouth-open.png') {
      $mouth.attr('src', 'assets/images/mouth-closed.png');
      $crunch.play();
      $buzz.pause();
    }
    else {
      $mouth.attr('src', 'assets/images/mouth-open.png');
    }
  }
});
