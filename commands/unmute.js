const { MessageEmbed } = require('discord.js')
module.exports.aliases = ['unmute', 'um']
module.exports.run = (client, msg) => {
    const args = stringhandler.argsParse('unmute', 'command')
    const tomute = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]))
    if (!tomute) return msg.reply('유저를 찾을 수 없습니다')
    if (tomute.hasPermission('MANAGE_MESSAGES')) return msg.reply('You have no permission!')
    const muterole = msg.guild.roles.cache.find('name', 'muted')
    tomute.removeRole(muterole.id)
    msg.reply(`<@${tomute.id}> 을 언뮤트 했습니다`)
}