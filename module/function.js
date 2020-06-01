import { CommandClient, Message } from '../main';
import * as config from './data/config.json';
import * as blacklist from './data/blacklist.json';
import * as error from './data/error.json';
import * as translate from '@vitalets/google-translate-api'; 
import * as request from 'request';

let list;
const refresh = () => {
    try {
        delete require.cache[require.resolve('./data/blacklist.json')];
    } catch (e) {

    }
    try {
        list = require('./data/blacklist.json');
    } catch (e) {
        list = [];
    }
    return list;
};

exports.get = () => refresh();


const save = () => {
    filehandler.saveFile('blacklist.json', JSON.stringify(list));
};

exports.add = (id) => {
    refresh();
    list.push(Number(id));
    console.log(list);
    save();
};

exports.remove = (id) => {
    refresh();
    id = Number(id);
    if (list.includes(id)) {
        list = list.filter(guessNotBlackList => guessNotBlackList !== id);
        save();
        return true;
    } else {
        return false;
    }
};

exports.check = function (id) {
    refresh();
    list.includes(Number(id));
};

function checkUser(msg) {
    if (blacklist.check((msg.author.id))) {
        channel.createMessage(error.blacklist);
        return true;
    } else {
        return false;
    }
}

// Line 8~61 imported from blacklist.js of Betweenbot
// 'DPS0340' Assigned Using Source At 27, January, 2020
// DPS0340 Profile Link https://github.com/DPS0340

// Links
// https://discordapp.com/channels/@me/632458119007436810/682265483688411142
// https://discordapp.com/channels/@me/632458119007436810/682265517339443339
// https://discordapp.com/channels/@me/632458119007436810/682265523404275766
// https://discordapp.com/channels/@me/632458119007436810/682265541628788767 

// Profile Links
// Naesung https://github.com/Naesung, In Yongin High School Sophomore(2020)
// https://mynslab.net
// Y https://github.com/yky4589, In Pusan National University Sophomore(2020)

// Dongnae-gu, Busan Metropolitan City, Republic of Korea
// We are always welcome for issues and pull requests except spamming. 