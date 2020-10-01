"use strict";

const { default: Axios } = require("axios");
const constants = require("../../constants/api");

const listMembers = async () => {
  try {
    const result = await Axios.get(
      `${constants.API}/guilds/${constants.GUILD_ID}/members`
    );

    return result.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { listMembers };
