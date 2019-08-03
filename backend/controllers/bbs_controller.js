'use strict';

var pgp = require('pg-promise')(/* options */);
var db = pgp('postgres://postgres:Yanagi2250@127.0.0.1:5432/hackathon2');
const BASE_URL = 'http://localhost:3000'

exports.fetch = (req, res, next) => {
  db.any("select * from BBS limit $1 offset $2", [req.params.count, req.params.page])
    .then((data) => {
      res.json({ bbs_list: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
};

exports.save = (req, res, next) => {
    db.one("insert into BBS(ID, USER_NAME, VALUE) values(nextval('SEQ_BBS_ID'), $1, $2) returning ID", [req.body.user_name, req.body.value])
      .then((data) => {
        res.json({ result: "success", id: data.id });
      })
      .catch((error) => {
        console.log('ERROR:', error);
        res.json({ result: "error" });
      });
  };
