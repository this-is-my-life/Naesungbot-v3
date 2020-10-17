const { MessageEmbed } = require('discord.js')

module.exports.aliases = ['ban', 'b']

/**
 * @param {import('../classes/Client')} client
 * @param {import('discord.js').Message} msg
 */
module.exports.run = async (client, msg) => {
  const { args } = msg.query
  if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You have no permission!')
  if (args.length < 2 || args[0] === 'help') return msg.reply(`${client.settings.prefix}ban @mention reason`)

  const bUser = msg.guild.members.resolve(msg.mentions.members.first().id || args[0])
  if (!bUser) return msg.channel.send('User not found')
  if (bUser.id === client.user.id) return msg.send('cannot ban myself')

  const bReason = args.slice(1).join(' ')
  const banEmbed = new MessageEmbed()
    .setDescription('ban')
    .setColor(0xff0000)
    .addField('Ban User', `${bUser}, ID: ${bUser.id}`)
    .addField('Banned User', `<@${msg.author.id}>, ID: ${msg.author.id}`)
    .addField('Banned Channel', msg.channel)
    .addField('Time', msg.createdAt)
    .addField('Reason', bReason)

  await msg.guild.members.ban(bUser)
  msg.channel.send(banEmbed)
}
