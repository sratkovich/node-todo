const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*

var id = '5c24e666b4217eb9817efb8c';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
};

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => {
  console.log(e);
});
*/

var badId = '5c24e666b4217eb9817efb8c';
var goodId = '5c23e6acb1a4998345843715';


User.findById(badId).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', user);
}).catch((e) => {
  console.log(e);
});

User.findById(goodId).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', user);
}).catch((e) => {
  console.log(e);
});
