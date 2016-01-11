/*
 * tape helper
 */

module.exports = function (options) {
  return function (t) {
    require('./index')(options)
    t.pass('jsdom on')
    t.end()
  }
}
