// const { MessageEmbed } = require('discord.js')
// const request = require('request')
module.exports.aliases = ['minecraft', 'mc']
// module.exports.run = (client, msg) => {
//   const args = msg.content.split(' ')
//   if (!args[0]) return msg.channel.send('Please type a nickname!')
//   const url = 'https://api.mojang.com/users/profiles/minecraft/' + `${name}`
//   request(url, function (err, response, body) {
//     if (err) {
//       return msg.reply('Error Occured.')
//     }
//     body = JSON.parse(body)
//     if (body.id && body.name) {
//       const url1 = `https://visage.surgeplay.com/full/512/${body.id}`
//       const url2 = `https://visage.surgeplay.com/head/512/${body.id}`
//       const url3 = `https://visage.surgeplay.com/face/512/${body.id}`
//       const embed = new MessageEmbed()
//         .setColor('#18B4E9')
//         .setTimestamp()
//         .setAuthor(`${msg.author.username}`, url3)
//         .setTitle(`Minecraft account information about ${body.name}`)
//         .addField('Name', body.name, true)
//         .addField('UUID', body.id, true)
//         .setThumbnail(url2)
//         .setImage(url1)
//       msg.channel.send(embed)
//     } else {
//       msg.channel.send('��ũ�г����� �����ϴ�')
//     }
//   })
// }
