'use strict';

const pgp = require('pg-promise')(/* options */);

function connect() {
    var db = pgp('postgres://postgres:postgres@127.0.0.1:5432/hackathon2');
    return () => { return db; };
}

exports.getConnection = connect();