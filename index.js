var http = require('http');
var date = require('./date');
var path = require('path');
var fs = require('fs');
var url = require('url');

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

var filinrs = fs.createReadStream('./filin.jpg');
filinrs.close();

filinrs.on('open', function () {
    console.log('The file is open');
});
filinrs.on('close', function () {
    console.log('The file is closed');
});






