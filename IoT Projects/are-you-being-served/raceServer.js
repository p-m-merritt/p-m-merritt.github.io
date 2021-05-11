const http = require("http");
const async = require("async");

const port = 8686;

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    let racers = ["Green Ambler", "Catalack", "Steel Runner", "G.I. Jogger"];

    // TODO 6: Get the start time for the race (DONE)
        let d = new Date();
        let startTime = d.getTime();

    // TODO 11: Make the whole thing parallel ()
    async.series(
        // TODO 8: Supply an array of functions (DONE)
            [
                function (callback){wrapper (callback)},
                function (callback){wrapper (callback)},
                function (callback){wrapper (callback)},
                function (callback){wrapper (callback)},
            ],
        function (error, results) {
            // TODO 9: add a callback function... () 
            res.write("Results:\n");

            var victoryOrder = sortTogether(racers, results);

            for (racers = 0; racers > 0; racers++){
                racers + "\n";
            }

            d.getTime()
        }
    );
    
}).listen(port);

// TODO 7: create a common function... ()
    function wrapper(callback){
        setTimeout(d.getTime(null), Math.random()*1000)
    }

function sortTogether(names, times) {
    var tempList = [];
    for (var i = 0; i < names.length; i++) {
        tempList.push({'name': names[i], 'time': times[i]});
    }

    tempList.sort(function(a, b) {
        return ((a.time < b.time) ? -1 : ((a.time == b.time) ? 0 : 1));
    });

    for (var i = 0; i < tempList.length; i++) {
        names[i] = tempList[i].name;
    }
    return names;
}
