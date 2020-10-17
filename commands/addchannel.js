module.exports.aliases = ['addchannel', 'ac']

/**
 * @param {import('../classes/Client')} client
 * @param {import('discord.js').Message} msg
 */
module.exports.run = async (client, msg) => {
  if (!msg.member.hasPermission('MANAGE_CHANNELS')) {
    msg.reply('You have no permission!')
    return
  }

  const { args } = msg.query
  const channel = args.length < 1 ? 'text-channel' : args.join('-')
  const res = await msg.guild.channels.create(channel, { type: 'text' })
  msg.channel.send('Created <#' + res.id + '>')
}
