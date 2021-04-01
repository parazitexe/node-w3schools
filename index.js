var http = require('http');
var date = require('./date');
var path = require('path');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {

    res.writeHead(200, ["Set-Cookie", "name=myVasiaFilin"])
    //console.log(req.headers)
    req.headers.time = new Date();
    fs.writeFile('log.txt', `${JSON.stringify(req.headers)} \n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.end("filin")

}).listen(3000);
