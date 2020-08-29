const { MessageEmbed } = require('discord.js')
module.exports.aliases = ['kick', 'k']
module.exports.run = (client, msg) => {
   const args = msg.content.split(' ')
   if (!msg.member.hasPermission('KICK_MEMBERS')) return
   if (args[0] === 'help') {
     msg.reply(`${config.prefix}kick <유저 맨션>`)
   return
}
const kUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]))
msg.guild.members.fetch(kUser).kick('없음')
msg.channel.send(kUser + ' 유저를 성공적으로 킥 했습니다')
}