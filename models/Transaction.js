var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connection.openUri('mongodb://localhost:27017/api-crud-mongoose')

var transactionSchema = new Schema({
  memberid: String,
  days: Number,
  date: { type: Date, default: Date.now },
  price: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
