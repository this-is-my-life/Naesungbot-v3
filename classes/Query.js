class Query {
  constructor (content, prefix) {
    this.content = content
    this.splted = this.content.split(' ')
    this.cmd = this.content.split(' ')[0].split(prefix)[1]
    this.args = this.splted.slice(1)
  }
}

module.exports = Query
