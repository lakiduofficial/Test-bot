const config = require('../config'),
  { cmd, commands } = require('../command'),
  { fetchJson } = require('../lib/functions')
cmd(
  {
    pattern: 'ai',
    alias: ['gpt', 'bot'],
    react: '\uD83D\uDCD1',
    desc: 'ai chat.',
    category: 'main',
    filename: __filename,
  },
  async (
    _0x20d0e8,
    _0x5e9135,
    _0x3621d0,
    {
      from: _0x11399c,
      quoted: _0x3e32aa,
      body: _0x8b4c2c,
      isCmd: _0x17e208,
      command: _0x464ff6,
      args: _0x357365,
      q: _0x3674e9,
      isGroup: _0xbff272,
      sender: _0x49172f,
      senderNumber: _0x328d4d,
      botNumber2: _0x49465d,
      botNumber: _0x1f8bcd,
      pushname: _0x44164b,
      isMe: _0x347871,
      isOwner: _0x213870,
      groupMetadata: _0x2d0a13,
      groupName: _0x40ec44,
      participants: _0x227521,
      groupAdmins: _0x55ef16,
      isBotAdmins: _0x29cacc,
      isAdmins: _0x11db7a,
      reply: _0x548abc,
    }
  ) => {
    try {
      let _0x1388a1 = await fetchJson(
        'https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}' + _0x3674e9
      )
      return _0x548abc(
        _0x1388a1.data + '\n\n> QUEEN ISHU MD\n\n*CREATE BY LAKSIDU NIMSARA*'
      )
    } catch (_0x3eafbf) {
      console.log(_0x3eafbf)
      _0x548abc('' + _0x3eafbf)
    }
  }
)
