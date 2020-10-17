module.exports.aliases = ['guildedit', 'ge']

/**
 * @param {import('../classes/Client')} client
 * @param {import('discord.js').Message} msg
 */
module.exports.run = async (client, msg) => {
  if (!msg.member.hasPermission('MANAGE_GUILD')) return msg.reply('You have no permission!')
  const [arg] = msg.query.args
  if (!arg) return msg.reply(`${client.settings.prefix}guildedit guildname`)
  await msg.guild.edit({ name: arg })

  msg.reply('Changed guild name to `' + arg + '`')
}
