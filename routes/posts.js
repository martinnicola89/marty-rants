var express = require('express');
var router = express.Router();

let Post = require('../models/post');
let posts = Post.getAll()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('posts', { posts });
});

router.post('/new', function(req, res, next) {
    req.body.id = Math.floor(Math.random()*10000);
    posts.push(req.body);
    res.redirect('/posts');
})

module.exports = router;
