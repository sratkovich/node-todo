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
  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

db.collection('Users').insertOne({
  name: 'Shawn',
  age: 41,
  location: 'Akron'
}, (err, result) => {
  if (err) {
    return console.log('Unable to insert user', err);
  }

  console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
});
*/
  db.close();
});
