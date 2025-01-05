const config = require('../config'),
  { cmd, commands } = require('../command'),
  os = require('os'),
  { runtime } = require('../lib/functions')
cmd(
  {
    pattern: 'system',
    alias: ['status', 'bot'],
    desc: 'Check bot online or no.',
    category: 'main',
    react: '\uD83D\uDCDF',
    filename: __filename,
  },
  async (
    _0x1b29c9,
    _0x53935e,
    _0x2b4a68,
    {
      from: _0x4b6529,
      quoted: _0x24c216,
      body: _0x42d996,
      isCmd: _0x4960ce,
      command: _0x25c3b2,
      args: _0x2f14aa,
      q: _0x55f11b,
      isGroup: _0x4b3bb4,
      sender: _0x3d2619,
      senderNumber: _0x594e71,
      botNumber2: _0x39abab,
      botNumber: _0x3a4f8e,
      pushname: _0x4cc0af,
      isMe: _0xb35f45,
      isOwner: _0x43f9dc,
      groupMetadata: _0x1102ad,
      groupName: _0x3cb056,
      participants: _0x350f7a,
      groupAdmins: _0xdf4e47,
      isBotAdmins: _0x140ccc,
      isAdmins: _0x1ada3c,
      reply: _0x5e1c67,
    }
  ) => {
    try {
      let _0x10e6b9 =
        '\n====================\n_*\uD83D\uDC9C \uD835\uDC10\uD835\uDC14\uD835\uDC04\uD835\uDC04\uD835\uDC0D \uD835\uDC08\uD835\uDC12\uD835\uDC07\uD835\uDC14  \uD835\uDC12\uD835\uDC18\uD835\uDC12\uD835\uDC13\uD835\uDC04\uD835\uDC0C \uD83D\uDC9C*_\n===============\n\n=================\n\u2502\uD83D\uDC9C *ᴜᴘᴛɪᴍᴇ :* _' +
        runtime(process.uptime()) +
        '_\n\u2502\uD83D\uDC9C *RAM USAGE :*  _' +
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
        'MB / ' +
        Math.round(require('os').totalmem / 1024 / 1024) +
        'MB_\n\u2502\uD83D\uDC9C *HOST NAME :* _' +
        os.hostname() +
        '_\n\u2502\uD83D\uDC9C *OWERNER :* _LAKSIDU NIMSARA_\n=======================\n\n> CREATED BY LAKSIDU NIMSARA    \n'
      await _0x1b29c9.sendMessage(
        _0x4b6529,
        { text: _0x10e6b9 },
        { quoted: _0x53935e }
      )
    } catch (_0x342964) {
      console.log(_0x342964)
      _0x5e1c67('' + _0x342964)
    }
  }
)
cmd(
  {
    pattern: 'pi',
    desc: 'Check bot online or no.',
    category: 'main',
    react: '\uD83D\uDE80',
    filename: __filename,
  },
  async (
    _0x44e460,
    _0x31c5f7,
    _0x4d2e9a,
    {
      from: _0x5a7334,
      quoted: _0x32a181,
      body: _0xaa0276,
      isCmd: _0x38de09,
      command: _0x63f3a9,
      args: _0x5689e6,
      q: _0x19b1ed,
      isGroup: _0x1152a6,
      sender: _0x44aa7d,
      senderNumber: _0x56a385,
      botNumber2: _0x374917,
      botNumber: _0x46eb9c,
      pushname: _0x4453e7,
      isMe: _0x4f89fa,
      isOwner: _0x31afb6,
      groupMetadata: _0x5a8c22,
      groupName: _0x5d6377,
      participants: _0x312e54,
      groupAdmins: _0x3a1e05,
      isBotAdmins: _0x1fd905,
      isAdmins: _0x61ac75,
      reply: _0x796561,
    }
  ) => {
    try {
      const _0x384c27 = Date.now(),
        _0x105b36 = await _0x44e460.sendMessage(_0x5a7334, {
          text: '*QUEEN_ISHU...*',
        }),
        _0x487b46 = Date.now(),
        _0x4c8181 = _0x487b46 - _0x384c27
      await _0x44e460.sendMessage(
        _0x5a7334,
        { text: '_*\uD83D\uDC9CQUEEN_ISHU SPEED : ' + _0x4c8181 + 'ms*_' },
        { quoted: _0x31c5f7 }
      )
    } catch (_0x76a5fa) {
      console.log(_0x76a5fa)
      _0x796561('' + _0x76a5fa)
    }
  }
)
cmd(
  {
    pattern: 'owner',
    desc: 'cmd',
    category: 'system',
    filename: __filename,
  },
  async (
    _0x117dcb,
    _0x4bab33,
    _0x12a2b5,
    {
      from: _0x104b42,
      quoted: _0x1efa74,
      body: _0x56ebf8,
      isCmd: _0x469a77,
      command: _0x5f4bab,
      args: _0x31917c,
      q: _0x45643f,
      isGroup: _0xb19d16,
      sender: _0x1fb6ed,
      senderNumber: _0x27d1e3,
      botNumber2: _0x27cfa2,
      botNumber: _0x41216b,
      pushname: _0x385ede,
      isMe: _0x3fc1d0,
      isOwner: _0xcff892,
      groupMetadata: _0x4f367c,
      groupName: _0x40949c,
      participants: _0x356ccf,
      groupAdmins: _0x15169d,
      isBotAdmins: _0x185d78,
      isAdmins: _0x2ad3c9,
      reply: _0x75b297,
    }
  ) => {
    try {
      return await _0x117dcb.sendMessage(
        _0x104b42,
        {
          image: { url: 'https://i.imgur.com/vzDwkjg.jpeg' },
          caption:
            '\n _*\uD83D\uDC68‍\uD83D\uDCBBQUEEN ISHU OWNER \uD83D\uDC68‍\uD83D\uDCBB*_\n===================\n- *\uD83E\uDDD1NIMSARA MAHESH \uD83E\uDDD1*\n     *94760698006*\n\n> *QUEEN-ISHU*\n',
        },
        { quoted: _0x4bab33 }
      )
    } catch (_0x1c53fa) {
      console.log(_0x1c53fa)
      _0x75b297('' + _0x1c53fa)
    }
  }
)
cmd(
  {
    pattern: 'nimsara',
    desc: 'restart the bot',
    category: 'owner',
    filename: __filename,
  },
  async (
    _0x55faeb,
    _0x1dda1b,
    _0x16a9b1,
    {
      from: _0x7c2503,
      quoted: _0x59d618,
      body: _0x130a6a,
      isCmd: _0x457e86,
      command: _0x3fa338,
      args: _0x3542bc,
      q: _0x39ea47,
      isGroup: _0x3ba0ff,
      sender: _0x7cdf4f,
      senderNumber: _0xd9086e,
      botNumber2: _0x24f9d8,
      botNumber: _0x1c852e,
      pushname: _0x1757df,
      isMe: _0x4e2337,
      isOwner: _0x2677dc,
      groupMetadata: _0x306e29,
      groupName: _0x2535eb,
      participants: _0x5a81e6,
      groupAdmins: _0xddc6c9,
      isBotAdmins: _0x5e310b,
      isAdmins: _0xb762e0,
      reply: _0x594688,
    }
  ) => {
    try {
      const { exec: _0x2e98c8 } = require('child_process')
      _0x594688('*\uD83D\uDC9CRestarting...*')
      await sleep(1500)
      _0x2e98c8('pm2 restart all')
    } catch (_0x927a41) {
      console.log(_0x927a41)
      _0x594688('' + _0x927a41)
    }
  }
)
