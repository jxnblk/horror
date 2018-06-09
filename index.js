const H = require('./dist/index').default
module.exports = H
module.exports.default = H
Object.keys(H).forEach(key => {
  module.exports[key] = H[key]
})
