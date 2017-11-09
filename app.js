const express = require('express');
var bodyParser = require('body-parser')
const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongooses', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000,()=>{
  console.log('PORT 3000 ready !!')
})
