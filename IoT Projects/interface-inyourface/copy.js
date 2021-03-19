// TODO 1

var regHighest = -500;
var regLowest = 500;
var wsHighest = -500;
var wsLowest = 500;

$("#reg-chart-container").append($("<p>").attr("id", "reg-highest").text("Highest recorded value is" + regHighest));
$("#reg-chart-container").append($("<p>").attr("id", "reg-lowest").text("Highest recorded value is" + regLowest));
$("#ws-chart-container").append($("<p>").attr("id", "ws-highest").text("Highest recorded value is" + wsHighest));
$("#ws-chart-container").append($("<p>").attr("id", "ws-lowest").text("Highest recorded value is" + wsLowest));

// TODO 2

function updateRegRecords(value){
    "reg-highest"
    "reg-lowest"
}

function updateWSRecords(value){
    "ws-highest"
    "ws-lowest"
}

// TODO 3

$.getJSON("https://6a08ff0bb0d1.ngrok.io/pi/sensors/temperature", function addDataPoint(result, regData, regChart) {


updateRegRecords(result.value);


setTimeout(10000);

});

var socket = new WebSocket("ws://https://6a08ff0bb0d1.ngrok.io/pi/sensors/temperature");
var result = JSON.parse(event.data);
function addDataPoint(result, wsData, wsChart);
