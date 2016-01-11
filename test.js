var test = require('tape')

test('jsdom', require('./tape')())

test('dom', function (t) {
  var div = document.createElement('div')
  div.innerHTML = 'hello'
  document.body.appendChild(div)
  t.equal(document.querySelector('body').innerHTML, '<div>hello</div>', 'dom works')
  t.end()
})
