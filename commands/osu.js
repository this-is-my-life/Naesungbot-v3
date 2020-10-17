// const { MessageEmbed } = require('discord.js')
// const osu = require('node-osu')
// const api = new osu.Api(`${config.osu}`, {
//     notFoundAsError: true,
//     completeScores: false
// })
module.exports.aliases = ['osu', 'o']
// module.exports.run = (client, msg) => {
//     const username = msg.content.split(' ')
//     if (!username[0]) return msg.channel.send('Please write your osu nickname!')
//     api.getUser({ u: username }).then(user => {
//         const embed = new Discord.MessageEmbed()
//             .setThumbnail(`http://s.ppy.sh/a/${user.id}`)
//             .setColor('#D0436A')
//             .addField('Name', user.name, true)
//             .addField('PP', Math.round(user.pp.raw), true)
//             .addField('Rank', user.pp.rank, true)
//             .addField('Level', Math.round(user.level), true)
//             .addField('Nation', user.country, true)
//             .addField('Rank in Nation', user.pp.countryRank, true)
//             .addField('Play', user.counts.plays, true)
//             .addField('Accuracy', `${user.accuracyFormatted}`, true)
//             .setFooter('Request By' + msg.author.tag, msg.author.avatarURL)
//         msg.channel.send(embed)
//     })
// }
