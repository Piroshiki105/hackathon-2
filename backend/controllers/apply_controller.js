'use strict';

var connector = require('../conf/datasource');
var db = connector.getConnection();

exports.all = (req, res, next) => {
  db.any("select * from APPLY limit 100")
    .then((data) => {
      res.json({ apply_list: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
};

exports.findById = (req, res, next) => {
  db.one("select * from APPLY where ID = $1", req.params.id)
    .then((data) => {
      res.json({ apply: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
      res.json({});
    });
};

exports.save = (req, res, next) => {
  db.one("insert into APPLY(ID, USER_NAME, VALUE) values(nextval('SEQ_APPLY_ID'), $1, $2) returning ID", [req.body.user_name, req.body.value])
    .then((data) => {
      res.redirect(302, BASE_URL + '/apply/' + data.id);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      res.json({ result: "error" });
    });
};