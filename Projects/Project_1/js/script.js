"use strict"
// declaring basic variables
let $folder1;
let $folder2;
let $folder3;
let $folder4;
let $folder5;
let $doc;
let $folder;
let $workProgress;
let $maxProgress = 10;
let $bus;
let $progressbar;

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
  $folder = $('.folder');
  $doc = $('.doc');

  $bus = $('#bus');
  $progressbar = $('#progressbar');

// We don't want to display the bus or its progress at the beginning, so we hide them
  $workProgress = 0;
  $bus.hide();
  $progressbar.hide();

  // $(".doc").css('left', randWidth);
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
// Every dropped document will increase work progress by 5%

for (var i = 0; i < 6; i++) {
  let activeFolder = '#folder'+i;
  let activeDoc = '.to'+i;
  $(activeFolder).droppable({
    accept: activeDoc,

    drop: function(event, ui) {
      $(this)
      ui.draggable.remove();
      $workProgress += 5;
      $("span#progress").text($workProgress);
      console.log($workProgress);
      updateProgressbar();
    }
  });
}

// Function to update progress bar every time a document is being dropped in the correct folder
// Also update the text to display current work progress
function updateProgressbar() {
  $("#statsBar").progressbar({
    value: $workProgress
  });
  $("span#progress").text($workProgress);

  if ($workProgress === $maxProgress) {
    goHome();
  }
};

// When work progress reaches its max value which is just below 100% the working day is over
// and it's time to go home
  function goHome() {
    console.log("done...");
    $folder.hide();
    $doc.hide();
    $('#statsBar').hide();
    $bus.show();
    $progressbar.show();
    let driveInterval = setInterval(drive, 400);
    // location.reload(true);
  }

  function drive() {
      if($bus.attr('src') === 'assets/images/bus_down.png') {
        $bus.attr('src', 'assets/images/bus_up.png');
        // $crunch.play();
      }
      else {
        $bus.attr('src', 'assets/images/bus_down.png');
      }
  }


  $( function() {
let progressbar = $( "#progressbar" ),
  progressLabel = $( ".progress-label" );

progressbar.progressbar({
  value: false,
  change: function() {
    progressLabel.text( progressbar.progressbar( "value" ) + "%" );
  },
  // complete: function() {
  //   progressLabel.text( "Complete!" );
  // }
});

function progress() {
  var val = progressbar.progressbar( "value" ) || 0;

  progressbar.progressbar( "value", val + 2 );

  if ( val < 99 ) {
    setTimeout( progress, 80 );
  }
}

setTimeout( progress, 2000 );
} );



});
