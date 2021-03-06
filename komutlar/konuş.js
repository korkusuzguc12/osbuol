const Discord = require('discord.js');
const discordTTS=require("discord-tts");
exports.run = async (client, message, args, path) => {
  const broadcast = client.voice.createBroadcast();
  var channelId=message.member.voice.channelID;
  if(!channelId) return message.channel.send('Bir ses kanalında olmalısın!')
  let engin = args.slice(0).join(' ')
  if(!engin) return message.channel.send('Lütfen demem istediğiniz şeyi söyleyin')
  var channel=client.channels.cache.get(channelId);
  channel.join().then(connection => {
      broadcast.play(discordTTS.getVoiceStream(engin));
      const dispatcher=connection.play(broadcast);
  });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'konuş'
};