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
    var BOARD_HEIGHT = $("#board").height();

    var APPLE_SIZE = $("#apple").width()

    var HEAD_SIZE = $("#head").width();
    var HEAD_MAX = {
        "LEFT": 0,
        "RIGHT": BOARD_WIDTH - HEAD_SIZE,
        "TOP": 0,
        "BOTTOM": BOARD_HEIGHT - HEAD_SIZE
    }

  // Game Item Objects

    /* Snake's */

        var snake = [5, 4, 3, 2, 1, 0];

        var head = snake[0];

        var newPieceX = snake[0].x
        var newPieceY = snake[0].y

    /* Apple's */

        var apple0 = Apple("#apple0");
        var apples = [apple0];

    /* Moving */

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
            moveApple();
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
            newFrame();
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

        /* Moving (Done "Note: Breaks when other things are broken") */

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
            apple.x = randomInteger( BOARD_SIZE/APPLE_SIZE) * APPLE_SIZE;
            apple.y = randomInteger( BOARD_SIZE/APPLE_SIZE) * APPLE_SIZE;

            $("#apple").css("left", apple.x);
            $("#apple").css("top", apple.y);

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

        function apple(id) {
            var apple = {};
            apple.id = id
            apple.x = randomLocation();
            apple.y = randomLocation();
            return apple;
        }

        function randomLocation() {
            return Math.random() * BOARD_WIDTH;
        }

        /* The Score */

        function increaseScore() {
            points += 1;
            $('#counter').text(points);
        }




    function endGame() {
        // stop the interval timer
        clearInterval(interval);

        // turn off event handlers
        $(document).off();
    }
  
}
