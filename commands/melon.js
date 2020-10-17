const { MessageEmbed } = require('discord.js')
const melon = require('melon-chart-api')
module.exports.aliases = ['melon']
module.exports.run = (client, msg) => {
  let now = new Date()
  const embed = new MessageEmbed()
  now = (now.getMonth + 1) + '/' + now.getDate() + '/' + now.getFullYear
  melon(now, { cutLine: 1 }).daily().then(res => {
    res.data.forEach(item => {
      const res1 = item.rank + ''
      const res6 = item.title + ' - ' + item.artist
      embed.addField(res1, res6, true)
    })
    msg.channel.send(embed)
  })
}
