var express = require('express');
var router = express.Router();

let postsCtrl = require('../controllers/posts');

/* GET home page. */
router.get('/', postsCtrl.index);
router.get('/new', postsCtrl.new);
router.post('/', postsCtrl.create);
router.get('/:id/edit', postsCtrl.edit);
router.put('/:id', postsCtrl.update);
router.get('/:id', postsCtrl.show);
router.delete('/:id', postsCtrl.delete);

module.exports = router;
