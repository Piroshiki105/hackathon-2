var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let data = {
    items: [
      { name: "<h1>リンゴ</h1>" },
      { name: "<h2>バナナ</h2>" },
      { name: "<h3>スイカ</h3>" }
    ]
  };

  res.render('./index.ejs', data);
});

module.exports = router;
