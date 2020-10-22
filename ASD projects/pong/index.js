/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

    // Constant Variables
        var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;

        var positionX = 0;
        var positionY = 0;

        var speedX = 0;
        var speedY = 0;

        var BOARD_HEIGHT = $('#board').height();
        var BOARD_WIDTH = $('#board').width();

        var firstPoints = 0;
        var secondPoints = 0;

    // Game Item Objects
        var letter = {
            "Left": 65,
            "Right": 68,
        }

        var arrow = {
            "Left": 37,
            "Right": 39,
        }

    // one-time setup
        var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
        $(document).on('keydown', handleKeyDown);                       
        $(document).on('keyup', handleKeyUp);

        $(document).on('victor', handleNewVictor);


  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

    /* 
    On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
    by calling this function and executing the code inside.
    */

        function newFrame() {
            handleKeyDown();
            handleKeyUp();

            redrawRectangles();
            repositionRectangles();

            moveCircle();
            redrawCircle();
            repositionCircle();
        }
  
    /* 
    Called in response to events.
    */
        function handleNewVictor() {
            
            
        }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

    // Reposition Rectangles

        function repositionRectangles() {
            positionX += speedX;
        }

    //Redrawing Both Rectangles

        function redrawRectangles() {
            $("#topRectangle").css("top", positionY);
            $("#topRectangle").css("left", positionX);

            $("#bottomRectangle").css("top", positionY);
            $("#bottomRectangle").css("left", positionX);
        }


    // Moving Rectangles

        function handleKeyDown(event) {
            // First Player
                if (event.which === letter.Left) {
                speedX -= 5;
                }
                else if (event.which === letter.Right) {
                speedX += 5;
                }

            // Second Player
                if (event.which === arrow.Left) {
                speedX -= 5;
                }
                else if (event.which === arrow.Right) {
                speedX += 5;
                }
        }

    // Stopping Rectangles

        function handleKeyUp(event) {
            // First Player
                if (event.which === letter.Left) {
                speedX = 0;
                }
                else if (event.which === letter.Right) {
                speedX = 0;
                }

            // Second Player
                if (event.which === arrow.Left) {
                speedX = 0;
                }
                else if (event.which === arrow.Right) {
                speedX = 0;
                }       
        }


    // Circle





        function moveCircle() {
            positionY += speedY;
        }

        function redrawCircle() {
            $('#circle').css("left", positionX);
            $('#circle').css("top", positionY);
        }

        function repositionCircle() {
            if (positionY > BOARD_WIDTH) {
            speedX -= speedX;
            }
            else if (positionY < 0) {
            speedX -= speedX;
            }
            else if (positionY > BOARD_HEIGHT) {
            speedY -= speedY;
            }
            else if (positionY < 0) {
            speedY -= speedY;
            }
        }

    


    // Updating rounds


    // Ending Game

        function ResetPosition() {

        }

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
