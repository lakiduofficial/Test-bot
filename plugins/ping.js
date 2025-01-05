const config = require('../config')
let fs = require('fs')
const os = require('os'),
  { cmd, commands } = require('../command'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions')
cmd(
  {
    pattern: 'ping',
    react: '\uD83D\uDC40',
    alias: ['speed'],
    desc: "Check bot's ping",
    category: 'main',
    use: '.ping',
    filename: __filename,
  },
  async (
    _0x22fc84,
    _0x4feb4c,
    _0x150327,
    {
      from: _0x285bb9,
      l: _0x4b593b,
      quoted: _0x1a97cb,
      body: _0x446750,
      isCmd: _0x56c500,
      command: _0x7e02fe,
      args: _0x1b71ce,
      q: _0x4f2a27,
      isGroup: _0x180550,
      sender: _0x2c28bc,
      senderNumber: _0x2f9220,
      botNumber2: _0x31e8df,
      botNumber: _0x57a27b,
      pushname: _0x2310ed,
      isMe: _0x277c16,
      isOwner: _0x5c62d9,
      groupMetadata: _0x482ff8,
      groupName: _0x12fe00,
      participants: _0x1304e5,
      groupAdmins: _0x463798,
      isBotAdmins: _0x2e8f13,
      isAdmins: _0x4cf1b1,
      reply: _0x61df1c,
    }
  ) => {
    try {
      var _0xc5995c = new Date().getTime()
      let _0x390a17 = await _0x22fc84.sendMessage(
        _0x285bb9,
        { text: '*QUEEN-ISHU-MD-SPEED*' },
        { quoted: _0x4feb4c }
      )
      var _0x167199 = new Date().getTime()
      return (
        await _0x22fc84.sendMessage(_0x285bb9, { delete: _0x390a17.key }),
        await _0x22fc84.sendMessage(
          _0x285bb9,
          {
            text: '*\uD83D\uDC40Pong*\n *' + (_0x167199 - _0xc5995c) + ' ms* ',
          },
          { quoted: _0x4feb4c }
        )
      )
    } catch (_0xadee36) {
      _0x61df1c('*Error !!*')
      _0x4b593b(_0xadee36)
    }
  }
)
