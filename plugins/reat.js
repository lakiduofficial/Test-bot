const fs = require('fs'),
  path = require('path'),
  { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command'),
  { fetchJson } = require('../lib/functions'),
  emoji = require('node-emoji')
cmd(
  { on: 'body' },
  async (
    _0x5f3ed2,
    _0x59d78c,
    _0x72d2d6,
    { from: _0x20c1ef, body: _0x233256, isOwner: _0x2febcd }
  ) => {
    try {
      const _0x1ffcc9 = await readEnv()
      if (_0x1ffcc9.AUTO_REACT === 'true') {
        const _0x1bd316 = _0x233256.match(
          /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu
        )
        if (_0x1bd316 && _0x1bd316.length > 0) {
          await _0x72d2d6.react(_0x1bd316[0])
        } else {
          const _0x57ce82 = emoji.random().emoji
          await _0x72d2d6.react(_0x57ce82)
        }
      }
    } catch (_0x494a60) {
      console.log(_0x494a60)
      await _0x72d2d6.reply('Error: ' + _0x494a60.message)
    }
  }
)
