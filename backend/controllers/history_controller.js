'use strict';

var connector = require('../conf/datasource');
var db = connector.getConnection();

exports.fetch = (req, res, next) => {
  db.any("select * from HISTORY")
    .then((data) => {
      res.json({ history_list: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
};
