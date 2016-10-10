# cordlr-clear [![NPM version](https://badge.fury.io/js/cordlr-clear.svg)](https://npmjs.org/package/cordlr-clear) [![Build Status](https://travis-ci.org/seanc/cordlr-clear.svg?branch=master)](https://travis-ci.org/seanc/cordlr-clear)

> Cordlr clear message plugin

## Installation

```sh
$ npm install --save cordlr-clear
```

Then add it to your config.

```js
{
  "plugins": [
    "cordlr-clear"
  ]
}
```

## Usage

```
clear <amount>
```

> Note - cordlr-clear relies on the MANAGE_MESSAGES permission to check whether
the bot and the command sender has permission to remove messages.

## License

MIT © [Sean Wilson](https://imsean.me)
