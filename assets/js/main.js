$(document).ready(function() {

  var numArray = [ ];         // holds the numbers corresponding to the shape elements
  var shapeIndex;             // index used for accessing numArray
  var roundNum = 1;           // the Round Number
  var start = false;          // Game started? 
  var clickNum = 0;           // Number of user clicks within round
  var shapeNum = 0;
  var scoreText;
  var maxRounds = 20;         // Maximum number of rounds in game
  var shapeFlash = 750;      // Initial speed of the element colour change
  var mediumSpeed = 500;      // Medium speed for element colour change
  var fastSpeed = 250;        // Fast speed for element colour change
  var blinkAndYouMissIt = 125;    // Very fast speed for element colour change
  var numberOfGames = 0;      //  Number of games played
  var messageArray = ["Hmm, maybe this isn't the game for you",   
                      "Oh come on! You're not even trying.", 
                      "Well! Is that the best you can do?",
                      "Have you considered noughts and crosses?",
                      "Oops, that's not right - you lose!",
                      "Oooh. Bad luck, better luck next time!"];
  var loserMessage;
  var messageIndex;
  var soundArray = ["assets/sounds/Vibraphone.dampen.ff.C3.stereo.wav",
                    "assets/sounds/Vibraphone.dampen.ff.G4.stereo.wav",
                    "assets/sounds/Vibraphone.dampen.ff.G3.stereo.wav",
                    "assets/sounds/Vibraphone.dampen.ff.E3.stereo.wav"];


// Script starts here when START! button is clicked

  $("#startButton").click(function() {
    if (!start) {               // prevent game starting when game already in progress
      start = true;
      numberOfGames++;
      if (numArray.length == 0) {
        buildColorArray();
      }    
      shapeIndex = 0;
      setLights();
    }    
  });

// Checking for the user mouse clicks

  $("#shape1").click(function() {
    shapeNum = 1;
    setTimeout(function(){changeUserColor($('#shape' + '1'), 1)}, 0);
  });
    
  $("#shape2").click(function() {
    shapeNum = 2;
    setTimeout(function(){changeUserColor($('#shape' + '2'), 2)}, 0);
  });   
    
  $("#shape3").click(function() {
    shapeNum = 3;
    setTimeout(function(){changeUserColor($('#shape' + '3'), 3)}, 0);
  });  
    
  $("#shape4").click(function() {
    shapeNum = 4;
    setTimeout(function(){changeUserColor($('#shape' + '4'), 4)}, 0);
  });

// buildColorArray - Builds array of 20 random numbers (1-4)
  function buildColorArray() {
    for (shapeIndex = 1; shapeIndex <= maxRounds; shapeIndex++) {
      numArray.push(Math.floor(Math.random() * 4 + 1));
    }
    console.log(numArray);
  }

// setLights - Selects the appropriate element to change colour 
  function setLights() {
    if (shapeIndex >= roundNum) {               // check for end of current round
      return;
    } 
    shapeNum = numArray[shapeIndex];
    shapeIndex++;    
    setTimeout(function(){changeColor($('#shape' + shapeNum), shapeNum)}, shapeFlash);
  } 

// changeColor - Changes the element colour and outputs sound 
  function changeColor(element, curNumber) {
    element.removeClass('trapcolor' + curNumber);
    element.addClass('high');
    var simonSound = new Audio(soundArray[curNumber-1]);
    simonSound.play();
    setTimeout(function(){changeColorBack(element, curNumber)}, shapeFlash); 
  }

// changeColorBack - Changes the element colour back to original
  function changeColorBack(element, curNumber) {
    element.removeClass('high');
    element.addClass('trapcolor' + curNumber);
    setLights();                        // select the next shape to change color
  }

// changeUserColor - Changes the element colour after user has clicked on it 
  function changeUserColor(userElement, userCurNumber) {
    userElement.removeClass('trapcolor' + userCurNumber);
    userElement.addClass('user');
    var simonSound = new Audio(soundArray[userCurNumber-1]);
    simonSound.play();    
    setTimeout(function(){changeUserColorBack(userElement, userCurNumber)}, 0); 
  }

// changeUserColorBack - Changes the element colours back after user click
  function changeUserColorBack(userElement, userCurNumber) {
    userElement.removeClass('user');
    userElement.addClass('trapcolor' + userCurNumber);
    checkResponse();
  }

// checkResponse - Processes the user response    
  function checkResponse() {
    if (shapeNum !== numArray[clickNum]) {          // user has clicked on the wrong element
      var simonSound = new Audio('assets/sounds/thaigong.ff.A4.stereo.wav');
      simonSound.play();  
      getLoserMessage();
      alert(loserMessage);
      initGame();
      return;
    } else {                                        // user has clicked on the correct element, continue
      clickNum ++;
      if (clickNum >= roundNum) {                   // checking for the end of the round
        scoreText = 'Score = ' + roundNum;
        $(".score").text(scoreText);                // update score on page
        roundNum ++;
        if (roundNum == 14) {                       // change flash speed if required
          shapeFlash = blinkAndYouMissIt; 
        } else if (roundNum == 10) {
          shapeFlash = fastSpeed;
        } else if (roundNum == 6) {
          shapeFlash = mediumSpeed;
        } 
        if (clickNum >= maxRounds) {                // check to see if we have reached the last round
          alert("CONGRATULATIONS - YOU WIN");
          simonSound = new Audio('assets/sounds/397435__foolboymedia__crowd-cheer-ii.wav');
          simonSound.play();  
          initGame();                
          return;
        }
        clickNum = 0;
        shapeIndex = 0;
        setLights();
      }
    }  
  }

// initGame - Initialises variables ready for new game    
  function initGame() {
    numArray = [ ];
    shapeIndex = 0;          
    roundNum = 1;
    start = false;
    clickNum = 0;
    shapeNum = 0;
    shapeFlash = 750;
  }

//  getLoserMessage - Retrieve message for game over
  function getLoserMessage () {
//  First couple of games get a set message, then lower attempts get 
//  random loser messages.
//  Better attempts get more encouragement

    if (numberOfGames == 1) {
      loserMessage = messageArray[4];
    } else if (numberOfGames == 2) {
      loserMessage = messageArray[5];
    } else if (roundNum < 13) {
      messageIndex = (Math.floor(Math.random() * 6 + 1)) - 1;
      loserMessage = messageArray[messageIndex];
      } else if (roundNum < 15) {
      loserMessage = "Good effort. Try again.";
    } else if (roundNum < 17) {
      loserMessage = "Now you're getting the hang of it. Keep going.";
    } else { 
      loserMessage = "Ohhh!  So close! Have another go.";
    }    
  }


});    
