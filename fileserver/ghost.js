var http = require("http");
var fs  = require("fs");
var path = require("path");

http.createServer(function(req, res){
    console.log(`${req.method} request for ${req.url}`);


}).listen(4000); 