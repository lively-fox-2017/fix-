var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/api-crud-mongoose')
var Schema = mongoose.Schema, ObjectId = mongoose.ObjectId
var bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: Number,
  stock: Number
});
var Book = mongoose.model('Book', bookSchema);

module.exports = Book
