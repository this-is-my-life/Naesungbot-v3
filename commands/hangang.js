const { MessageEmbed } = require('discord.js')
const { get } = require('superagent')

module.exports.aliases = ['한강', 'hangang']

/**
 * @param {import('../classes/Client')} client
 * @param {import('discord.js').Message} msg
 */
module.exports.run = async (_, msg) => {
  const url = 'http://hangang.dkserver.wo.tc/'
  const res = await get(url)

  if (!res.body) return msg.reply('An error has occurred. | Cannot request JSON from server.')
  const embed = new MessageEmbed()
    .setColor(0xdbe1f0)
    .setTimestamp()
    .setTitle('Temperature of Han River')
    .setURL('https://www.wpws.kr/hangang/')
    .addField('Temperature of River', JSON.parse(res.text).temp, true)
    .addField('Final confirmation time', JSON.parse(res.text).time, true)
  msg.channel.send(embed)
}
