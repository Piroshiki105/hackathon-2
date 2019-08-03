'use strict';

var pgp = require('pg-promise')(/* options */);
var db = pgp('postgres://postgres:Yanagi2250@127.0.0.1:5432/hackathon2');
const BASE_URL = 'http://localhost:3000'

exports.fetch = (req, res, next) => {
  db.any("select * from HISTORY")
    .then((data) => {
      res.json({ history_list: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
};
