const { MessageEmbed } = require('discord.js')
module.exports.aliases = ['randomcolor', 'cr']
module.exports.run = (client, msg) => {
  const color = ((1 << 24) * Math.random() | 0).toString(16)
  const embed = new MessageEmbed()
    .setTitle(`#${color}`)
    .setColor(`#${color}`)
  msg.channel.send({ embed: embed })
}
