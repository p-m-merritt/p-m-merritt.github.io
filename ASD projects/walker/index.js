/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
    var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;

    // TODO 3: Declare gameItem Variables

        // the location for the box
            var positionX = 0;
            var positionY = 0;
        // the speed for the box
            var speedX = 0;
            var speedY = 0;

  // Game Item Objects

    var key = {
        "Left": 37,
        "Up": 38,
        "Right": 39,
        "Down": 40,
    }

  // one-time setup
    var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
    $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

    function newFrame() {
        repositionGameItem();
        redrawGameItem();
    }

  /* 
  Called in response to events.
  */

    function handleKeyDown() {
        if (event.which === key.Left) {
        speedX -= 5;
        console.log("left pressed");
        }
        else if (event.which === key.Right) {
        speedX += 5;
        console.log("right pressed");
        }

        else if (event.which === key.Up) {
        speedY += 5;
        console.log("up pressed");
        }
        else if (event.which === key.Down) {
        speedY -= 5;
        console.log("down pressed");
        }
    }
    
    

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

    // update the position of the box
        function repositionGameItem() {
            positionX += speedX;
            positionY += speedY;
        }

    // draw the box in the new location
        function redrawGameItem(){
            $("#gameItem").css("left", positionX);
            $("#gameItem").css("top", positionY);
        }
        
  
    function endGame() {
        // stop the interval timer
            clearInterval(interval);

        // turn off event handlers
            $(document).off();
    }
}