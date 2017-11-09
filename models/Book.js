var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connection.openUri('mongodb://localhost:27017/api-crud-mongoose')

var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book
