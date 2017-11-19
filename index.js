var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var fs = require('fs'); //include file system module

var port = process.env.PORT || 8080;

// serve static files
app.use('/public', express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port);
