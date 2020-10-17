const { MessageEmbed } = require('discord.js')
module.exports.aliases = ['kick', 'k']

/**
 * @param {import('../classes/Client')} client
 * @param {import('discord.js').Message} msg
 */
module.exports.run = async (client, msg) => {
  const { args } = msg.query
  if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('You have no permission!')
  if (args.length < 2 || args[0] === 'help') return msg.reply(`${client.settings.prefix}kick @mention reason`)

  const kUser = msg.guild.members.resolve(msg.mentions.members.first().id || args[0])
  if (!kUser) return msg.channel.send('User not found')
  if (kUser.id === client.user.id) return msg.send('cannot kick myself')

  const bReason = args.slice(1).join(' ')
  const kickEmbed = new MessageEmbed()
    .setDescription('kick')
    .setColor(0xff0000)
    .addField('Kick User', `${kUser}, ID: ${kUser.id}`)
    .addField('Kicked User', `<@${msg.author.id}>, ID: ${msg.author.id}`)
    .addField('Kicked Channel', msg.channel)
    .addField('Time', msg.createdAt)
    .addField('Reason', bReason)

  await msg.guild.members.kick(kUser)
  msg.channel.send(kickEmbed)
}
