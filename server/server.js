var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  };
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo: todo}); //res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(exports, () => {
  console.log('Started on port ' + port);
});
/*
var newTodo = new Todo({
  text: 'Completed challenge',
  completed: true,
  completedAt: 122620180322
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save todo');
});

var newUser = new User({
  email: 'kaotkbliss@gmail.com'
});

newUser.save().then((doc) => {
  console.log('Saved user', doc);
}, (e) => {
  console.log('Unable to save user');
});
*/
module.exports = {app};
