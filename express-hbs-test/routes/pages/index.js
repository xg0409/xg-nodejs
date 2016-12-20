var express = require('express');
var router = express.Router();

router.use('/index', function(req, res, next) {
  res.render('index', {
    title: '企业信息管理'
  });
});

router.use('/user', require('./user'));

module.exports = router;
