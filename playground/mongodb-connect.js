const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todoApp', (err,db) =>{

	if(err){
		return console.log('Unable to connecr to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	db.collection('Users').insertOne({
		name: "Raz",
		age: 29,
		location: "TLV"
	}, (err,result) => {

		if (err){
			 return console.log("Error on insertOne", err);
		}


		console.log(JSON.stringify(result.ops,undefined,2));



	});


	db.close();

})