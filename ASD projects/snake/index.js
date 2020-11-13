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

    var points = 0;
/*
    var BOARD_WIDTH = 440;
    var BOARD_HEIGHT = 440;
    var HEAD_SIZE = 20; 
    var HEAD_MAX = {
        "LEFT": 0,
        "RIGHT": BOARD_WIDTH - HEAD_SIZE,
        "TOP": 0,
        "BOTTOM": BOARD_HEIGHT - HEAD_SIZE
    }

  // Game Item Objects

    var snake = [5, 4, 3, 2, 1, 0];

    /*
var head = snake[0];

    var newPiece.x = snake[0].x
    var newPiece.y = snake[0].y
    */

    var key = {
        "Left": 37,
        "Up": 40,
        "Right": 39,
        "Down": 38,
    }





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
            repositionHead();
            redrawHead();
        }
  
    /* 
    Called in response to events.
    */
        function appleEaten() {
            increaseScore();
            redrawApple();
        }

        function crash() {
            stopSnake();
        }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

    // The Snake's Stuff

        /* Head */

            function repositionHead() {
                positionX += speedX;
                positionY += speedY;
            }

            function redrawHead() {
                $("#head").css("left", positionX);
                $("#head").css("top", positionY);
            }

        /* Moving */

            function handleKeyDown(event) {
                if (event.which === key.Left) {
                speedX -= 20;
                speedY = 0;
                }

                else if (event.which === key.Right) {
                speedX += 20;
                speedY = 0;
                }

                else if (event.which === key.Up) {
                speedY += 20;
                speedX = 0;
                }

                else if (event.which === key.Down) {
                speedY -= 20;
                speedX = 0;
                }
            }


            // function body() {
            //     if () {

            //     }
            //     else{

            //     }
            // }

        /* Collision */

            function stopSnake() {
                if (positionX > BOARD_WIDTH) {
                speedX = 0;
                }

                else if (positionX < 0) {
                speedX = 0;
                }

                else if (positionY > BOARD_HEIGHT) {
                speedY = 0;
                }

                else if (positionY < 0) {
                speedY = 0;
                }
            }

    // The apple's stuff

        function redrawApple() {
            $('#apple').css("left", Math.random() * BOARD_WIDTH);
        }
  
        /* The Score */

        function increaseScore() {
            points += 1;
            $('#counter').text(points);
        }

/*
function doCollide(square1, square2) {
    // TODO: calculate and store the remaining

    // sides of the square1
        square1.leftX = square1.x;
        square1.topY = square1.y;

        square1.rightX = square1.width + square1.x;
        square1.bottomY = square1.height + square1.y;

    // TODO: Do the same for square2
        square2.leftX = square2.x;
        square2.topY = square2.y;


        square2.rightX = square2.width + square2.x;
        square2.bottomY = square2.height + square2.y;

    // TODO: Return true if they are overlapping, false otherwise
        if ((square2.rightX >= square1.leftX) && (square2.leftX <= square1.rightX) && (square2.topY <= square1.bottomY) && (square2.bottomY >= square1.topY)){
        return(true);
        }
        else {
        return(false);
        }  
*/





    function endGame() {
        // stop the interval timer
        clearInterval(interval);

        // turn off event handlers
        $(document).off();
    }
  
}
