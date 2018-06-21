$(document).ready(function() {

    var numArray = [ ];
    var i = 0;      // index for outputting shape colour changes
    var score = 0;
    var roundNum = 1;
    var clickError;
    var outOfTime;


function buildColorArray(numArray) {
    // Build array of 20 random numbers (1-4)
        for (i = 1; i <= 20; i++) {
            numArray.push(Math.floor(Math.random() * 4 + 1));
        }
        
        console.log(numArray);
}

function computerTurn(roundNum) {
    if (i >= roundNum) {
        console.log(roundNum);
        return;
    } 
    console.log('i = ' + i + ' roundNum = ' + roundNum);
    var shapeNum = numArray[i];
    i++;    
    setTimeout(function(){changeColor($('#shape' + shapeNum), shapeNum, roundNum)}, 2000);
//    setTimeout(function(){changeColorBack($('#shape' + shapeNum), shapeNum)}, 2000);
//    changeColor($('#shape' + shapeNum), shapeNum)
    
} 

function changeColor(element, curNumber, roundNum) {
    element.removeClass('trapcolor' + curNumber, 500);
    element.addClass('high',500);
    console.log('changeColor');
    setTimeout(function(){changeColorBack(element, curNumber, roundNum)}, 2000); 
//    setTimeout(function(){console.log('xxxx')}, 2000); 
//           delayScript(5000);
//    computerTurn(roundNum);
}

function changeColorBack(element, curNumber, roundNum) {
    element.removeClass('high', 500);
    element.addClass('trapcolor' + curNumber, 500);
    computerTurn(roundNum);
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

/* function changeColorBack(element, curNumber) {
    element.removeClass('high', 500);
    element.addClass('trapcolor' + curNumber, 500);
}

function changeColor(element, curNumber) {
    element.removeClass('trapcolor' + curNumber, 500);
    element.addClass('high',500);
//    setTimeout(function(){changeColorBack(element, curNumber)}, 2000); 
//    setTimeout(function(){console.log('xxxx')}, 2000); 
    
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

function checkResponse(numArray, roundNum, clickError, outOfTime) {
    var shapeClicked = 'N';
    var j;      // index for checking user's selections
    clickError = 'N';
    outOfTime = 'N';
    
    for (j = 0; j <= roundNum; j++) {
        console.log(numArray);
        console.log('3rd loop - j = ' + j);
        console.log('Click me ' + numArray[j]);
        $("#shape1").click(function() {
            console.log('trapezium1 clicked');
            console.log('numArray = ' + numArray[j]);
            shapeClicked = 'Y';
            if (numArray[j] !== 1) {
                console.log('you lose');
                clickError = 'Y';
            }    
        });
        $("#shape2").click(function() {
            console.log('trapezium2 clicked');
            console.log('numArray = ' + numArray[j]);
            shapeClicked = 'Y';
            if (numArray[j] !== 2) {
                console.log('you lose');
                clickError = 'Y';                
            }    
        });  
        $("#shape3").click(function() {
            console.log('trapezium3 clicked');
            console.log('numArray = ' + numArray[j]);
            shapeClicked = 'Y';
            if (numArray[j] !== 3) {
                console.log('you lose');
                clickError = 'Y';
            }    
        });
        $("#shape4").click(function() {
            console.log('trapezium4 clicked');
            console.log('numArray = ' + numArray[j]);
            shapeClicked = 'Y';
            if (numArray[j] !== 4) {
                console.log('you lose');
                clickError = 'Y';
            }    
        });
        if (clickError == 'Y') {
            break;
        }
        
        if (shapeClicked == 'N') {
            console.log('out of time');
            outOfTime = 'Y'; 
            break;
        }    
    }    
}

*/

    console.log('Start of main3.js');

    $("button").click(function() {
        console.log('A ' + roundNum);
        console.log(numArray.length);
        if (numArray.length == 0) {
            buildColorArray(numArray);
        }    
        i = 0;
        computerTurn(roundNum);
        roundNum++;
    });

/*
        
// Loop round for upto 20 rounds (currently only 1 for dev reasons)        
        for (roundNum = 0; roundNum <= 1; roundNum++) {
            console.log('1st loop - roundNum = ' + roundNum);


// Loop to output x colour changes - where x = roundNum
            for (i = 0; i <= roundNum; i++) {
                console.log('2nd loop - i = ' + i + ', roundNum = ' + roundNum);
                var shapeNum = numArray[i];
                changeColor($('#shape' + shapeNum), shapeNum);
                setTimeout(function(){$('#shape' + shapeNum).removeClass('high' + shapeNum) }, 2000); 
                console.log('changeColor ' + shapeNum);
// Delay for a few seconds between shapes before looping round again
                delayScript(5000);
            }    

// script needs to pause here.  Maybe put this into function and call separately??
// Might need to pass in array as parameter, and roundNum 
// Allow 5 seconds to get a response

//            delayScript(5000);

            checkResponse(numArray, roundNum, clickError, outOfTime);  
            console.log('clickError = ' + clickError);
            console.log('outOfTime = ' + outOfTime);
            
        }    
        

    });
    
*/    
    
});    

