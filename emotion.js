const tags = require('html-tags')
const H = require('./dist/emotion').default
const cap = require('./dist/cap').default
module.exports = H
tags.forEach(key => {
  module.exports[cap(key)] = H[cap(key)]
})
