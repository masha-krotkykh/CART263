"use strict";

/*****************

Project_3
Masha Krotkykh
Credits:
Daniel Shiffman -- tutorial on Markov Chains https://www.youtube.com/watch?v=6z7GQewK-Ks
The Project Gutenberg Literary Archive Foundation -- http://gutenberg.net/license

******************/

// --------------------------------IMAGES----------------------------- //
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

// --------------------------------POETRY------------------------------ //
//var txt = "out... into this world... this world... tiny little thing... before its time... in a godfor–... what?.. girl?.. yes... tiny little girl... into this... out into this... before her time... godforsaken hole called... called... no matter... parents unknown... unheard of... he having vanished... thin air... no sooner buttoned up his breeches... she similarly... eight months later... almost to the tick... so no love... spared that... no love such as normally vented on the... speechless infant... in the home... no... nor indeed for that matter any of any kind... no love of any kind... at any subsequent stage... so typical affair... nothing of any note till coming up to sixty when–... what? . . seventy?. . good God!.. coming up to seventy... wandering in a field... looking aimlessly for cowslips... to make a ball... a few steps then stop... stare into space... then on... a few more... stop and stare again... so on... drifting around... when suddenly... gradually... all went out... all that early April morning light... and she found herself in the-... what?.. who?.. no!.. she!.. found herself in the dark... and if not exactly... insentient... insentient... for she could still hear the buzzing... so-called... in the ears... and a ray of light came and went... came and went... such as the moon might cast... drifting... in and out of cloud... but so dulled... feeling... feeling so dulled... she did not know... what position she was in... imagine!.. what position she was in!.. whether standing... or sitting... but the brain–... what?.. kneeling?.. yes... whether standing... or sitting... or kneeling... but the brain–... what?.. lying?.. yes.. whether standing... or sitting... or kneeling... or lying... but the brain still... still... in a way... for her first thought was... oh long after... sudden flash... brought up as she had been to believe... with the other waifs... in a merciful... God... first thought was... oh long after... sudden flash... she was being punished... for her sins... a number of which then... further proof if proof were needed... flashed through her mind... one after another... then dismissed as foolish... oh long after... this thought dismissed... as she suddenly realized... gradually realized... she was not suffering... imagine!.. not suffering!.. indeed could not remember... off-hand... when she had suffered less... unless of course she was... meant to be suffering... ha!.. thought to be suffering... just as the odd time... in her life... when clearly intended to be having pleasure... she was in fact... having none... not the slightest... in which case of course... that notion of punishment... for some sin or other... or for the lot... or no particular reason... for its own sake... thing she understood perfectly... that notion of punishment... which had first occurred to her... brought up as she had been to believe... with the other waifs... in a merciful...  God... first occurred to her... then dismissed... as foolish... was perhaps not so foolish... after all... so on... all that... vain reasonings... till another thought... oh long after... sudden flash... very foolish really but–... what?.. the buzzing?.. yes... all the time buzzing... so-called... in the ears... though of course actually... not in the ears at all... in the skull... dull roar in the skull... and all the time this ray or beam... like moonbeam... but probably not... certainly not... always the same spot... now bright... now shrouded... but always the same spot... as no moon could... no... no moon... just all part of the same wish to... torment... though actually in point of fact... not in the least... not a twinge... so far... ha!.. so far... this other thought then... oh long after... sudden flash... very foolish really but so like her... in a way... that she might do well to... groan... on and off... writhe she could not... as if in actual agony... but could not... could not bring herself... some flaw in her make-up... incapable of deceit... or the machine... more likely the machine... so disconnected... never got the message... or powerless to respond... like numbed... couldn't make the sound... not any sound... no sound of any kind... no screaming for help for example... should she feel so inclined... scream... then listen... scream again... then listen again... no... spared that... all silent as the grave... no part–... what?.. the buzzing?.. yes... all silent but for the buzzing... so-called... no part of her moving... that she could feel... just the eyelids... presumably... on and off... shut out the light... reflex they call it... no feeling of any kind... but the lids... even best of times... who feels them?.. opening... shutting... all that moisture... but the brain still... still sufficiently... oh very much so!.. at this stage... in control... under control... to question even this... for on that April morning... so it reasoned... that April morning... she fixing with her eye... a distant bell... as she hastened towards it... fixing it with her eye... lest it elude her... had not all gone out... all that light... of itself... without any... any. . . on her part... so on... so on it reasoned... vain questionings... and all dead still... sweet silent as the grave... when suddenly... gradually... she realiz–... what?.. the buzzing?.. yes... all dead still but for the buzzing... when suddenly she realized... words were–... what?.. who?.. no!.. she!.. realized... words were coming... imagine!... words were coming... a voice she did not recognize at first so long since it had sounded... then finally had to admit... could be none other... than her own... certain vowel sounds... she had never heard... elsewhere... so that people would stare... the rare occasions... once or twice a year... always winter some strange reason... stare at her uncom-prehending... and now this stream... steady stream... she who had never... on the contrary... practically speechless... all her days... how she survived!.. even shopping... out shopping... busy shopping centre... supermart... just hand in the list... with the bag... old black shopping bag... then stand there waiting... any length of time... middle of the throng... motionless... staring into space... mouth half open as usual... till it was back in her hand... the bag back in her hand... then pay and go... not as much as good-bye... how she survived!.. and now this stream... not catching the half of it... not the quarter... no idea... what she was saying... imagine!.. no idea what she was saying!.. till she began trying to... delude herself... it was not hers at all... not her voice at all... and no doubt would have... vital she should... was on the point... after long efforts... when suddenly she felt... gradually she felt... her lips moving... imagine!.. her lips moving!.. as of course till then she had not... and not alone the lips... the cheeks... the jaws... the whole face... all those–... what?.. the tongue?.. yes... the tongue in the mouth... all those contortions without which... no speech possible... and yet in the ordinary way... not felt at all... so intent one is... on what one is saying... the whole being... hanging on its words... so that not only she had... had she... not only had she... to give up... admit hers alone... her voice alone... but this other awful thought... oh long after... sudden flash... even more awful if possible... that feeling was coming back... imagine!.. feeling coming back!.. starting at the top... then working down... the whole machine... but no... spared that... the mouth alone... so far... ha!.. so far... then thinking... oh long after... sudden flash... it can't go on... all this... all that... steady stream... straining to hear... make some-thing of it... and her own thoughts... make something of them... all–... what?.. the buzzing?.. yes... all the time the buzzing... so-called... all that together... imagine!.. whole body like gone... just the mouth... lips... cheeks... jaws... never–... what?.. tongue?.. yes... lips... cheeks... jaws... tongue... never still a second... mouth on fire... stream of words... in her ear... practically in her ear... not catching the half... not the quarter... no idea what she's saying... imagine!.. no idea what she's saying!.. and can't stop... no stopping it... she who but a moment before... but a moment!.. could not make a sound... no sound of any kind... now can't stop... imagine!.. can't stop the stream... and the whole brain begging... something begging in the brain... begging the mouth to stop... pause a moment... if only for a moment... and no response... as if it hadn’t heard... or couldn’t... couldn't pause a second... like maddened... all that together... straining to hear... piece it together... and the brain... raving away on its own... trying to make sense of it... or make it stop... or in the past... dragging up the past... flashes from all over... walks mostly... walking all her days... day after day... a few steps then stop... stare into space... then on... a few more... stop and stare again... so on... drifting around... day after day... or that time she cried... the one time she could remember... since she was a baby... must have cried as a baby... perhaps not... not essential to life... just the birth cry to get her going... breathing... then no more till this... old hag already... sitting staring at her hand... where was it?.. Croker's Acres... one evening on the way home... home!.. a little mound in Croker's Acres... dusk... sitting staring at her hand... there in her lap... palm upward... suddenly saw it wet... the palm... tears presumably... hers presumably... no one else for miles... no sound... just the tears... sat and watched them dry... all over in a second... or grabbing at straw... the brain... flickering away on its own... quick grab and on... nothing there... on to the next... bad as the voice... worse... as little sense... all that together... can't–... what?.. the buzzing?.. yes... all the time the buzzing... dull roar like falls... and the beam... flickering on and off... starting to move around... like moonbeam but not... all part of the same... keep an eye on that too... corner of the eye... all that together... can't go on... God is love... she'll be purged... back in the field... morning sun... April... sink face down in the grass... nothing but the larks... so on... grabbing at the straw... straining to hear... the odd word... make some sense of it... whole body like gone... just the mouth... like maddened... and can't stop... no stopping it... something she–... something she had to–... what?.. who?.. no!.. she!... something she had to–... what?.. the buzzing?.. yes... all the time the buzzing... dull roar... in the skull... and the beam... ferreting around... painless... so far... ha!.. so far... then thinking... oh long after... sudden flash... perhaps something she had to... had to... tell... could that be it?.. something she had to... tell... tiny little thing... before its time... godforsaken hole... no love... spared that... speechless all her days... practically speechless... how she survived!.. that time in court... what had she to say for herself... guilty or not guilty... stand up woman... speak up woman... stood there staring into space... mouth half open as usual... waiting to be led away... glad of the hand on her arm... now this... some-thing she had to tell... could that be it? . . something that would tell... how it was... how she–... what? . . had been? . . yes... something that would tell how it had been... how she had lived... lived on and on... guilty or not... on and on... to be sixty... something she–... what?.. seventy?.. good God!.. on and on to be seventy... something she didn't know herself... wouldn't know if she heard... then forgiven... God is love... tender mercies... new every morning... back in the field... April morning... face in the grass... nothing but the larks... pick it up there... get on with it from there... another few–... what?.. not that?.. nothing to do with that?.. nothing she could tell?.. all right... nothing she could tell... try something else... think of something else... oh long after... sudden flash... not that either... all right... something else again... so on... hit on it in the end... think everything keep on long enough... then forgiven... back in the–... what?.. not that either?.. nothing to do with that either?.. nothing she could think?.. all right... nothing she could tell... nothing she could think... nothing she–... what?.. who?.. no!.. she!... tiny little thing... out before its time... godforsaken hole... no love... spared that... speechless all her days... practically speechless... even to herself... never out loud... but not completely... sometimes sudden urge... once or twice a year... always winter some strange reason... the long evenings... hours of darkness... sudden urge to... tell... then rush out stop the first she saw... nearest lavatory... start pouring it out... steady stream... mad stuff... half the vowels wrong... no one could follow... till she saw the stare she was getting... then die of shame... crawl back in... once or twice a year... always winter some strange reason... long hours of darkness... now this... this... quicker and quicker... the words... the brain... flickering away like mad... quick grab and on... nothing there... on somewhere else... try somewhere else... all the time something begging... something in her begging... begging it all to stop... unanswered... prayer unanswered... or unheard... too faint... so on... keep on... trying... not knowing what... what she was trying... what to try... whole body like gone... just the mouth... like maddened... so on... keep–... what?.. the buzzing?.. yes... all the time the buzzing... dull roar like falls... in the skull... and the beam... poking around... painless... so far... ha!.. so far... all that... keep on... not knowing what... what she was–... what?.. who?.. no!.. she!.. SHE!... what she was trying... what to try... no matter... keep on... hit on it in the end... then back... God is love... tender mercies... new every morning... back in the field... April morning... face in the grass... nothing but the larks... pick it up–";
var order = 3; // number of letters in the n-gram
var ngrams = {}; // JS object to store info on all possible outcomes for given n-gram
var verseLength = 25;
var txt = $.ajax({
  url: "assets/txt/comMan.txt",
  async: false
}).responseText;

$(document).ready(function() {
// --------------------------------IMAGES----------------------------- //
// On document ready select random images and display them at random position and randmly scaled on the screen
  for (let i = 0; i < imageQty; i ++) {
    let randomTop = Math.floor(Math.random() * 500);
    let randomLeft = Math.floor(Math.random() * 800);
    let randomWidth = Math.floor(Math.random() * 350) + 50;
    $('<img src="assets/images/' + images[Math.floor(Math.random() * images.length)] + '" style="top:'+randomTop+'px; left:'+randomLeft+'px; width:'+randomWidth+'px;">').appendTo('#collage');
console.log(randomTop);
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

  // --------------------------------POETRY----------------------------- //
  // $.get("assets/txt/comMan.txt", function(data) {
  //   txt = data;
  //   return txt;
  // });

  // Creating a list of all n-grams existing in the reference text
  for (var i = 0; i <= txt.length - order; i++) {
    var gram = txt.substring(i, i + order);
    // If this n-gram doesn't exist yet, create a new array for possible variations of a next character
    if (!ngrams[gram]) {
      ngrams[gram] = [];
    }
    // Push values in the created/existing array
      ngrams[gram].push(txt.charAt(i + order));
    // ngrams.push(gram);
  }
  // Create a button and append it to the page
  var button = document.createElement("BUTTON");
  button.innerHTML = "Generate Poem";
  document.getElementById("poem").appendChild(button);
  button.addEventListener("click", markov); // run markov function on button press
  console.log(ngrams);
})

function markov() {
  var currentGram = txt.substring(0, order); // the n-gram that we start the poem with
  var result = currentGram;

  for (var i = 0; i < verseLength; i++) {
    var possibilities = ngrams[currentGram]; // for the current n-gram check the array of possibilities for the next char
    var next = possibilities[Math.floor(Math.random()*possibilities.length)]; // pick a random option from this array
    result += next;
    currentGram = result.substring(result.length - order, result.length);
  }

  console.log(next);
  var paragraph = document.createElement("P"); // Create a p element in the DOM
  paragraph.innerText = result;
  document.getElementById("poem").appendChild(paragraph); // Append p to the "poem" div
}
//a = 97; s = 115; z = 122; x = 120; space = 32
