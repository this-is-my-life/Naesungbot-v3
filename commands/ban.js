const Discord = require('discord.js')
module.exports.aliases = ['ban', 'b']
module.exports.run = (client, msg) => {
    const args = msg.content.split(' ')
    if (!msg.member.hasPermission('BAN_MEMBERS')) {
        msg.reply('You have no permission!')
        return
    }
    if (args[0] === 'help') {
        msg.reply(`: ${config.prefix}n!ban @mention reason`)
        return
    }
    const bUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]))
    if (!bUser) return msg.channel.send('Error')
    if (bUser.id === client.user.id) return msg.send('Error')
    const bReason = args.join(' ').slice(2)
    if (!bReason) return msg.channel.send('Error')
    const banEmbed = new MessageEmbed()
        .setDescription('ban')
        .setColor(`${config.color}`)
        .addField('Ban User', `${bUser}, ID: ${bUser.id}`)
        .addField('Banned User', `<@${msg.author.id}>, ID: ${msg.author.id}`)
        .addField('Banned Channel', msg.channel)
        .addField('Time', msg.createdAt)
        .addField('Reason', bReason)
    msg.reply(bUser.tag)
    msg.guild.members.ban(bUser)
    msg.channel.send(banEmbed)
}