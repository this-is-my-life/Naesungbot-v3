const { CommandClient, Message } = require('eris');
const config = require('./data/config.json');
const error = require('./data/error.json');

export class Translation {
    client;
    constructor(client) {
        this.client = client;
    }
}