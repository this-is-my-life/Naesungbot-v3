module.exports.aliases = ['ping', '��']
module.exports.run = (client, msg) => {
  msg.reply(':ping_pong:' + Math.round(client.ws.ping) + 'ms')
}
