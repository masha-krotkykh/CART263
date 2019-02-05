"use strict"
// declaring basic variables
let $folder1;
let $folder2;
let $folder3;
let $folder4;
let $folder5;
let $doc;
let $progress;

// getting random valus within html document margins
let randWidth = Math.floor((Math.random()*document.width));
let randHeight = Math.floor((Math.random()*document.height));

// let $buzz = new Audio('../Assignment_04/assets/sounds/buzz.mp3');
// $buzz.loop = true;
// let $crunch = new Audio('../Assignment_04/assets/sounds/crunch.wav');
// let $ergh = new Audio('../Assignment_04/assets/sounds/ergh.mp3');

$(document).ready(function() {

  console.log("Ready!");
// referring basic variables to the DOM elements
  $folder1 = $('#folder1');
  $folder2 = $('#folder2');
  $folder3 = $('#folder3');
  $folder4 = $('#folder4');
  $folder5 = $('#folder5');
  $doc = $('.doc');
  $progress = 0;

  // $(".doc").css('left', randWidth); // The enemies are flying doors...
  // $(".doc").css('top', randHeight);

  $doc.draggable({
      revert: true
    // },
    // {
    //   start: function() {
    //     $ergh.play();
    //   }
  });

// For loop to match documents to folders. Only documents with classes, corresponding to
// folder numbers will be accepted by these folders e.g. only documents with class ".to1"
// will be accepted by the folder with the ID "#folder1"

for (var i = 0; i < 6; i++) {
  let activeFolder = '#folder'+i;
  let activeDoc = '.to'+i;
  $(activeFolder).droppable({
    accept: activeDoc,

    drop: function(event, ui) {
      $(this)
      ui.draggable.remove();
      $progress += 5;
      $("span#progress").text($progress);
      console.log($progress);
      updateProgressbar();
    }
  });
}

function updateProgressbar() {
  $("#statsBar").progressbar({
    value: $progress
  });
  $("span#progress").text($progress);
};



  // $folder1.droppable({
  //   accept: ".to1",
  //
  //   drop: function(event, ui) {
  //     $(this)
  //     ui.draggable.remove();
  //     // let chewInterval = setInterval(chew, 300);
  //     //
  //     // setTimeout(function() {
  //     //   clearInterval(chewInterval);
  //     // }, 2000);
  //     $progress += 5;
  //     $("span#progress").text($progress);
  //     console.log($progress);
  //   }
  // });
  // $folder2.droppable({
  //   accept: ".to2",
  //
  //   drop: function(event, ui) {
  //     $(this)
  //     ui.draggable.remove();
  //     $progress += 5;
  //     $("span#progress").text($progress);
  //   }
  // });
  // $folder3.droppable({
  //   accept: ".to3",
  //
  //   drop: function(event, ui) {
  //     $(this)
  //     ui.draggable.remove();
  //     $progress += 5;
  //     $("span#progress").text($progress);
  //   }
  // });
  // $folder4.droppable({
  //   accept: ".to4",
  //
  //   drop: function(event, ui) {
  //     $(this)
  //     ui.draggable.remove();
  //     $progress += 5;
  //     $("span#progress").text($progress);
  //   }
  // });
  // $folder5.droppable({
  //   accept: ".to5",
  //
  //   drop: function(event, ui) {
  //     $(this)
  //     ui.draggable.remove();
  //     $progress += 5;
  //     $("span#progress").text($progress);
  //   }
  // });





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
