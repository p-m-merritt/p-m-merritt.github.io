/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

    // Constant Variables
        var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;

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
            redrawRectangles();
            repositionRectangles();

            moveCircle();
            redrawCircle();
            repositionCircle();
            
            factoryFunction();
        }
  
    /* 
    Called in response to events.
    */
        function handleNewVictor() {
            collision()

        }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

        function factoryFunction(id){
            var obj = {};

            obj.id = id;
            obj.y = Number($(id).css('left').replace(/[^-\d\.]/g, ''));
            obj.x = Number($(id).css('top').replace(/[^-\d\.]/g, ''));
            obj.width = $(id).width();
            obj.height = $(id).height();
            obj.speedX = 0;
            obj.speedY = 0;
            
            return obj;
        }

        var obj1 = factoryFunction("#topRectangle");
        var obj2 = factoryFunction("#bottomRectangle");
        var obj3 = factoryFunction("#circle");

        function collision(){
            if (obj1.x < BOARD_WIDTH && obj1.y > BOARD_WIDTH) {
                obj1.speedX = 0;
                secondPoints + 1;
            }
            else (BOARD_WIDTH > obj2.x && BOARD_WIDTH < obj2.y){    
                obj2.speedX = 0;
                firstPoints + 1;
            }
        }

    // Reposition Rectangles

        function repositionRectangles() {
            obj1.x += obj1.speedX;
            obj2.x += obj2.speedX;
        }

    //Redrawing Both Rectangles

        function redrawRectangles() {
            $("#topRectangle").css("top", obj1.y);
            $("#topRectangle").css("left", obj1.x);

            $("#bottomRectangle").css("top", obj2.y);
            $("#bottomRectangle").css("left", obj2.x);
        }

    // Moving Rectangles

        function handleKeyDown(event) {
            // First Player
                if (event.which === letter.Left) {
                obj1.speedX -= 5;
                }
                else if (event.which === letter.Right) {
                obj1.speedX += 5;
                }

            // Second Player
                if (event.which === arrow.Left) {
                obj2.speedX -= 5;
                }
                else if (event.which === arrow.Right) {
                obj2.speedX += 5;
                }
        }

    // Stopping Rectangles

        function handleKeyUp(event) {
            // First Player
                if (event.which === letter.Left) {
                obj1.speedX = 0;
                }
                else if (event.which === letter.Right) {
                obj1.speedX = 0;
                }

            // Second Player
                if (event.which === arrow.Left) {
                obj2.speedX = 0;
                }
                else if (event.which === arrow.Right) {
                obj2.speedX = 0;
                }       
        }

    // Circle

        function moveCircle() {
            obj3.y += obj3.speedY;
        }

        function redrawCircle() {
            $('#circle').css("left", obj3.x);
            $('#circle').css("top", obj3.y);
        }

        function repositionCircle() {
            if (obj3.y > BOARD_WIDTH) {
            obj3.speedX -= obj3.speedX;
            }
            else if (obj3.y < 0) {
            obj3.speedX -= obj3.speedX;
            }
            else if (obj3.y > BOARD_HEIGHT) {
            obj3.speedY -= obj3.speedY;
            }
            else if (obj3.y < 0) {
            obj3.speedY -= obj3.speedY;
            }
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
