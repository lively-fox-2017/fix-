var mongoose = require('mongoose');
// const url = "mongodb://admin:admin@localhost:3000/livedebug"
// mongoose.connection.openUri(url)

var bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book
