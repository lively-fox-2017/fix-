var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/api-crud-mongoose')
var Schema = mongoose.Schema, ObjectId = mongoose.ObjectId
var transactionSchema = mongoose.Schema({
  memberid: String,
  days: String,
  date: { type: Date, default: Date.now },
  price: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
