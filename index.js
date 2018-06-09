const H = require('./dist/index').default
const tags = require('html-tags')
const cap = require('./dist/cap').default
module.exports = H
tags.forEach(key => {
  module.exports[cap(key)] = H[cap(key)]
})
