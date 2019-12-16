const first = require('./first')
const filter = require('./filter')
const compose = require('../f/compose')

module.exports = compose(first, filter)
