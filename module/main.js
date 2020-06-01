import { CommandCilent, Message } from 'eris';
import { Info } from './module/info';
import { moderation } from './module/moderation';
import { Translation } from './module/translation';
import { Entertainment } from './module/entertainment';
import { Music } from './module/music';
import { Search } from './module/search';
import { Core } from './module/core';
import * as blacklist from './data/blacklist.json';
import * as config from './data/config.json';


const client = new CommandCilent(config.token, {}, {
    description: "Naesungbot",
    owner: "minseo0388@daum.net",
    prefix: "n!",
});

const info = new Info(client);
const moderation = new Moderation(client);
const translation = new Translation(client);
const entertainment = new Entertainment(client);
const music = new Music(client);
const search = new Search(client);
const core = new Core(client);

// functions of info(8)
client.registerCommand('ping', (msg) => info.ping(msg));
client.registerCommand('user', (msg, args) => info.user(msg, args));
client.registerCommand('avatar', (msg, args) => info.avatar(msg, args));
client.registerCommand('channel', (msg) => info.channel(msg));
client.registerCommand('server', (msg) => info.server(msg));
client.registerCommand('role', (msg, args) => info.role(msg, args));
client.registerCommand('bot', (msg, args) => info.client(msg, args));
client.registerCommand('userlist', (msg, args) => info.userlist(msg, args));
client.registerCommand('datalist', (msg) => info.datalist(msg));

//functions of moderation(11)
client.registerCommand('admin', (msg, args) => moderation.admin(msg, args));
client.registerCommand('blacklist', (msg, args) => moderation.blacklist(msg, args));
client.registerCommand('clear', (msg, args) => moderation.clear(msg, args));
client.registerCommand('kick', (msg, args) => moderation.kick(msg, args));
client.registerCommand('ban', (msg, args) => moderation.ban(msg, args));
client.registerCommand('unban', (msg, args) => moderation.unban(msg, args));
client.registerCommand('mute', (msg, args) => moderation.mute(msg, args));
client.registerCommand('unmute', (msg, args) => moderation.unmute(msg, args));
client.registerCommand('guildedit', (msg, args) => moderation.guildedit(msg, args));
client.registerCommand('addchannel', (msg, args) => moderation.addchannel(msg, args));
client.registerCommand('invite', (msg) => moderation.invite(msg));

//functions of translation(2)
client.registerCommand('language', (msg, args) => translation.language(msg, args));
client.registerCommand('translate', (msg, args) => translation.translate(msg, args));

//function of entertainment(23)
client.registerCommand('f', (msg) => entertainment.f(msg));
client.registerCommand('dog', (msg) => entertainment.dog(msg));
client.registerCommand('cat', (msg) => entertainment.cat(msg));
client.registerCommand('coin', (msg) => entertainment.coin(msg));
client.registerCommand('dice', (msg, args) => entertainment.dice(msg, args));
client.registerCommand('percent', (msg, args) => entertainment.percent(msg, args));
client.registerCommand('choose', (msg, args) => entertainment.choose(msg, args));
client.registerCommand('say', (msg, args) => entertainment.say(msg, args));
client.registerCommand('saye', (msg, args) => entertainment.saye(msg, args));
client.registerCommand('bigtext', (msg, args) => entertainment.bigtext(msg, args));
client.registerCommand('bigtextonly', (msg, args) => entertainment.bigtextonly(msg, args));
client.registerCommand('cloud', (msg, args) => entertainment.cloud(msg, args));
client.registerCommand('animal', (msg, args) => entertainment.animal(msg, args));
client.registerCommand('sad', (msg, args) => entertainment.sad(msg, args));
client.registerCommand('joy', (msg, args) => entertainment.joy(msg, args));
client.registerCommand('face', (msg, args) => entertainment.face(msg, args));
client.registerCommand('funtext', (msg, args) => entertainment.funtext(msg, args));
client.registerCommand('dontknow', (msg) => entertainment.dontknow(msg));
client.registerCommand('password', (msg) => entertainment.password(msg));
client.registerCommand('weather', (msg, args) => entertainment.weather(msg, args));
client.registerCommand('hex', (msg, args) => entertainment.hex(msg, args));
client.registerCommand('minecraft', (msg, args) => entertainment.minecraft(msg, args));
client.registerCommand('osu', (msg, args) => entertainment.osu(msg, args));

//function of music(3)
client.registerCommand('play', (msg, args) => music.play(msg, args));
client.registerCommand('skip', (msg, args) => music.skip(msg, args));
client.registerCommand('stop', (msg, args) => music.stop(msg, args));

//function of search(6)
client.registerCommand('google', (msg, args) => search.google(msg, args));
client.registerCommand('naver', (msg, args) => search.naver(msg, args));
client.registerCommand('daum', (msg, args) => search.daum(msg, args));
client.registerCommand('twitch', (msg, args) => search.twitch(msg, args));
client.registerCommand('nate', (msg, args) => search.nate(msg, args));
client.registerCommand('youtube', (msg, args) => search.youtube(msg, args));

//functions of core(1)
client.registerCommand('help', (msg, args) => core.help(msg, args));

client.connect();

// version 3.0.1
// Line 1~101 written by minseo0388 edited Line 2~8 start by yky4589
// 