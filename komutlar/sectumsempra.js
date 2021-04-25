  const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var prefix = ayarlar.prefix;

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (!user) return message.channel.send(`Sunucudan yasaklamak istediğiniz kullanıcıyı etiketlemelisiniz; \`${prefix}ban @Gnarge Reklam\` `);
  if (user.id === message.author.id) return message.channel.send('Kendini yasaklayamazsın.');
  if (user.position > message.member.roles.highest.position) return message.channel.send(`Bu kullanıcının senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
    if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Etiketlediğin kullanıcıyı sunucuda bulamadım.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucudan yasaklayamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('Sunucudaki yetkilileri yasaklayamam!');

  message.guild.members.ban(user.id)
  message.channel.send(`<@${user.id}> **Adlı kullanıcı Cool Team Tarafından tarafından yasaklandı!** **Sebep: \`${reason}\`**`)
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Karmen Banned', message.author.avatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('RANDOM')
  .addField('Bilgiler:', `
  **Melez prensin kim olduğunu hayla anlamadın mı <@${user.id}> sana büyü atan kişi <@${message.author.tag}> görüşürüz acı çekerek öl. ** 
  
  **Sebebi:${reason}\**
  `)
  .setImage('https://cdn.discordapp.com/attachments/679724434134794285/835236587398365214/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif')
  .setFooter('Bu komutu kullanan insan evladı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)


};




exports.conf = {
  aliases: ['Sectumsempra'],
  permLevel: 0,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'sectumsempra',
  description: 'Belirttiğiniz kişiyi sunucudan yasaklar.',
  usage: 'sectumsempra <@kullanıcı> <sebep>',

};
