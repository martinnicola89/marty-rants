var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

let commentsCtrl = require('../controllers/comments');

router.post('/posts/:id/comments/new', commentsCtrl.create);

module.exports = router;
