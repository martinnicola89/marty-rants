var express = require('express');
var router = express.Router();

let postsCtrl = require('../controllers/posts');

/* GET home page. */
router.get('/', postsCtrl.index);
router.get('/new', postsCtrl.new);
router.post('/', postsCtrl.create);
router.get('/:id', postsCtrl.show);

module.exports = router;
