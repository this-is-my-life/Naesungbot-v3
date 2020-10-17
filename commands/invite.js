module.exports.aliases = ['invite', 'i']

/**
 * @param {import('../classes/Client')} client
 * @param {import('discord.js').Message} msg
 */
module.exports.run = async (_, msg) => {
  if (!msg.member.hasPermission('CREATE_INSTANT_INVITE')) return msg.reply('You have no permission!')
  const invite = await msg.channel.createInvite()
  msg.channel.send(`discord.gg/${invite.code}`)
}
