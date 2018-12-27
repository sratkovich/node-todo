//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/*
var obj = new ObjectID();

var user = {name: 'Shawn', age: 41};
var {name} = user;
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo db server.');
  }
  console.log('Connected to Mongo db server');
/*
  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count:', count);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Todos').find({
    _id: new ObjectID('5c1d1559e0cc541b571c10a2')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
*/
  db.collection('Users').find({name: 'Shawn'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  //db.close();
});
