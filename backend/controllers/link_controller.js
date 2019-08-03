'use strict';

var pgp = require('pg-promise')(/* options */);
var db = pgp('postgres://postgres:Yanagi2250@127.0.0.1:5432/hackathon2');
const BASE_URL = 'http://localhost:3000'

exports.all = (req, res, next) => {
  db.any("select * from LINK limit 100")
    .then((data) => {
      res.json({ apply_list: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
};

exports.findById = (req, res, next) => {
  db.one("select * from LINK where ID = $1", req.params.id)
    .then((data) => {
      res.json({ apply: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
      res.json({});
    });
};
