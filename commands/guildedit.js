module.exports.aliases = ['guildedit', 'ge']

/**
 * @param {import('../classes/Client')} client
 * @param {import('discord.js').Message} msg
 */
module.exports.run = async (client, msg) => {
  if (!msg.member.hasPermission('MANAGE_GUILD')) return msg.reply('You have no permission!')
  const arg = msg.query.args.join(' ')
  if (!arg) return msg.reply(`${client.settings.prefix}guildedit guildname`)
  if (arg.length > 100) return msg.reply('so long duh\nhttps://youtu.be/OCh2l0J1uJk?t=5')
  await msg.guild.edit({ name: arg })

  msg.reply('Changed guild name to `' + arg + '`')
}
