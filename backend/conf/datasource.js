'use strict';

const pgp = require('pg-promise')(/* options */);

function connect() {
    var db = pgp('postgres://postgres:Yanagi2250@127.0.0.1:5432/hackathon2');
    const BASE_URL = 'http://localhost:3000'

    return () => { return db; };
}

exports.getConnection = connect();