const { MessageEmbed } = require('discord.js')
const request = require('request')
module.exports.aliases = ['ÇÑ°­', 'hangang']
module.exports.run = (client, msg) => {
    const url = 'http://hangang.dkserver.wo.tc/'
    request(url, function (err, response, body) {
        if (err) {
            return msg.reply('An error has occurred. | Cannot request JSON from server.')
        }
        body = JSON.parse(body)
        if (body.result) {
            if (body.temp && body.time) {
                const embed = new MessageEmbed()
                    .setColor(`#dbe1f0`)
                    .setTimestamp()
                    .setTitle('Temperature of Han River')
                    .setURL('https://www.wpws.kr/hangang/')
                    .addField('Temperature of River', body.temp, true)
                    .addField('Final confirmation time', body.time, true)
                msg.channel.send(embed)
            }
        }
    })
}