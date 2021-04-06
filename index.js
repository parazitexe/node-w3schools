var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

/*    dbo.collection("clients").insertOne({ name: "Vasia filin",address: "filin street 42" , rank: "filin" }, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });*/

    dbo.collection("clients").find({ name: "Vasia filin" }, { projection: { _id: 0, rank: 1} }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });


});
