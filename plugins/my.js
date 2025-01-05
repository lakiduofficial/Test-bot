const config = require('../config'),
  fs = require('fs'),
  path = require('path'),
  { cmd, commands } = require('../command')
cmd(
  { on: 'body' },
  async (
    _0x29be11,
    _0x31ba43,
    _0x12aa1b,
    { from: _0x504c8e, body: _0x44a601, isOwner: _0x3cbb57 }
  ) => {
    const _0xb10672 = path.join(__dirname, '../media/pussy.json'),
      _0xd36763 = JSON.parse(fs.readFileSync(_0xb10672, 'utf8'))
    for (const _0x3567a6 in _0xd36763) {
      _0x44a601.toLowerCase() === _0x3567a6.toLowerCase() &&
        config.AUTO_VOICE === 'true' &&
          (await _0x29be11.sendMessage(
            _0x504c8e,
            {
              image: { url: _0xd36763[_0x3567a6] },
              caption: '> CRATED BY ALFHA TEAM',
            },
            { quoted: _0x31ba43 }
          ))
    }
  }
)
cmd(
  { on: 'body' },
  async (
    _0x513f16,
    _0x27c517,
    _0xc96c94,
    { from: _0x1f3fdc, body: _0x4cf98b, isOwner: _0x2ff77d }
  ) => {
    const _0x441111 = path.join(__dirname, '../media/blowjob.json'),
      _0x5c9d54 = JSON.parse(fs.readFileSync(_0x441111, 'utf8'))
    for (const _0x460040 in _0x5c9d54) {
      _0x4cf98b.toLowerCase() === _0x460040.toLowerCase() &&
        config.AUTO_VOICE === 'true' &&
          (await _0x513f16.sendMessage(
            _0x1f3fdc,
            {
              image: { url: _0x5c9d54[_0x460040] },
              caption: '> CREATE BY ALFHA TEARM',
            },
            { quoted: _0x27c517 }
          ))
    }
  }
)
