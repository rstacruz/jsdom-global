/*
 * tape helper
 */

module.exports = function (options) {
  return function (t) {
    require('./index')(options)
    t.pass(navigator.userAgent)
    t.end()
  }
}
