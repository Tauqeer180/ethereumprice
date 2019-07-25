var express  = require('express');
var app      = express();
var port     = process.env.PORT || 300;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var User = require('./models/user');
var LocalStrategy = require('passport-local').Strategy;


// Conenct to DB
mongoose.connect('mongodb://localhost/27017');
var db = mongoose.connection;
// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Register User
app.post('/register', function(req, res){
    var password = req.body.password;
    var password2 = req.body.password2;
    if (password == password2){
      var newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
      User.createUser(newUser, function(err, user){
        if(err) throw err;
        res.send(user).end()
      });
    } else{
      res.status(500).send("{errors: \"Passwords don't match\"}").end()
    }
  });
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }
      User.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
     	if(isMatch){
     	  return done(null, user);
     	} else {
     	  return done(null, false, {message: 'Invalid password'});
     	}
     });
   });
  }
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
      done(err, user);
    });
  });

  // Endpoint to login
app.post('/login',
passport.authenticate('local'),
function(req, res) {
  res.send(req.user);
}
);
// Endpoint to get current user
// app.get('/user', function(req, res){
// res.send(req.user);
// })
// Endpoint to logout
app.get('/logout', function(req, res){
req.logout();
res.send(null)
});
  app.listen(300, () => console.log('App listening on port 300!'))