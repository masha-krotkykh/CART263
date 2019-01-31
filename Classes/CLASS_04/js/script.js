"use strict"

let $fly;
let $mouth;

$(document).ready(function() {

  console.log("Ready!");
  $fly = $('#fly');
  $mouth = $('#mouth');

  $fly.draggable();
  $mouth.droppable({
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
    }
    else {
      $mouth.attr('src', 'assets/images/mouth-open.png');
    }
  }
});
