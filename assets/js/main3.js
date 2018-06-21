$(document).ready(function() {

    var numArray = [ ];
    var i;          // index for outputting shape colour changes
    var roundNum = 1;
    var outOfTime;
    var start = false;
    var clickNum = 0;
    var shapeNum = 0;
    var scoreText;
    var maxRounds = 3;
    var shapeFlash = 1000;
    var slowSpeed = 1000;
    var mediumSpeed = 500;
    var fastSpeed = 250;
    var blinkAndYouMissIt = 125;


function buildColorArray() {
// Build array of 20 random numbers (1-4)
    for (i = 1; i <= maxRounds; i++) {
        numArray.push(Math.floor(Math.random() * 4 + 1));
    }
        
    console.log(numArray);
}

function setLights() {
// Sets the appropriate elements to change colour    
    console.log('i = ' + i + 'roundNum = ' + roundNum);
    if (i >= roundNum) {
        console.log('end of lights for round ' + roundNum);
        return;
    } 
    console.log('i = ' + i + ' roundNum = ' + roundNum);
    shapeNum = numArray[i];
    i++;    
    setTimeout(function(){changeColor($('#shape' + shapeNum), shapeNum)}, shapeFlash);
} 

function changeColor(element, curNumber) {
    element.removeClass('trapcolor' + curNumber, 500);
    element.addClass('high',500);
    console.log('changeColor');
    setTimeout(function(){changeColorBack(element, curNumber)}, shapeFlash); 
}

function changeColorBack(element, curNumber) {
    element.removeClass('high', 500);
    element.addClass('trapcolor' + curNumber, 500);
    setLights();
}

function delayScript(milliSeconds) {
    var startTime = Date.now();
    var endTime = startTime + 5000;
    console.log('A'+ startTime);
    console.log('B'+ endTime);
    while (startTime < endTime) {
        startTime = Date.now();
    } 
}

function checkResponse() {
    if (shapeNum !== numArray[clickNum]) {
        clickError = true;
        console.log('error');
        alert("Oops, that's not right - you lose!");
        initGame();
        return;
    } else {
        clickNum ++;
        console.log('ok');
        console.log('clickNum = ' + clickNum + ' roundNum = ' + roundNum);
        if (clickNum >= roundNum) {
            scoreText = 'Score = ' + roundNum;
            $(".score").text(scoreText);
            roundNum ++;
            if (roundNum > 13) {
                shapeFlash = blinkAndYouMissIt; 
            } else if (roundNum > 9) {
                shapeFlash = fastSpeed;
            } else if (roundNum > 5) {
                shapeFlash = mediumSpeed;
            } else {
                shapeFlash =slowSpeed;
            }
            if (clickNum >= maxRounds) {
                console.log('clickNum = ' + clickNum + ' maxRounds = ' + maxRounds);
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
    i = 0;          // index for outputting shape colour changes
    roundNum = 1;
//    outOfTime;
    start = false;
    clickNum = 0;
    shapeNum = 0;
    shapeFlash = 2000;
}

    console.log('Start of main3.js ');

    $("button").click(function() {
        if (start == false) {           // prevent game starting when game already in progress
            start = true;
            console.log('A ' + roundNum);
            if (numArray.length == 0) {
                buildColorArray();
            }    
            i = 0;
            setLights();
        }    
    });
    
    $("#shape1").click(function() {
        console.log('trapezium1 clicked');
        console.log('numArray = ' + numArray[clickNum]);
        shapeNum = 1;
        checkResponse();
    });
    
    $("#shape2").click(function() {
        console.log('trapezium2 clicked');
        console.log('numArray = ' + numArray[clickNum]);
        shapeNum = 2;
        checkResponse();
    });   
    
    $("#shape3").click(function() {
        console.log('trapezium3 clicked');
        console.log('numArray = ' + numArray[clickNum]);
        shapeNum = 3;
        checkResponse();
    });  
    
    $("#shape4").click(function() {
        console.log('trapezium4 clicked');
        console.log('numArray = ' + numArray[clickNum]);
        shapeNum = 4;
        checkResponse();
    });

    if (clickNum >= maxRounds) {
        alert("CONGRATULATIONS - YOU WIN");
        initGame();
    }
        
});    
