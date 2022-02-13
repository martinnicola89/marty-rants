var express = require('express');
var router = express.Router();
var calendar = require('@syncfusion/ej2-calendars');

router.get('/', (req, res) => {
    console.log(calendar);
    res.render('tutoring/index', {user: req.user, calendar})
});

module.exports = router;
