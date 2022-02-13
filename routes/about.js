var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('about/index', {user: req.user});
});

module.exports = router;
