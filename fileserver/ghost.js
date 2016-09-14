var http = require("http");
var fs  = require("fs");
var path = require("path");

http.createServer(function(req, res){
    console.log(`${req.method} request for ${req.url}`);

    if (req.url === "/"){
        fs.readFile("./public/index.html", "UTF-8", function(err, html){
        res.writeHead(200 ,{"Content-Type":"text/html"} );
        res.end(html);

        });

}).listen(4000); 