var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    code: '0000',
    data: "hello venus!",
    message: ''
  });
});

module.exports = router;
