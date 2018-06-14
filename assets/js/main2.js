$(document).ready(function() {

function changeColorBack(element, curNumber) {
    element.removeClass('high', 500);
    element.addClass('trapcolor' + curNumber, 500);
    console.log('changeColorBack ' + curNumber);
}
    
function changeColor(element, curNumber) {
    element.removeClass('trapcolor' + curNumber, 500);
    element.addClass('high', 500);
//    setTimeout(function(){changeColorBack(element, curNumber)}, 2000); 
//    setTimeout(function(){console.log('xxxx')}, 2000); 
    console.log('changeColor ' + curNumber + ' ' + element);
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

    $("button").click(function() {

// Build array of 20 random numbers (1-4)

//        var numArray = [ ];
        var i;      // index for outputting shape colour changes

//        for (i = 1; i <= 20; i++) {
//            numArray.push(Math.floor(Math.random() * 4 + 1));
//        }
        
//        console.log(numArray);

//        var score = 0;
        var roundNum = 1;
        var shapeNum = 1;
        var functionDelay = 0;
//        var clickError;
//        var outOfTime;
        
// Loop round for upto 20 rounds (currently only 1 for dev reasons)        
//        for (roundNum = 0; roundNum <= 1; roundNum++) {
//            console.log('1st loop - roundNum = ' + roundNum);


// Loop to output x colour changes - where x = roundNum
            for (i = 0; i <= roundNum; i++) {
                console.log('2nd loop - i = ' + i + ', roundNum = ' + roundNum);
                shapeNum = shapeNum + 1;
                changeColor($('#shape' + shapeNum), shapeNum);
                functionDelay = functionDelay + 2000;
                delayScript(functionDelay);
//                changeColorBack($('#shape' + shapeNum), shapeNum); 
                functionDelay = functionDelay + 2000;
                delayScript(functionDelay);
//                console.log('changeColor ' + shapeNum);
            }    

// script needs to pause here.  Maybe put this into function and call separately??
// Might need to pass in array as parameter, and roundNum 
// Allow 5 seconds to get a response

//            delayScript(5000);

//            checkResponse(numArray, roundNum, clickError, outOfTime);  
//            console.log('clickError = ' + clickError);
//            console.log('outOfTime = ' + outOfTime);
            
//        }    
        

    });
});