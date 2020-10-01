"use strict";

const { listMembers } = require("../services/member/list");

module.exports = (client) => {
  client.on("message", async (msg) => {
    if (msg.content === "ping") {
      const members = await listMembers();
      members.forEach((member) => {
        if (member.Name === "Loonarisnia") {
          msg.reply(JSON.stringify(member));
        }
      });
    }
  });
};
