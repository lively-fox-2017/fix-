const express = require('express');
// const app = express;
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/my_database');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Cant connect to database') : console.log('Database connected')
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
