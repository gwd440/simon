The web site will consist of 3 pages – Home, Rules and Play.
All pages are at the same hierarchy level, so it is possible to navigate to any 
page from the current page.

The Home page contains a brief description of the game and a picture of an 
original version.

The Rules page contains a list of instructions on how the game actually works.

The Play page contains the game, which will begin once the START button is 
clicked.  The page also contains a score counter.
The game consists of 4 trapezoid shapes of different colours, which will briefly
change to white when selected by the computer.
jQuery is loaded to allow the use of addClass and removeClass to change the 
colours of the trapezoid shapes during game play.

The game is controlled by the main3.js script.

When the START button is clicked, function buildColorArray is called.  This 
generates an array of 20 numbers from 1 to 4. 
eg [1, 2, 1, 3, 1, 4, 4, 1, 1…etc]

Each number will correspond to one of the shapes.

Later on, a check was included to see if a game was already in progress. If a 
game IS in progress, the START click is ignored.

When the array has been created, setLights is called.  This function will 
inspect each entry in the numArray, build a shape id (shape1, shape2 etc), then 
uses setTimeOut to call the changeColor function. 

The changeColor function uses removeClass and addClass to change the colour of 
the shapes to white, then calls setTimeOut to call changeColorBack.

The changeColorBack function again uses removeClass and addClass to change the 
shapes back to their original colour.

The setTimeOut calls have a variable parameter which delays the colour change 
for a number of milliseconds. The possible values are set at the beginning of the script, and will cause the colour change to be briefer as the game progresses.

Control passes back to the setLights function which will process the next entry 
in numArray, unless it is the end of the round.  (Round One = 1 numArray entry, 
Round Two = 2 entries etc)

At the end of the round, control passes back to the original script and  wait 
for a user response.

When a mouse click is detected on one of the shapes, the function checkResponse 
is called.

The checkResponse function matches the shape number against the corresponding 
entry in numArray.
If they match, a point is added to the Score, the number of rounds is checked 
to see if the colour change speed needs to be increased, and setLights is 
called again.
If they don't match, getLoserMessage is called to retrieve a random loser 
message and an alert is output with the selected message.  Various script 
variables are initialised ready for the next game and we return to the main 
script which then ends.

Testing
-------
Initial testing was over the web pages. I ensured they all loaded correctly and
navigation between the pages was working ok.

Used Chrome Development Tools to check web page responsiveness across various 
device sizes.

First test of the game script was The START button.  When the START button is 
clicked, the script calls the buildColorArray function.

Testing the buildColorArray function:
The resulting array was output to the console log.  
1) The numbers seem random.
2) Initially by hard-coding a value, then by manipulating the value of 
    maxRounds, I could see that the correct number of values were being written to 
    the array.

Testing the setLights function:
1) The shape corresponding to the 1st value in numArray changed colour correctly 
    and changed back again after the correct time period.
2) By manipulating the value of roundNum, I was able to observe the multiple
    shape colour changes in sequence.
    e.g.    roundNum = 1, only the 1st array value shape was changed
            roundNum = 2, the 1st array value shape changed, then the 2nd array
                value shape, etc.

Testing the checkResponse function:
1) By clicking on the wrong shape, an error message was output to the console 
    log.  (Later this was changed to call the getLoserMessage function and 
    output an alert.)  
    The game ended ok - i.e. it stopped changing shape colours.
2) By clicking on the correct shape, the game continued by calling setLights 
    for the next round.
3) The score was added to the web page. If the correct shape was clicked, the 
    score was incremented and updated correctly on the web page.
4) I introduced the possibility of winning. When the maxRounds value was 
    reached, an alert was output.    
5) Then introduced variable speeds for the shape colour changes.  Checked to see 
    if the shape colour change speeded up at the appropriate round.
6) Finally, set the maxRounds to 20, and ran through a whole game. (Was able to
    cheat as the array contents are still displayed on the console log).
    The shape changes speeded up at the right stages.
    The winning alert was output at the correct stage.

Testing getLoserMessage:
1) Checked that standard "Oops.." message was output for 1st attempt.
2) Checked that "Ooh.." message was output for 2nd attempt.
3) Checked that random message from messageArray was output after 2nd attempt, 
    upto round 13.
4) Checked that "Good effort ..." message was output for rounds 13 and 14.
5) Checked that "...Keep going" message was output for rounds 15 and 16.
6) Checked that "..So close.." message was output for rounds 17, 18 and 19.

General game play:
1) Check that subsequent clicks on START did not do anything while game is in 
    progress
2) After game has ended, the new game has a fresh array, and other variables are
    reset correctly.

Played game on Google Chrome, Safari and Vivaldi.
    

