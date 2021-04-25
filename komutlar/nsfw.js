const AshPotter = require('discord.js');
const superagent = require('superagent');

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Bu kanal bir NSFW kanalı değil! -poketale discord bot")
  }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['31'],
   permLevel: 0
 };

 exports.help = {
   name: '4k',
   description: 'ash potter',
   usage: 'nsfw-4k'
 }; 