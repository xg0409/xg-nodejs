var express = require('express');
var router = express.Router();

router.use('/update', function(req, res, next) {
  res.render('user/update', {
    title: 'update'
  });
});

router.use('/insert', function(req, res, next) {
  res.render('user/insert', {
    title: 'insert'
  });
});

module.exports = router;
