var express = require('express');
var router = express.Router();
var User = require('../models/user');
var sha1 = require('sha1');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function(err,users){
    res.json(users);
  });
});

//add dummy user
router.get('/add-dummy',function(req,res){
  var user = new User({
    username : 'yafithekid',
    password : sha1('ganteng'),
    name : 'Muhammad Yafi',
    email : 'yafithekid212@gmail.com'
  });
  console.log('here');

  user.save(function(err){
    if (err) console.log(err);
    res.send('Data saved');
  });
});

//find specific user
router.get('/:username([0-9a-zA-Z_]+)/read', function(req, res) {
  var username = req.params.username;

  User.findOne({username: username}, function(err, user){
    res.render('user/read.html',{user:user});
  });
});


module.exports = router;
