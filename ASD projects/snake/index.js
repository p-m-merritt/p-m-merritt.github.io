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

  // Game Item Objects

    /* Snake's */

        var snake = [];
            snake.push(makeSnake("#snake"))
            snake[0].x = 20;
            snake[0].y = 20;
        var head = snake[0];
        return head; 

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
            redrawApple();
        }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

    // The Snake's Stuff

        /* Head (Fine) */

            function repositionHead() {
                positionX += speedX;
                positionY += speedY;
            }

            function redrawHead() {
                $("#head").css("left", positionX);
                $("#head").css("top", positionY);
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

/*
            snake.push(makeSnake('#body1'));
            snake.push(makeSnake('#body2'));
            
            
            var snake = [
                {name: 'a', x: 1, y: 1},
                {name: 'b', x: 2, y: 2},
                {name: 'c', x: 3, y: 3},
                {name: 'd', x: 4, y: 4},
            ]

            for (var i = body.length-1; i >= i; i--){
                snake[i].x = snake[i-1].x;
            }
            snake[0].x -= 1;
            */


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

        /* Collision (Unsure) */

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

    // The apple's stuff (Probably a problem area)

        function randomInteger(max) {
            var randomInt = Math.floor(Math.random() * max);
            return randomInt;
        }

        function randomLocation() {
            return Math.random((BOARD_HEIGHT/APPLE_SIZE) * APPLE_SIZE);
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
        }

        function apple(id) {
            var apple = {};
            apple.id = id
            apple.x = randomLocation();
            apple.y = randomLocation();
            return apple;
        }



        function doCollide(obj1, obj2) {
            if (obj1.x === obj2.x && obj1.y === obj2.y) {
                return appleEaten();
            }

            var obj1 = snake[0];
            var obj2 = apple;
        }

        

        /* The Score */

        function increaseScore() {
            points += 1;
            $('#counter').text(points);
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
