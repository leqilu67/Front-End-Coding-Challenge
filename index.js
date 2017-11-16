var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var fs = require('fs'); //include file system module

var port = process.env.PORT || 8080;

// serve static files
app.use('/css', express.static(path.join(__dirname + '/css')));

// create server
http.createServer(function(req, res){
  fs.readFile('index.html', function(err, data){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    res.end();
  });
}).listen(port);
