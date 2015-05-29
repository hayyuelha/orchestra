var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var router = express.Router();
var User = require('../models/user');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

//passport js configuration
passport.serializeUser(function(user, done) {
  done(null, user);
});
 
passport.deserializeUser(function(user, done) {
  done(null, user);
});

/**
 * show the login page
 */
router.get('/login',function(req,res,next){
  if (req.user){
    //already logged in
    res.redirect('/'); 
  } else {
    // not logged in, show the login form, remember to pass the message
    // for displaying when error happens
    res.render('login', { message: req.flash.messages });
    // and then remember to clear the message
    req.flash.messages = null;
  }
});

router.get('/asdf',function(req,res,next){
  res.json(req.user);
});

/**
 * login validation
 */
router.post('/login',function(req,res,next){
  // ask passport to authenticate
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      // if error happens
      return next(err);
    }
    
    if (!user) {
      // if authentication fail, get the error message that we set
      // from previous (info.message) step, assign it into to
      // req.session and redirect to the login page again to display
      req.flash.messages = info.message;
      return res.redirect('/login');
    }

    // if everything's OK
    req.logIn(user, function(err) {
      if (err) {
        req.flash.messages = "Error";
        return next(err);
      }

      //login successfull.
      return res.redirect('/');
    });
    
  })(req, res, next);

});


router.get('/logout',function(req,res,next){
  req.logout();
  res.redirect('/');
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test-url',function(req,res,next){
  var id = mongoose.Types.ObjectId();
  //res.send(req.get('host') + " -- " + req.originalUrl);
  res.send(id);
});
module.exports = router;
