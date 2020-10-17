module.exports.aliases = ['uptime', 'u']
module.exports.run = (client, msg) => {
  function parse (a) {
    a = Number(a.toString().split('.')[0])
    const day = Math.floor(a / 86400)
    a -= day * 86400
    const hour = Math.floor(a / 3600)
    a -= hour * 3600
    const minute = Math.floor(a / 60)
    a -= minute * 60
    const second = a
    return day + 'd ' + hour + 'h ' + minute + 'm ' + second + 's'
  }
  msg.channel.send(parse(process.uptime()))
}
