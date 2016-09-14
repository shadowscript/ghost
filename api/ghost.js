var http =  require("http");
var data = require("./data/country");

http.createServer(function(req, res){
    res.writeHead(200 , {"Content-Type":"text/json"});
    res.end(JSON.stringify(data));

}).listen(4000);

console.log("ghost listening on port 4000");