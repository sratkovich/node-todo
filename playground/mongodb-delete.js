//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo db server.');
  }
  console.log('Connected to Mongo db server');


  db.collection('Users').deleteMany({name: 'Shawn'}).then((result) => {
    console.log(result);
  });
/*
  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });
*/

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c1d4ae27e675517616c3fb3")}).then((result) => {
    console.log(result);
  });
  //db.close();
});
