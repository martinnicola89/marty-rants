var express = require('express');
var router = express.Router();

const passport = require('passport');

router.get('/', (req, res, next) => res.redirect('/about'));

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/about',
      failureRedirect : '/about'
    }
));

  // OAuth logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;
