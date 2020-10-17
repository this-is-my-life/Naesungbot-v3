module.exports.aliases = ['invite', 'i']
module.exports.run = (client, msg) => {
  if (!msg.member.hasPermission('CREATE_INSTANT_INVITE')) {
    msg.reply('You have no permission!')
    return
  }
  msg.channel.createInvite()
    .then(invite => msg.channel.send(`discord.gg/${invite.code}`))
    .catch(console.error)
}
