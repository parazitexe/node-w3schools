var http = require('http');
var date = require('./date');
var path = require('path');
var fs = require('fs');
var url = require('url');
var events = require('events');
var formidable = require('formidable');
var mv = require('mv');



/*http.createServer(function (req, res) {
    console.log(req.headers.cookie);

    req.headers.time = date.myDateTime().toString();
    fs.writeFile('log.txt', `${JSON.stringify(req.headers.cookie)} \n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.writeHead(200, ["Set-Cookie", "name=myVasiaFilin"])
    res.end("filin")

}).listen(3000);*/


/**/

/*setInterval(()=>{
    if(fs.existsSync("log.txt")){
        fs.unlink('log.txt', function (err) {
            if (err) throw err;
            console.log('File deleted!');
        });
    }else {
        fs.writeFile('log.txt', `${new Date().toISOString()} \n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }

},1000)*/


/*fs.unlink('test.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});*/



/*var eventEmitter = new events.EventEmitter();

//Create an event handler:
var fuilinHandler = function () {
    console.log('I hear a filin!');
}

//Assign the event handler to an event:
eventEmitter.on('filin', fuilinHandler);

//Fire the 'scream' event:
eventEmitter.emit('filin');*/


var http = require('http');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;

            var newpath = path.resolve(__dirname, 'files', files.filetoupload.name);
            console.log(oldpath);
            console.log(newpath);
            mv(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);



