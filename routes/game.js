var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/play', function(req, res, next) {
  res.render('game/play.html');
});

router.get('/lobby',function(req,res,next){
  res.render('game/lobby.html');
});
module.exports = router;
