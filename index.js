const Client = require('./classes/Client')
const onReady = require('./events/onReady')
const onMessage = require('./events/onMessage')

const client = new Client()

client.regEvent('ready', onReady)
client.regEvent('message', onMessage)
