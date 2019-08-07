'use strict';
const fs = require('fs')

exports.fetch = (req, res, next) => {
  let data = 0;
  let path = "./data/count.dat";
  try {
    fs.statSync(path);
    // ファイルが存在した
    data = fs.readFileSync(path, {encoding: "utf-8"});
  } catch (error) {
    if (error.code !== 'ENOENT') {
      // ファイルが存在しない以外のエラーは空のJSONを返す
      res.json({});
      console.error(error);
      return;
    }
    // ファイルが存在しない場合はそのまま続行してファイルを作成。
  }
  data++;
  fs.writeFileSync(path, data, {encoding: "utf-8"});

  res.json({count: data});
};