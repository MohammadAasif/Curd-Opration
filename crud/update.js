var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/user_db";
 MongoClient.connect(url, function (err, client){
     if(err) throw err;
     const db=client.db("user_db");
     db.collection("user").updateMany({user_id:'vb004'},{$set :{user_name:"Lakhan"}},function(err,result){
         if(err) throw err;
         console.log("update = "+ result.modifiedCount);
     });
 
    });