/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
    var FRAMES_PER_SECOND_INTERVAL = 100;
  
    var positionX = 0;
    var positionY = 0;
            
    var speedX = 0;
    var speedY = 0;

    var velocityX = 20;
    var velocityY = 20;

    var head = snake[0];

  // Game Item Objects

    var snake = [5, 4, 3, 2, 1, 0];

    var newPiece.x = snake[0].x
    var newPiece.y = snake[0].y

    var key = {
        "Left": 37,
        "Up": 40,
        "Right": 39,
        "Down": 38,
    }

snake[i].x = snake[i].x - 1
snake[i].y = snake[i].y - 1

  // one-time setup
    var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

    $(document).on('keydown', handleKeyDown);
                

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionApple();
    redrawApple();

    repositionHead();
    redrawHead();

    headReCal();
  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

    function repositionApple() {
        positionX += speedX;
        positionY += speedY;
    }

    function redrawApple(){
        $("#apple").css("left", positionX);
        $("#apple").css("top", positionY);
    }

    function repositionHead() {
        positionX += velocityX;
        positionY += velocityY;
    }

    function redrawHead(){
        $("#head").css("left", positionX);
        $("#head").css("top", positionY);
    }

    function headReCal() {
    head.x = head.x + head.velocityX;
    head.y = head.y + head.velocityY;
}



    function handleKeyDown() {
        if (event.which === key.Left) {
        velocityX -= 20;
        }
        else if (event.which === key.Right) {
        velocityX += 20;
        }

        else if (event.which === key.Up) {
        velocityY += 20;
        }
        else if (event.which === key.Down) {
        velocityY -= 20;
        }
    }




  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
