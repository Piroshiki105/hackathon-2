'use strict';

var pgp = require('pg-promise')(/* options */);
var db = pgp('postgres://postgres:postgres@127.0.0.1:5432/hackathon2');

/**
 * show all employee list
 */
exports.all = (req, res, next) => {
  db.any("select * from EMPLOYEE")
    .then((data) => {
      res.json({ employees: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
};

/**
 * show employee details
 */
exports.findById = (req, res, next) => {
  db.one("select * from EMPLOYEE where ID = $1", req.params.id)
    .then((data) => {
      res.json({ employee: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
};