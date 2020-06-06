const Query = require('../classes/Query')

module.exports = (client, msg) => {
  if (msg.author.bot) return
  if (!msg.content.startsWith(client.settings.prefix)) return

  const query = new Query(msg.content, client.settings.prefix)
  const target = client.commands.find((c) => c.aliases.includes(query.cmd))
  if (target) target.run(client, msg)
}

