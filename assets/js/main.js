$(document).ready(function() {

    var numArray = [ ];         // holds the numbers corresponding to the shape elements
    var i;                      // index for outputting shape colour changes
    var roundNum = 1;           // the Round Number
    var start = false;          // Game started? 
    var clickNum = 0;           // Number of user clicks within round
    var shapeNum = 0;
    var scoreText;
    var maxRounds = 20;         // Maximum number of rounds in game
    var shapeFlash = 1000;      // Initial speed of the element colour change
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

function buildColorArray() {
// Build array of 20 random numbers (1-4)
    for (i = 1; i <= maxRounds; i++) {
        numArray.push(Math.floor(Math.random() * 4 + 1));
    }
        
    console.log(numArray);
}

function setLights() {
// Selects the appropriate elements to change colour    
    if (i >= roundNum) {
        return;
    } 
    shapeNum = numArray[i];
    i++;    
    setTimeout(function(){changeColor($('#shape' + shapeNum), shapeNum)}, shapeFlash);
} 

function changeColor(element, curNumber) {
// Changing the element colour 
    element.removeClass('trapcolor' + curNumber);
    element.addClass('high');
    setTimeout(function(){changeColorBack(element, curNumber)}, shapeFlash); 
}

function changeColorBack(element, curNumber) {
// Changing the element colours back 
    element.removeClass('high');
    element.addClass('trapcolor' + curNumber);
    setLights();
}

function changeUserColor(userElement, userCurNumber) {
// Changing the element colour  
    userElement.removeClass('trapcolor' + userCurNumber);
    userElement.addClass('user');
    setTimeout(function(){changeUserColorBack(userElement, userCurNumber)}, 0); 
}

function changeUserColorBack(userElement, userCurNumber) {
// Changing the element colours back 
    userElement.removeClass('user');
    userElement.addClass('trapcolor' + userCurNumber);
    checkResponse();
}

function checkResponse() {
// Processing the user response    
    if (shapeNum !== numArray[clickNum]) {          // user has clicked on the wrong element
        getLoserMessage();
        alert(loserMessage);
        initGame();
        return;
    } else {                                        // user has clicked on the correct element, continue
        clickNum ++;
        if (clickNum >= roundNum) {                 // checking for the end of the round
            scoreText = 'Score = ' + roundNum;
            $(".score").text(scoreText);            // update score on page
            roundNum ++;
            if (roundNum == 14) {                    // change flash speed if required
                shapeFlash = blinkAndYouMissIt; 
            } else if (roundNum == 10) {
                shapeFlash = fastSpeed;
            } else if (roundNum == 6) {
                shapeFlash = mediumSpeed;
            } 
            if (clickNum >= maxRounds) {        // check to see if we have reached the last round
                alert("CONGRATULATIONS - YOU WIN");
                initGame();                
                return;
            }
            clickNum = 0;
            i = 0;
            setLights();
        }
    }  
}

function initGame() {
// Initialise variables ready for new game    
    numArray = [ ];
    i = 0;          
    roundNum = 1;
//    outOfTime;
    start = false;
    clickNum = 0;
    shapeNum = 0;
    shapeFlash = 2000;
}

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

// Script starts here when START! button is clicked

    $("button").click(function() {
        if (start == false) {           // prevent game starting when game already in progress
            start = true;
            numberOfGames++;
            if (numArray.length == 0) {
                buildColorArray();
            }    
            i = 0;
            setLights();
        }    
    });

// Checking for the user mouse clicks

    $("#shape1").click(function() {
        console.log('trapezium1 clicked');
        shapeNum = 1;
        setTimeout(function(){changeUserColor($('#shape' + '1'), 1)}, 0);
//        checkResponse();
    });
    
    $("#shape2").click(function() {
        console.log('trapezium2 clicked');
        shapeNum = 2;
        setTimeout(function(){changeUserColor($('#shape' + '2'), 2)}, 0);
//        checkResponse();
    });   
    
    $("#shape3").click(function() {
        console.log('trapezium3 clicked');
        shapeNum = 3;
        setTimeout(function(){changeUserColor($('#shape' + '3'), 3)}, 0);
//        checkResponse();
    });  
    
    $("#shape4").click(function() {
        console.log('trapezium4 clicked');
        shapeNum = 4;
        setTimeout(function(){changeUserColor($('#shape' + '4'), 4)}, 0);
//        checkResponse();
    });

});    
