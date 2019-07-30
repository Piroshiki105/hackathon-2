'use strict';

var pgp = require('pg-promise')(/* options */);
var db = pgp('postgres://postgres:postgres@127.0.0.1:5432/hackathon2');

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
  db.one("insert into APPLY(ID, USER_NAME, VALUE) values(nextval('SEQ_APPLY_ID'), $1, $2) returning ID", [req.query.userName, req.query.value])
    .then((data) => {
      res.json({ result: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
      res.json({ result: "error" });
    });
};