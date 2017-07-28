## quick-badge-generator [![Build Status](https://travis-ci.org/CodeDotJS/quick-badge-generator.svg?branch=master)](https://travis-ci.org/CodeDotJS/quick-badge-generator)

> A simple API to generate badges for your GitHub Projects!

## Install

```
$ npm install --save quick-badge-generator
```

## Usage

```js
'use strict';

const qbg = require('quick-badge-generator');

qbg('build', 'passing', 'green');

/*
{
  default: 'https://img.shields.io/badge/build-passing-green.svg',
  plastic: 'https://img.shields.io/badge/build-passing-green.svg?style=plastic',
  flat: 'https://img.shields.io/badge/build-passing-green.svg?style=flat',
  flatSquared: 'https://img.shields.io/badge/build-passing-green.svg?style=flat-square',
  social: 'https://img.shields.io/badge/build-passing-green.svg?style=social'
}
*/

const prop = qbg('build', 'unkown', 'red');

console.log(prop.default);

// => https://img.shields.io/badge/build-failing-red.svg

```

## API

The default parameter for __`status`__ and __`color`__ are `optional` as they are replaced by __`unknown`__ and __`lightgrey`__ respectively when the value aren't provided!


#### __`qbg('subject', 'status', 'color')`__

__`subject`__

`TYPE` `:` `string`

__`status`__

`TYPE` `:` `string`

__`color`__

`TYPE` `:` `string`

`You can only use the following colors in your badge :`
- __`brightgree`__
- __`green`__
- __`yellowgreen`__
- __`yellow`__
- __`orange`__
- __`red`__
- __`lightgrey`__
- __`blue`__

#### __`STYLES`__

`There are four styles available :`
- __`plastic`__
- __`flat`__
- __`flatSquare`__
- __`social`__

`You can exract the required style using :`
```js
const styles = qbg('build', 'passing', 'green');

console.log(styles.plastic)
// => 'https://img.shields.io/badge/build-passing-green.svg?style=plastic'
console.log(styles.flat)
// => 'https://img.shields.io/badge/build-passing-green.svg?style=flat'
console.log(styles.flatSquare)
// => 'https://img.shields.io/badge/build-passing-green.svg?style=flat-square'
console.log(styles.social)
// => 'https://img.shields.io/badge/build-passing-green.svg?style=social'
```

## Related
- __[`Quick Badge Link`](https://github.com/CodeDotJS/quick-badge-link)__ : `Generate links to pixel-perfect, retina-ready, fast, and consistent badges for your projects!`

## License
MIT &copy; [Rishi Giri](http://rishigiri.ml)

