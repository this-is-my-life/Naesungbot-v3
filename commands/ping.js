module.exports.aliases = ['ping', 'гн']
module.exports.run = (client, msg) => {
  msg.channel.send('pong')
}
