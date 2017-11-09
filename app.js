const express = require('express')
const app = express()

var books = require('./routes/books')
var transactions = require('./routes/transactions')

app.use('/books', books)
app.use('/transactions', transactions)

app.listen(3000, () => {
  console.log('Running on port 3000')
})
