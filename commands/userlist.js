// const admin = require('../admin')
module.exports.aliases = ['userinfo', 'iu']
// module.exports.run = (client, msg) => {
//   if (admin.check(msg.author.id)) {
//     const guildList = new Map()
//     client.guilds.cache.forEach(guild => {
//       const guildToStore = new Map()
//       guild.members.cache.forEach(member => {
//         guildToStore.set(member.displayName, member.id)
//       })
//       console.log(guildToStore)
//       guildList.set(guild.name, JSON.stringify([...guildToStore]))
//     })
//     filehandler.saveFile('users.json', JSON.stringify([...guildList]))
//   } else {
//     msg.reply('You have no permission!')
//   }
// }
