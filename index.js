/*
 * enables jsdom globally.
 */

var html = '<!doctype html><html><head><meta charset="utf-8">' +
  '</head><body></body></html>'

var blacklist = [
  'ArrayBuffer', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray',
  'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array',
  'Float64Array', 'toString', 'constructor', 'console', 'setTimeout',
  'clearTimeout', 'setInterval', 'clearInterval' ]

module.exports = function globalJsdom (func) {
  if (typeof func === 'function') {
    try {
      var cleanup = globalize()
      return func()
    } finally {
      cleanup()
    }
  } else {
    return globalize()
  }
}

function globalize () {
  // Idempotency
  if (global.navigator &&
    global.navigator.userAgent &&
    global.navigator.userAgent.indexOf('Node.js') > -1 &&
    global.document &&
    typeof global.document.destroy === 'function') {
    return global.document.destroy
  }

  var jsdom = require('jsdom')
  var document = jsdom.jsdom(html)
  var window = document.defaultView
  var keys = []

  Object.keys(window).forEach(function (key) {
    if (blacklist.indexOf(key) !== -1) return
    keys.push(key)
    global[key] = window[key]
  })

  global.document = document
  global.window = window
  window.console = global.console
  document.destroy = cleanup

  function cleanup () {
    keys.forEach(function (key) { delete global[key] })
  }

  return cleanup
}
