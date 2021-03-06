'use strict';

var connector = require('../conf/datasource');
var db = connector.getConnection();

exports.fetch = (req, res, next) => {
  db.any("select * from LINK limit $1 offset $2", [req.params.count, req.params.page])
    .then((data) => {
      res.json({ link_list: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
};
