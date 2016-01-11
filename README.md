# jsdom-global

> Enables DOM in Node.js

jsdom-global will inject `document`, `window` and other DOM API into your Node.js environment. Useful for tests.

[![Status](https://travis-ci.org/rstacruz/jsdom-global.svg?branch=master)](https://travis-ci.org/rstacruz/jsdom-global "See test builds")

## Install

Requires [jsdom][].

```
npm install --save-dev --save-exact jsdom jsdom-global
```

[jsdom]: https://github.com/tmpvar/jsdom

## Usage

Just invoke it to turn your Node.js environment into a DOM environment.

```js
var jsdom = require('jsdom-global')
jsdom()

// you can now use the DOM
document.body.innerHTML = 'hello'
```

You can also invoke it with a function block so it'll clean up afterwards.

```js
jsdom(function () {
  var $ = require('jquery')
  $('body').html('hello')
})
```

In [tape][], run it before your other tests.

```js
var test = require('tape')

// example: run your tests with `env JSDOM=1` to enable jsdom in an otherwise
// browser-only test
if (process.env.JSDOM) {
  test('jsdom', (t) => {
    require('jsdom-global')()
    t.pass('jsdom enabled')
    t.end()
  })
}
```

Or even use the tape helper, which will accomplish the same thing:

```js
var test = require('tape')
test('jsdom', require('jsdom-global/tape')())
```


[tape]: https://github.com/substack/tape

## Thanks

**jsdom-global** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/jsdom-global/contributors
