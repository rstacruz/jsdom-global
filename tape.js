/*
 * tape helper
 */

module.exports = function (options) {
  return function (t) {
    require('./index')()
    t.pass('jsdom on')
    t.end()
  }
}
