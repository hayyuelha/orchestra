var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search', function(req, res, next) {
  res.render('wiki/search.html');
});

router.get('/read',function(req,res,next){
  res.render('wiki/read.html');
});
module.exports = router;
