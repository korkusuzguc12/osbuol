const { MessageAttachment } = require("discord.js");
const { prefix } = require("../ayarlar.json"); // kendinize göre düzenleyin

exports.run = async (client, message, args) => { // 'Vu4ll#0586 ❤️
  let yazı = args.slice(0).join(" ");
  if (!yazı) return message.channel.send(`Bir şeyler yazmalısın!`);
  if (!yazı.includes(","))
    return message.channel.send(
      `Lütfen mesajını \`,\` ile ayırt! Örnek: ${prefix}drake üst yazı, alt yazı`
    );
  let s = yazı.split(",");
  let link = `https://api.devs-hub.xyz/drake?top=${s[0]}&bottom=${s[1]}`;
  let encode = encodeURI(link);

  message.channel.send(new MessageAttachment(encode, `drake.png`));
};

exports.conf = {
  aliases: []
};

exports.help = { // 'Vu4ll#0586 ❤️
  name: "drake",
  description: "Drake meme oluşturur",
  usage: "drake <yazı 1, yazı 2>",
  perm: ""
};