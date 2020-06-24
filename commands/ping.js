module.exports.aliases = ['ping', 'гн']
module.exports.run = (client, msg) => {
    msg.reply(":ping_pong:" + Math.round(client.ping) + "ms")
}
