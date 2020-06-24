const { MessageEmbed } = require('discord.js')
module.exports.aliases = ['uptime', 'u']
module.exports.run = (client, msg) => {
    function parse(a) {
        a = Number(a.toString().split('.')[0]);
        let day = Math.floor(a / 86400);
        a -= day * 86400;
        let hour = Math.floor(a / 3600);
        a -= hour * 3600;
        let minute = Math.floor(a / 60);
        a -= minute * 60;
        let second = a;
        return day + "d " + hour + "h " + minute + "m " + second + "s";
    }
    msg.channel.send(parse(process.uptime()));
}
