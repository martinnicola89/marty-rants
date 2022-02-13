var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('tutoring/index', {user: req.user, calendar})
});

module.exports = router;
