/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
    ////////////////////////////////////////////////////////////////////////////////
    //////////////////////////// SETUP /////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    
    // Constant Variables
    var FRAMES_PER_SECOND_INTERVAL = 100;
    
    var speedX = 0;
    var speedY = 0;
    
    var points = 0;
    
    var BOARD_WIDTH = $("#board").width();
    var BOARD_HEIGHT = $("#board").height();
    
    var APPLE_SIZE = $("#apple").width()
    
    // Game Item Objects
    
    /* Snake's */
    
    var snake = [];
    snake.push(makeSnake("#snake"))
    snake[0].x = 20;
    snake[0].y = 20;
    var head = snake[0];
    
    /* Apple's */
    
    var apple = apple('#apple');
    $("#apple").css("left", apple.x);
    $('#apple').css("top", apple.y);
    
    /* Moving */
    
    var key = {
        "Left": 37,
        "Up": 40,
        "Right": 39,
        "Down": 38,
    }

    moveApple();
    
    console.log(apple.x, apple.y)

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
            stopSnake();
            redrawHead();
            appleEaten();
        }

    /* 
    Called in response to events.
    */

        function appleEaten() {
            console.log(doCollide(apple, head))

            if(doCollide(apple, head)) {
                increaseScore();
                moveApple();
                bodyFollow();
            }
            
        }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

    // The Snake's Stuff

        /* Head (Fine) */

            function repositionHead() {
                head.x += speedX;
                head.y += speedY;
            }

            function redrawHead() {
                $("#head").css("left", head.x);
                $("#head").css("top", head.y);
            }

        /* Body (Concerned) */

            function makeSnake(id){
                var body = {};

                body.id = id;
                body.width = $(".snake").width();
                body.height = $(".snake").height();
                body.x = 0
                body.y = 0

                return body;
            }

            function bodyFollow() {
                for (var i = snake.length - 1; i >= 1; i--){
                    body[i].x = body[i + 1].x;
                    body[i].y = body[i + 1].y;
                }
            }

        /* Moving (Done) */

            function handleKeyDown(event) {
                if (event.which === key.Left) {
                    speedX = -20;
                    speedY = 0;
                }

                else if (event.which === key.Right) {
                    speedX = 20;
                    speedY = 0;
                }

                else if (event.which === key.Up) {
                    speedY = 20;
                    speedX = 0;
                }

                else if (event.which === key.Down) {
                    speedY = -20;
                    speedX = 0;
                }
            }

        /* Collision (Done) */

            function stopSnake() {
                if (head.x >= BOARD_WIDTH) {
                    speedX = 0;
                    head.x = BOARD_WIDTH - 20;
                }

                else if (head.x + 20 <= 0){
                    speedX = 0;
                    head.x = 0;
                }

                if (head.y >= BOARD_HEIGHT){
                    speedY = 0;
                    head.y = BOARD_HEIGHT - 20;
                }
                
                else if (head.y + 20 <= 0) {
                    speedY = 0;
                    head.y = 0;
                }
            }


    // The apple's stuff (Probably a problem area)

        function randomInteger(max) {
            var randomInt = Math.floor(Math.random() * max);
            return randomInt;
        }

        function randomLocation() {
            return Math.random((BOARD_HEIGHT/APPLE_SIZE) * APPLE_SIZE);
        }

        function apple(id) {
            var apple = {};
            apple.id = id
            apple.x = randomLocation();
            apple.y = randomLocation();
            return apple;
        }

        function doCollide(obj1, obj2) {
            if ((obj1.x >= obj2.x && obj1.x + obj1.width <= obj2.x) && (obj1.y >= obj2.y && obj1.y + obj1.height <= obj2.y)) {
                return true
            }
            return false
        }

        function moveApple() {
            apple.x = randomInteger(BOARD_HEIGHT/APPLE_SIZE) * APPLE_SIZE;
            apple.y = randomInteger(BOARD_HEIGHT/APPLE_SIZE) * APPLE_SIZE;

            for (var i = 0; i < snake.length; i++){
                if (doCollide(apple, snake[i])){
                    moveApple();
                    break;
                }
            }

            $("#apple").css("left", apple.x);
            $("#apple").css("top", apple.y);
        }

        /* The Score */

        function increaseScore() {
            points += 2;
            $('#counter').text(points);
            final();
        }



// Ending Things

        function final() {
            if (points = 10){
                
                return endGame();
            }
        }

    function endGame() {
        // stop the interval timer
        clearInterval(interval);

        // turn off event handlers
        $(document).off();
    }
  
}

/*
putting in the loops -> handling a full-sized snake 
instead of just the head (and of course, 
    
creating new pieces for the snake if an apple is eaten



for (statement 1; statement 2; statement 3) {
  // code block to be executed
}


*/