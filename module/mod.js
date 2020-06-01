const { CommandClient, Message } = require('eris');
const config = require('./data/config.json');
const error = require('./data/error.json');

export class Chat {
    client;
    constructor(client) {
        this.client = client;
    }
    //동탄가고싶어ㅓㅓㅓ //읭