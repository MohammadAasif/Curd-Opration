var MongoClient = require('mongodb').MongoClient; 
 var url = "mongodb://localhost:27017/user_db"; 
 MongoClient.connect(url, function(err, client) { 
 const db = client.db("user_db");
 if (err) throw err; 
 var myquery = { user_id: 'vb001' }; 
 db.collection("user").deleteOne(myquery, function(err, result) { 
 if (err) throw err; 
 console.log(result.deletedCount + " record(s) deleted"); 
 client.close(); 
 }); 
 });

