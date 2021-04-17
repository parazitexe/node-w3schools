var MongoClient = require('mongodb').MongoClient;
var http = require('http');
var fetch = require('node-fetch');
//var url = "mongodb://localhost:27017/";



MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var myFilins = db.db("myFilins");


    myFilins.collection('orders').aggregate([
        { $lookup:
                {
                    from: 'products',
                    localField: 'product_id',
                    foreignField: '_id',
                    as: 'orderdetails'
                }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        res = res.map((e)=>{
            return e.orderdetails[0];
        })
        console.log(JSON.stringify(res));
        db.close();
    });

/*    myFilins.createCollection("orders", function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    })*/
/*    myFilins.collection('orders').insertOne({ id: 11, product_id: 156, status: 1 },function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    })*/
/*    myFilins.createCollection("products", function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    })
    myFilins.collection('products').insertMany([
        { _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemons' },
        { _id: 156, name: 'Vanilla Dreams' }
    ],function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    })*/



/*    myFilins.collection("filins-user").find({}).toArray( function(err, res) {
        if (err) throw err;
        console.log(res.length);
        db.close();
    })*/

    db.close();

});



