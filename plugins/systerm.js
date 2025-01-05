const config = require('../config'),
  { cmd, commands } = require('../command'),
  os = require('os'),
  { runtime } = require('../lib/functions')
cmd(
  {
    pattern: 'system',
    react: '\u2699️',
    alias: ['uptime', 'status', 'runtime'],
    desc: 'cheack uptime',
    category: 'main',
    filename: __filename,
  },
  async (
    _0x366d0d,
    _0x6d919e,
    _0x218000,
    {
      from: _0x119211,
      quoted: _0x157bac,
      body: _0x399e2d,
      isCmd: _0x37b0e2,
      command: _0x22be62,
      args: _0x3477d7,
      q: _0x3e508e,
      isGroup: _0x5137eb,
      sender: _0x366dfc,
      senderNumber: _0x43677b,
      botNumber2: _0x300c2f,
      botNumber: _0x50478b,
      pushname: _0x20d7a0,
      isMe: _0x2821a4,
      isOwner: _0x10a65a,
      groupMetadata: _0x25aea3,
      groupName: _0x15766f,
      participants: _0x364947,
      groupAdmins: _0x5775e2,
      isBotAdmins: _0x450566,
      isAdmins: _0x51a878,
      reply: _0x34d506,
    }
  ) => {
    try {
      let _0x9503f8 =
        '*\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u265B\xB0\u2022\u2741\u272E \u2550\u2550\u2550\u2550\u2550\u2550\u2557*\n*QUEEN-ISHU-MD-SYSTERM*\n\n*_UPTIME:\u27A0_*  ' +
        runtime(process.uptime()) +
        '\n\n*_RAM USAGE:\u27A0_* ' +
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
        'MB / ' +
        Math.round(require('os').totalmem / 1024 / 1024) +
        'MB\n\n*_HOSTNAME:\u27A0_* ' +
        os.hostname() +
        '\n\n*_OWNER:\u27A0_* *LAKSIDU NIMSARA*\n*\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u2740\xB0\u2022\u2741\u272E\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D*\n'
      await _0x366d0d.sendMessage(
        _0x119211,
        {
          image: { url: config.ALIVE_IMG },
          caption: '' + _0x9503f8,
        },
        { quoted: _0x6d919e }
      )
    } catch (_0x3c2d4e) {
      console.log(_0x3c2d4e)
      _0x34d506('' + _0x3c2d4e)
    }
  }
)
