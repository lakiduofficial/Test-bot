const fs = require('fs'),
  path = require('path'),
  { readEnv } = require('../lib/database'),
  { cmd } = require('../command')
cmd(
  { on: 'body' },
  async (
    _0x44327e,
    _0x32b984,
    _0x35f053,
    { from: _0x29bd78, body: _0x2fd8d0, isOwner: _0xdbd3c }
  ) => {
    const _0x8b9e1a = path.join(__dirname, '../media/autovoice.json'),
      _0x33ae51 = JSON.parse(fs.readFileSync(_0x8b9e1a, 'utf8'))
    for (const _0x416e78 in _0x33ae51) {
      if (_0x2fd8d0.toLowerCase() === _0x416e78.toLowerCase()) {
        const _0x356400 = await readEnv()
        if (_0x356400.AUTO_VOICE === 'true') {
          if (_0xdbd3c) {
            return
          }
          await _0x44327e.sendPresenceUpdate('recording', _0x29bd78)
          await _0x44327e.sendMessage(
            _0x29bd78,
            {
              audio: { url: _0x33ae51[_0x416e78] },
              mimetype: 'audio/mpeg',
              ptt: true,
            },
            { quoted: _0x32b984 }
          )
        }
      }
    }
  }
)
cmd(
  { on: 'body' },
  async (
    _0x4aec87,
    _0x4eaf11,
    _0x103afb,
    { from: _0x3a0f80, body: _0x4eee19, isOwner: _0x4ad54f }
  ) => {
    const _0xcb1f2c = path.join(__dirname, '../media/autoimage.json'),
      _0x197193 = JSON.parse(fs.readFileSync(_0xcb1f2c, 'utf8'))
    for (const _0x521bd7 in _0x197193) {
      if (_0x4eee19.toLowerCase() === _0x521bd7.toLowerCase()) {
        const _0x5287a7 = await readEnv()
        if (_0x5287a7.AUTO_IMAGE === 'true') {
          if (_0x4ad54f) {
            return
          }
          await _0x4aec87.sendMessage(
            _0x3a0f80,
            {
              image: { url: _0x197193[_0x521bd7] },
              mimetype: 'image/jpeg',
            },
            { quoted: _0x4eaf11 }
          )
        }
      }
    }
  }
)
cmd(
  { on: 'body' },
  async (
    _0x4b1cfb,
    _0x17f3e0,
    _0xa74d5b,
    { from: _0x4a3092, body: _0x3c88d4, isOwner: _0x8c54d9 }
  ) => {
    const _0x50a66 = path.join(__dirname, '../media/autovideo.json'),
      _0x18570a = JSON.parse(fs.readFileSync(_0x50a66, 'utf8'))
    for (const _0x15353f in _0x18570a) {
      if (_0x3c88d4.toLowerCase() === _0x15353f.toLowerCase()) {
        const _0xd188a4 = await readEnv()
        if (_0xd188a4.AUTO_VIDEO === 'true') {
          if (_0x8c54d9) {
            return
          }
          await _0x4b1cfb.sendMessage(
            _0x4a3092,
            {
              video: { url: _0x18570a[_0x15353f] },
              mimetype: 'video/mp4',
            },
            { quoted: _0x17f3e0 }
          )
        }
      }
    }
  }
)
cmd(
  { on: 'body' },
  async (
    _0x31027a,
    _0x261303,
    _0x335096,
    { from: _0x11cece, body: _0x4ccf9c, isOwner: _0x1ed9d4 }
  ) => {
    const _0x2d45e2 = path.join(__dirname, '../media/autosticker.json'),
      _0x3c1dac = JSON.parse(fs.readFileSync(_0x2d45e2, 'utf8'))
    for (const _0x4d473e in _0x3c1dac) {
      if (_0x4ccf9c.toLowerCase() === _0x4d473e.toLowerCase()) {
        const _0x548dc3 = await readEnv()
        if (_0x548dc3.AUTO_STICKER === 'true') {
          if (_0x1ed9d4) {
            return
          }
          await _0x31027a.sendMessage(
            _0x11cece,
            {
              sticker: { url: _0x3c1dac[_0x4d473e] },
              package: 'DilaMD',
            },
            { quoted: _0x261303 }
          )
        }
      }
    }
  }
)
cmd(
  { on: 'body' },
  async (
    _0x48d311,
    _0x322f25,
    _0x992f71,
    { from: _0x359d73, body: _0x562c51, isOwner: _0x1ad48f }
  ) => {
    const _0x18ac4a = path.join(__dirname, '../media/autoreply.json'),
      _0x2dfc03 = JSON.parse(fs.readFileSync(_0x18ac4a, 'utf8'))
    for (const _0x4f2009 in _0x2dfc03) {
      if (_0x562c51.toLowerCase() === _0x4f2009.toLowerCase()) {
        const _0x298bbd = await readEnv()
        if (_0x298bbd.AUTO_REPLY === 'true') {
          if (_0x1ad48f) {
            return
          }
          await _0x992f71.reply(_0x2dfc03[_0x4f2009])
        }
      }
    }
  }
)
