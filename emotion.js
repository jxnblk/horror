const H = require('./dist/emotion').default
module.exports = H
module.exports.default = H
Object.keys(H).forEach(key => {
  module.exports[key] = H[key]
})
