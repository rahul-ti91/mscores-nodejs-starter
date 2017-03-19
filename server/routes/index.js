var express = require('express');
var router = express.Router();
/* GET index page. */
router.use(function (req, res, next) {
    // console.log(res);
    next();
});
router.get('/', function (req, res, next) {
    res.sendFile('index.html');
});
module.exports = router;