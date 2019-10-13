var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'W4 Shopping Cart' });
});

router.get('/:page', function(req, res, next) {
  res.render('index', { title: req.params.page });
});

module.exports = router;
