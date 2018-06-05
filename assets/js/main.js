$(document).ready(function() {

    $("button").click(function() {
        
// Build array of 20 random numbers (1-4)

        var numArray = [];
        var i;
        
        for (i = 1; i <= 20; i++) {
            numArray.push(Math.floor(Math.random() * 4 + 1));
        }
        
        console.log(numArray);

        var score = 0;
        var roundNum;
        
// Loop round for upto 20 rounds (currently only 1 for dev reasons)        
        for (roundNum = 0; roundNum <= 1; roundNum++) {


// Loop to output x colour changes - depending on the current round
            for (i = 0; i <= roundNum; i++) {
                var shapeNum = numArray[i];
                changeColor($('#shape' + shapeNum), shapeNum);
                console.log('changeColor');
// Delay for a few seconds between shapes before looping round again
                var start = Date.now();
                var end = start + 5000;
                console.log('A'+ start);
                console.log('B'+ end);
                while (start < end) {
                    start = Date.now();
                }    
                console.log('roundNum=' + roundNum);
                console.log('i = ' + i); 
            }    

 /*           for (j = 0; j < roundNum; j++) {
                console.log('j= ' + j);
                $("#shape1").click(function() {
                    console.log('trapezium1 clicked');
                    console.log('J= ' + j);
                    console.log('numArray = ' + numArray[j]);
                    if (numArray[j] != 1) {
                        alert('you lose');
                    }    
                });
                $("#shape2").click(function() {
                    console.log('trapezium2 clicked');
                    console.log('J= ' + j);
                    console.log('numArray = ' + numArray[j]);
                    if (numArray[j] != 2) {
                        alert('you lose');
                    }    
                });  
                $("#shape3").click(function() {
                    console.log('trapezium3 clicked');
                    console.log('J= ' + j);
                    console.log('numArray = ' + numArray[j]);
                    if (numArray[j] != 3) {
                        alert('you lose');
                    }    
                });
                $("#shape4").click(function() {
                    console.log('trapezium4 clicked');
                    console.log('J= ' + j);
                    console.log('numArray = ' + numArray[j]);
                    if (numArray[j] != 4) {
                        alert('you lose');
                    }    
                });                                
            }  */
        }    
    });
});    

function changeColor(element, curNumber) {
    element.removeClass('trapezium' + curNumber, 500);
    element.addClass('high' + curNumber,500);
    setTimeout(function(){changeColorBack(element, curNumber)}, 2000); 
}

function changeColorBack(element, curNumber) {
    element.removeClass('high' + curNumber, 500);
    element.addClass('trapezium' + curNumber, 500);
} 
                
/*            for (j = 0; j < roundNum; j++) {
                console.log('j= ' + j);  */
                $("#shape1").click(function() {
                    var j = 1;
                    console.log('trapezium1 clicked');
                    console.log('J= ' + j);
                    console.log('numArray = ' + numArray[j]);
                    if (numArray[j] != 1) {
                        alert('you lose');
                    }    
                });
                $("#shape2").click(function() {
                    var j = 1;
                    console.log('trapezium2 clicked');
                    console.log('J= ' + j);
                    console.log('numArray = ' + numArray[j]);
                    if (numArray[j] != 2) {
                        alert('you lose');
                    }    
                });  
                $("#shape3").click(function() {
                    var j = 1;
                    console.log('trapezium3 clicked');
                    console.log('J= ' + j);
                    console.log('numArray = ' + numArray[j]);
                    if (numArray[j] != 3) {
                        alert('you lose');
                    }    
                });
                $("#shape4").click(function() {
                    var j = 1;
                    console.log('trapezium4 clicked');
                    console.log('J= ' + j);
                    console.log('numArray = ' + numArray[j]);
                    if (numArray[j] != 4) {
                        alert('you lose');
                    }    
                });                                
//            }
    

