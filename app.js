"use strict";

require('dotenv').config();
const client = require('./src/config/clientConfig');


client.login(process.env.TOKEN);