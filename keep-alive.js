var http = require("http");
http.createServer(function(req, res){
res.write("Lopes"); 
res.end();
}).listen(8080);