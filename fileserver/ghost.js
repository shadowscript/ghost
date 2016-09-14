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
     } else if (req.url.match(/.css$/)){

        var cssPath = path.join(__dirname , 'public' , req.url);
        var fileStream = fs.createReadStream(cssPath , "UTF-8");

        res.writeHead(200 , {"Content-Type":"text/css"});

        fileStream.pipe(res);

}).listen(4000); 