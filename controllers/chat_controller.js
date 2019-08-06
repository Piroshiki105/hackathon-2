'use strict';

var connector = require('../conf/datasource');
var db = connector.getConnection();

exports.fetch = (req, res, next) => {
  db.any("select * from CHAT limit $1 offset $2", [req.params.count, req.params.page])
    .then((data) => {
      res.json({ chat_list: data });
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
};

exports.save = (req, res, next) => {
    db.one("insert into CHAT(ID, USER_NAME, VALUE) values(nextval('SEQ_CHAT_ID'), $1, $2) returning ID", [req.body.user_name, req.body.value])
      .then((data) => {
        res.json({ result: "success", id: data.id });
      })
      .catch((error) => {
        console.log('ERROR:', error);
        res.json({ result: "error" });
      });
  };
