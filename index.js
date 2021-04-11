var MongoClient = require('mongodb').MongoClient;
var http = require('http');
var fetch = require('node-fetch');
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var myFilins = db.db("myFilins");

    db.close();

});



