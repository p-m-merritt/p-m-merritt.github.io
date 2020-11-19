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

    var BOARD_WIDTH = $("#board").width();
    var APPLE_SIZE = $("#apple").width()



    var BOARD_HEIGHT = $("#board").height();
    var HEAD_SIZE = 20; 
    var HEAD_MAX = {
        "LEFT": 0,
        "RIGHT": BOARD_WIDTH - HEAD_SIZE,
        "TOP": 0,
        "BOTTOM": BOARD_HEIGHT - HEAD_SIZE
    }

  // Game Item Objects

    var snake = [5, 4, 3, 2, 1, 0];

    var head = snake[0];

    var newPieceX = snake[0].x
    var newPieceY = snake[0].y

var apple0 = Apple("#apple0");
var apples = [apple0];

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

        /* Body */

            function makeSnake(id){
                var newPiece = {};
                newPiece.id = id;
                newPiece.width = $(".snake").width();
                newPiece.height = $(".snake").height();
                newPiece.x = 0
                return newPiece;
            }

            var snake = [];
            snake.push(makeSnake("#snake"))

            snake[0].x = 20;
            snake[0].y = 20;

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
            
            for(var i = 0; i < balls.length; i++){
                moveBall(balls[i]);  
            }
        }

        function moveApple() {
            // produce new apple position
            apple.x = randomInteger( BOARD_SIZE/APPLE_SIZE) * APPLE_SIZE;
            // do the same thing for apple.y
            apple.y = randomInteger( BOARD_SIZE/APPLE_SIZE) * APPLE_SIZE;

            // update apple's CSS using jQuery (both left and top values)
            $("#apple").css("left", );
            $("#apple").css("top", );

            // snakeBody is an array -- how do you get a piece out while itering?
            for (var i = 0; i < snakeBody.length; i++){
                if (doCollide(apple, snakeBody[i])){
                    moveApple();
                    break;
                }
            }
        }

        function randomInteger(max) {
            var randomInt = Math.floor(Math.random() * max);
            return randomInt;
        }

        function doCollide(obj1, obj2) {
            if (obj1.x === obj2.x && obj1.y === obj2.y) {
                return true;
            }
            else {
                return false;
            }
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

function apple(id) {
    var apple = {};
	apple.id = id
    apple.x = randomLocation();
    apple.y = randomLocation();
    apple.velocityX = randomVelocity();
    apple.velocityY = randomVelocity();
    return apple;
}

function randomLocation() {
    return Math.random() * BOARD_WIDTH;
}

function moveApple(apple) {
	// redrawing
    $(apple.id).css("left", apple.x);
    $(apple.id).css("top", apple.y);
}





    function endGame() {
        // stop the interval timer
        clearInterval(interval);

        // turn off event handlers
        $(document).off();
    }
  
}
