//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo db server.');
  }
  console.log('Connected to Mongo db server');


  db.collection('Users').findOneAndUpdate({
    _id: ObjectID("5c1d4ac37e675517616c3fa6")
  }, {
    $set: {
      name: 'Shawn'
    },
      $inc: {
        age: 1
      }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

/*
  db.collection('Users').findOneAndUpdate({
    _id: ObjectID("5c1d4ac37e675517616c3fa6")
  }, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
*/
/*
  db.collection('Todos').findOneAndUpdate({
    _id: ObjectID("5c1d53f60daabfc65f6c7038")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
*/
  //db.close();
});
