const config = require('../config'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'mute',
    alias: ['lock'],
    react: '\uD83D\uDD12',
    desc: 'mute group.',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x2bf82a,
    _0xfc2f45,
    _0x48716c,
    {
      from: _0x22d4d4,
      l: _0x26335c,
      quoted: _0x4232b8,
      body: _0xaa7849,
      isCmd: _0x2c2a9b,
      command: _0x594229,
      args: _0xc25293,
      q: _0x2a5aea,
      isGroup: _0x2cda2c,
      sender: _0x1cca68,
      senderNumber: _0x134b9d,
      botNumber2: _0x303bf5,
      botNumber: _0x4d9db4,
      pushname: _0x414c03,
      isMe: _0x35169d,
      isOwner: _0x5c6153,
      groupMetadata: _0x537045,
      groupName: _0x51e3d5,
      participants: _0x416284,
      isItzcp: _0x673e08,
      groupAdmins: _0x548b32,
      isBotAdmins: _0x4a686c,
      isAdmins: _0x400f4f,
      reply: _0x5a4010,
    }
  ) => {
    try {
      if (!_0x5c6153 || !_0x400f4f) {
        return
      }
      if (!_0x48716c.isGroup) {
        return _0x5a4010(mg.onlygroup)
      }
      if (!_0x4a686c) {
        return _0x5a4010(mg.needbotadmins)
      }
      await _0x2bf82a.groupSettingUpdate(_0x48716c.chat, 'announcement')
      const _0xa93c4f = await _0x2bf82a.sendMessage(
        _0x48716c.chat,
        { text: '*𝐆𝐑𝐎𝐔𝐏 𝐂𝐇𝐀𝐓 𝐌𝐔𝐓𝐄𝐃 𝐁𝐘 𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃* \uD83D\uDD12' },
        { quoted: _0xfc2f45 }
      )
      return await _0x2bf82a.sendMessage(_0x48716c.chat, {
        react: {
          text: '\uD83D\uDD12',
          key: _0xa93c4f.key,
        },
      })
    } catch (_0x9e0ebf) {
      console.log(_0x9e0ebf)
      _0x5a4010('*PLEASE GIVE ME A ADDMIN \u2757*')
    }
  }
)
cmd(
  {
    pattern: 'unmute',
    alias: ['unlock'],
    react: '\uD83D\uDD13',
    desc: 'unmute group.',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x2bd4ed,
    _0x12774b,
    _0x346e8c,
    {
      from: _0x25f8d1,
      l: _0x2091f7,
      quoted: _0xfde9f7,
      body: _0x3a4403,
      isCmd: _0x20c9b1,
      command: _0x1c9987,
      args: _0x528c84,
      q: _0x3cbeb7,
      isGroup: _0x400c76,
      sender: _0x37d273,
      senderNumber: _0x194b1f,
      botNumber2: _0x5acedc,
      botNumber: _0x22a45b,
      pushname: _0x122d02,
      isMe: _0x2870e3,
      isOwner: _0x4323e9,
      groupMetadata: _0x10b5e8,
      groupName: _0x189f9a,
      participants: _0x103820,
      isItzcp: _0x316d92,
      groupAdmins: _0x6045c7,
      isBotAdmins: _0x2c8d9a,
      isAdmins: _0x4d606e,
      reply: _0x2289d1,
    }
  ) => {
    try {
      if (!_0x4323e9 || !_0x4d606e) {
        return
      }
      if (!_0x346e8c.isGroup) {
        return _0x2289d1(mg.onlygroup)
      }
      if (!_0x2c8d9a) {
        return _0x2289d1(mg.needbotadmins)
      }
      await _0x2bd4ed.groupSettingUpdate(_0x346e8c.chat, 'not_announcement')
      const _0x2dcc74 = await _0x2bd4ed.sendMessage(
        _0x346e8c.chat,
        { text: '*𝐆𝐑𝐎𝐔𝐏 𝐂𝐇𝐀𝐓 𝐔𝐌𝐔𝐓𝐄𝐃 𝐁𝐘 𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃* \uD83D\uDD12' },
        { quoted: _0x12774b }
      )
      return await _0x2bd4ed.sendMessage(_0x346e8c.chat, {
        react: {
          text: '\uD83D\uDD12',
          key: _0x2dcc74.key,
        },
      })
    } catch (_0x14c724) {
      console.log(_0x14c724)
      _0x2289d1('*PLEASE GIVE ME A ADDMIN \u2757*')
    }
  }
)
