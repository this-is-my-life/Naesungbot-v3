// const { MessageEmbed } = require('discord.js')
module.exports.aliases = ['unban', 'ub']
// module.exports.run = (client, msg) => {
//   const args = msg.content.split(' ')
//   if (!msg.member.hasPermission('BAN_MEMBERS')) {
//     msg.reply('You have no permission!')
//     return
//   }
//   if (args[1] === 'help') {
//     msg.reply(`: ${config.prefix}n!unban @mention reason`)
//     return
//   }
//   const unbUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]))
//   if (!unbUser) return msg.channel.send('Error')
//   if (unbUser.id === client.user.id) return msg.channel.send('Error')
//   const unbReason = args.join(' ').slice(22)
//   if (!unbReason) return msg.channel.send('Error')
//   const unbanEmbed = new MessageEmbed()
//     .setDescription('Unban')
//     .setColor(`${config.color}`)
//     .addField('Unban User', `${unbUser}, ID: ${unbUser.id}`)
//     .addField('Unbanned User', `<@${msg.author.id}>, ID: ${msg.author.id}`)
//     .addField('Time', msg.createdAt)
//     .addField('Reason', unbReason)
//   msg.guild.members.unban(unbUser)
//   msg.channel.send(unbanEmbed)
// }
