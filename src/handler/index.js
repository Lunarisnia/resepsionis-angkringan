"use strict";

const fs = require("fs");
const path = require("path");

const baseName = path.basename(__filename);

function applyHandler(client) {
  fs.readdirSync(__dirname)
    .filter((file) => file.indexOf(".") !== 0 && file !== baseName)
    .forEach((file) => {
      const apply = require(path.join(__dirname, file));
      apply(client);
    });
}

module.exports = applyHandler;
