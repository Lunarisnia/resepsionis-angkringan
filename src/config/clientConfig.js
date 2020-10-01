"use strict";

const Discord = require("discord.js");
const applyHandler = require("../handler");
const client = new Discord.Client();

applyHandler(client);

module.exports = client;
