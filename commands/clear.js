module.exports.aliases = ['clear', 'c']
module.exports.run = (client, msg) => {
  const args = msg.content.split(' ')
  if (!args[0]) return msg.reply('Please write a number.')
  msg.channel.bulkDelete(Number(args[0]) + 1).then(() => {
    msg.reply(`Deleted ${args[0]} messages.`)
  })
}
