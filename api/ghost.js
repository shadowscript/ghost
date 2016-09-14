var http =  require("http");
var data = require("./data/country");

http.createServer(function(req, res){
    res.writeHead(200 , {"Content-Type":"text/json"});
    res.end(JSON.stringify(data));

}).listen(4000);

console.log("Server litsening on port 4000");