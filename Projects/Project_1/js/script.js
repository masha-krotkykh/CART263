"use strict"
// declaring basic variables
let $doc;
let $folder;
let $workProgress;
let $maxProgress = 10;
let $bus;
let $progressbar;
let $background;
let $button;
let $home;
let $rock;
let $dead = false;

let $radioSound = new Audio('../Project_1/assets/sounds/radio.wav');
$radioSound.loop = true;
  $radioSound.play();
let $acceptSound = new Audio('../Project_1/assets/sounds/paper_yes.mp3');
let $refuseSound = new Audio('../Project_1/assets/sounds/paper_no.wav');
let $driveSound = new Audio('../Project_1/assets/sounds/drive.wav');
let $splatSound = new Audio('../Project_1/assets/sounds/splat.wav');
$driveSound.loop = true;

$(document).ready(function() {

  console.log("Ready!");
// referring basic variables to the DOM elements
  $folder = $('.folder');
  $doc = $('.doc');
  $home = $('#home');
  $button = $('#button');
  $rock = $('#rock');

  // To stop bus sound and start radio sound when at work
  $driveSound.pause();


// Function to display documents on the page in random positions
$doc.each(function() {
   let $maxHeight = $('#docs').height();
   let $maxWidth = $('#docs').width();

   let $dragheight = $(this).height(); //draggable height
   let $dragwidth  = $(this).width(); // draggable width

   let $randomtop = Math.floor((Math.random() * $maxHeight));
   let $randomleft = Math.floor((Math.random() * ($maxWidth - $dragwidth)));

   $(this).css({
     'top' : $randomtop,
     'left': $randomleft
   });
});

  $bus = $('#bus');
  $progressbar = $('#progressbar');
  $background = $('#container');

// We don't want to display the bus or its progress at the beginning, so we hide them
// as well as the 'kill me' button
  $workProgress = 0;
  $home.hide();
  $('#dialog').hide();
  $doc.draggable({
      revert: true,
    },
    {
      start: function() {
        $refuseSound.play();
      }
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

      $(this).addClass('added');
      $("span#progress").text($workProgress);
      console.log($workProgress);
      updateProgressbar();
      $acceptSound.play();
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
    drivingProgress();
  }
};

// When work progress reaches its max value which is just below 100% the working day is over
// and it's time to go home
// displaying bus, progress and button that were previously hidden
  function goHome() {
    console.log("done...");
    $folder.hide();
    $doc.hide();
    $('#docs').hide();
    $('#statsBar').hide();
    $home.show();
    $driveSound.play();
    let driveInterval = setInterval(drive, 400);
  }

// Displaying the animation for the bus (replacing images with one another)
  function drive() {
      if($bus.attr('src') === 'assets/images/bus_down.png') {
        $bus.attr('src', 'assets/images/bus_up.png');
      }
      else {
        $bus.attr('src', 'assets/images/bus_down.png');
      }
      $background.animate({
        backgroundColor: "#000000",
      }, 3000 );
      $radioSound.pause();

  }

// Displaying going home progress (bar animation and text)
  function drivingProgress() {
    let progressbar = $( "#progressbar" ),
    progressLabel = $( ".progress-label" );

    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
// When the progress is at 100 % start over unless you chose to "quit"
      complete: function() {
        if(!$dead) {
          location.reload(true);
        }
      }
    });
// Progress display function
    function progress() {
      let val = progressbar.progressbar( "value" ) || 0;
      progressbar.progressbar( "value", val + 2 );
      if ( val < 99 ) {
        setTimeout( progress, 100 );
      }
      else if (val >= 99) {
        val = 0;
      }
    }
    setTimeout( progress, 3000 );
  };

// Button and dialog behaviour
// When button gets clicked a dialog window appears
  $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function() {
      $( "#dialog" ).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        // If this button gets clicked, everything ends
        // boulder animation displays
        // unnecessary elements hidde
        // sound stops
        buttons: {
          "Stop this now!": function() {
            $( this ).dialog( "close" );
            $rock.animate({
              top: "-7%",
            }), 5000;
            // $bus.hide();
            $progressbar.hide();
            $button.hide();
            $driveSound.pause();
            $splatSound.play();
            $dead = true;
          },
// If this button gets clicked, all continues as normal
          Cancel: function() {
            $( this ).dialog( "close" );
          }
        }
      });
    } );
  });

});
