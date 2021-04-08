var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    var filins = db.db("filins");

/*    filins.createCollection("filins-list3", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
    dbo.createCollection("filins3", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });*/

    dbo.dropCollection("filins", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    })

/*    dbo.collection("customers").deleteMany({ }, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });*/



/*    dbo.collection("clients").find({ }, { projection: { _id: 0} }).sort({ name: -1 }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });*/


});



