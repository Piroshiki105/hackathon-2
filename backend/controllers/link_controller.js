'use strict';

var pgp = require('pg-promise')(/* options */);
var db = pgp('postgres://postgres:Yanagi2250@127.0.0.1:5432/hackathon2');
const BASE_URL = 'http://localhost:3000'

exports.fetch = (req, res, next) => {
  db.any("select * from LINK limit $1 offset $2", [req.params.count, req.params.page])
    .then((data) => {
      res.json({ link_list: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
};
