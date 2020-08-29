const { MessageEmbed } = require('discord.js')
module.exports.aliases = ['addchannel', 'ac']
module.exports.run = (client, msg) => {
    if (!msg.member.hasPermission('MANAGE_CHANNELS')) {
        msg.reply('You have no permission!')
        return
    }
    const channel = stringhandler.argsParse('채널 추가', command)[0]
    msg.guild.channels.create(channel, 'text')
        .then(console.log)
        .catch(console.error)
}