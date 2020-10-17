const { Client } = require('discord.js')
const { resolve: path } = require('path')
const { existsSync: exists, readdir } = require('fs')

class mClient extends Client {
  constructor () {
    super()
    this.settings = { exist: exists(path() + '/settings.json') }
    if (this.settings.exist) this.settings = require(path() + '/settings.json')
    else this.settings = { token: process.env.naesungToken, prefix: process.env.naesungPrefix }

    if (!this.settings.prefix) this.settings.prefix = 'n>'

    this.login(this.settings.token)

    const cmdRoot = path() + '/commands/'
    this.commands = []
    readdir(cmdRoot, (err, files) => {
      if (err) console.log(err)
      files.forEach((f) => {
        f = f.replace('.js', '')
        f = require(cmdRoot + f)
        this.commands.push(f)
      })
    })
  }

  regEvent (type, cb) {
    // eslint-disable-next-line standard/no-callback-literal
    this.on(type, (...args) => cb(this, ...args))
  }
}

module.exports = mClient
