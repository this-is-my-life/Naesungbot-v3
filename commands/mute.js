module.exports.aliases = ['mute', 'm']
module.exports.run = (client, msg) => {
  const args = msg.content.split(' ')
  const tomute = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]))
  if (!tomute) return msg.reply('Cannot find a user.')
  if (tomute.hasPermission('MANAGE_MESSAGES')) return msg.reply('You have no permission!')
  let muterole = msg.guild.roles.cache.find('name', 'muted')
  if (!muterole) {
    muterole = msg.guild.createRole({
      name: 'muted',
      color: '#000000',
      permissions: []
    })
    msg.guild.channels.cache.forEach(async (channel) => {
      channel.overwritePermissions(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      })
    })
  }
  tomute.addRole(muterole.id)
  msg.reply(`Muted <@${tomute.id}>`)
}
