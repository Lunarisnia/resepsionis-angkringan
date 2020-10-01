"use strict";

require("dotenv").config();

class Constants {
  constructor() {
    this.API = process.env.ALBION_API;
    this.GUILD_ID = process.env.GUILD_ID;
  }
}

const constants = new Constants();
module.exports = constants;
