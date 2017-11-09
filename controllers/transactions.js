const Transaction = require('../models/Transaction')

module.exports = {
  all: function(req, res) {
    Transaction.find()
    .populate('booklist')
    .exec(function(err, trs){
      if(err){
        res.send({err: err})
      }
      res.send(trs)
    })
  },
  create: function(req, res) {
    let split = req.body.books.split(',')
    var transaction = new Transaction({
      memberid: req.body.memberid,
      days: req.body.days,
      price: req.body.price,
      booklist: split
    });
    transaction.save(function (err, result) {
      if (err) {
        res.send({err: err})
      } else {
        res.send(result)
      }
      res.send(result)
    });
  },
  update: function(req, res) {
    let split = req.body.books.split(',')
    if(req.body.books.length > 1){
      Transaction.update({ _id: req.params.id }, {
        $set: {
          memberid: req.body.memberid,
          days: req.body.days,
          price: req.body.price,
          booklist: split
        }
      }, function(err, trs){
        if(err){
          res.send({err: err})
        }
        res.send(trs)
      })
    }else{
      Transaction.update({ _id: req.params.id }, {
        $set: {
          memberid: req.body.memberid,
          days: req.body.days,
          price: req.body.price,
          booklist: req.body.books
        }
      }, function(err, trs){
        if(err){
          res.send({err: err})
        }
        res.send(trs)
      })
    }
  },
  delete: function(req, res) {
    Transaction.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    })
  }
}
