//for read
var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/user_db";
 MongoClient.connect(url, function (err, client){
     if(err) throw err;
     const db=client.db("user_db");
     db.collection("user").find().toArray(function(err,result){
         if(err) throw err;
         console.log(result);
         client.close();
     });
});