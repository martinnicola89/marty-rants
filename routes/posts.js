var express = require('express');
var router = express.Router();

let postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);
router.get('/new', postsCtrl.new);
router.post('/', postsCtrl.create);
router.get('/:id', postsCtrl.show);
router.get('/:id/edit', postsCtrl.edit);
router.delete('/:id', postsCtrl.delete);
router.put('/:id', postsCtrl.update);

module.exports = router;
