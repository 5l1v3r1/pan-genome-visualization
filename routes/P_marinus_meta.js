var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('P_marinus_meta', { title: '' });
  //res.sendfile(__dirname + '/public/clienthtml/index.html');
});

module.exports = router;
