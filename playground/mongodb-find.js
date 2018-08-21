const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todoApp', (err,db) =>{

	if(err){
		return console.log('Unable to connecr to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	db.collection('Users').find({name:"Raz"}).count().then((count) =>{
		console.log(`Users count: ${count}`)
	}, (err) =>{
		console.log(`Error: ${err}`);
	});

	db.collection('Users').find({name:"Raz"}).toArray().then((docs) =>{
		console.log(JSON.stringify(docs,undefined,2));
	}, (err) =>{
		console.log(`Error: ${err}`);
	});


	//db.close();

})