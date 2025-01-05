const { cmd, commands } = require('../command'),
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
  } = require('../lib/functions'),
  fs = require('fs'),
  axios = require('axios')
var imgmsg = '*Give me a anime name !*',
  descgs = 'It gives details of given anime name.',
  cants = 'I cant find this anime.'
cmd(
  {
    pattern: 'loli',
    alias: ['imgloli'],
    react: '\uD83E\uDDE7',
    desc: 'Download anime loli images.',
    category: 'anime',
    use: '.loli',
    filename: __filename,
  },
  async (
    _0x5c658c,
    _0x10b2ae,
    _0x5053d8,
    {
      from: _0x344a0e,
      l: _0x3fefc1,
      quoted: _0x3541e2,
      body: _0x178503,
      isCmd: _0x2a0aa8,
      command: _0x42a573,
      args: _0x37642f,
      q: _0x1ba100,
      isGroup: _0x2b15ed,
      sender: _0x544e65,
      senderNumber: _0x568858,
      botNumber2: _0x381b38,
      botNumber: _0xd985d,
      pushname: _0x34f935,
      isMe: _0x42e21e,
      isOwner: _0x1a0f7d,
      groupMetadata: _0x316f1e,
      groupName: _0x4d0453,
      participants: _0x30a6d6,
      groupAdmins: _0x136b03,
      isBotAdmins: _0x5273ad,
      isAdmins: _0x55ccfc,
      reply: _0x42a5de,
    }
  ) => {
    try {
      let _0x12a5bb = await axios.get(
          'https://api.lolicon.app/setu/v2?num=1&r18=0&tag=lolicon'
        ),
        _0x33d67a = '\uD83E\uDDE7 Random loli image\n\n*@CREATE-BY-NIMSARA..*'
      await _0x5c658c.sendMessage(
        _0x344a0e,
        {
          image: { url: _0x12a5bb.data.data[0].urls.original },
          caption: _0x33d67a,
        },
        { quoted: _0x10b2ae }
      )
    } catch (_0x5eacb7) {
      _0x42a5de(cants)
      console.log(_0x5eacb7)
    }
  }
)
cmd(
  {
    pattern: 'waifu',
    alias: ['imgwaifu'],
    react: '\uD83E\uDDE7',
    desc: 'Download anime waifu images.',
    category: 'anime',
    use: '.waifu',
    filename: __filename,
  },
  async (
    _0x4089dc,
    _0x5ad6be,
    _0x18971b,
    {
      from: _0x230159,
      l: _0x53a301,
      quoted: _0x565c34,
      body: _0x1a1906,
      isCmd: _0x17c503,
      command: _0x4cdf89,
      args: _0x4a8ed1,
      q: _0x422685,
      isGroup: _0x1a934e,
      sender: _0x5ae8ab,
      senderNumber: _0x4d9541,
      botNumber2: _0x5c325d,
      botNumber: _0x5b2dcc,
      pushname: _0x10de3a,
      isMe: _0x3059c7,
      isOwner: _0x160bd2,
      groupMetadata: _0x1fe664,
      groupName: _0x1a429b,
      participants: _0x8e1c73,
      groupAdmins: _0x155cb0,
      isBotAdmins: _0x472bf6,
      isAdmins: _0x379d9f,
      reply: _0x432b73,
    }
  ) => {
    try {
      let _0x3608ba = await axios.get('https://api.waifu.pics/sfw/waifu'),
        _0x42ba55 =
          '\uD83E\uDDE7 Random Waifu image\n\n*\xA9@CREATE-BY-NIMSARA..*'
      await _0x4089dc.sendMessage(
        _0x230159,
        {
          image: { url: _0x3608ba.data.url },
          caption: _0x42ba55,
        },
        { quoted: _0x5ad6be }
      )
    } catch (_0x17fd76) {
      _0x432b73(cants)
      console.log(_0x17fd76)
    }
  }
)
cmd(
  {
    pattern: 'neko',
    alias: ['imgneko'],
    react: '\uD83E\uDDE7',
    desc: 'Download anime neko images.',
    category: 'anime',
    use: '.neko',
    filename: __filename,
  },
  async (
    _0x54d55f,
    _0x491d29,
    _0x1d409f,
    {
      from: _0x20772a,
      l: _0x4c5583,
      quoted: _0x196580,
      body: _0x13e141,
      isCmd: _0x459c56,
      command: _0x5669c5,
      args: _0x4d141a,
      q: _0x1fcd54,
      isGroup: _0x118ba9,
      sender: _0x547b6b,
      senderNumber: _0x1092a0,
      botNumber2: _0x2452bb,
      botNumber: _0x3eab81,
      pushname: _0x3ade61,
      isMe: _0x24d341,
      isOwner: _0x4723bb,
      groupMetadata: _0x1c410a,
      groupName: _0x2e51c6,
      participants: _0x21cfe6,
      groupAdmins: _0x18cc4b,
      isBotAdmins: _0x167790,
      isAdmins: _0x2dfbb7,
      reply: _0x3c595e,
    }
  ) => {
    try {
      let _0x4a1f02 = await axios.get('https://api.waifu.pics/sfw/neko'),
        _0x211e37 = '\uD83E\uDDE7 Random neko image\n\n*\xA9@CREATE-BY-NIMSARA*'
      await _0x54d55f.sendMessage(
        _0x20772a,
        {
          image: { url: _0x4a1f02.data.url },
          caption: _0x211e37,
        },
        { quoted: _0x491d29 }
      )
    } catch (_0x6d6a76) {
      _0x3c595e(cants)
      console.log(_0x6d6a76)
    }
  }
)
cmd(
  {
    pattern: 'megumin',
    alias: ['imgmegumin'],
    react: '\uD83E\uDDE7',
    desc: 'Download anime megumin images.',
    category: 'anime',
    use: '.megumin',
    filename: __filename,
  },
  async (
    _0x50b8bf,
    _0x2f85f7,
    _0x23434e,
    {
      from: _0x5ca583,
      l: _0x3bac4b,
      quoted: _0x174eb1,
      body: _0x27ef83,
      isCmd: _0x5eaa6d,
      command: _0x54d719,
      args: _0x398e38,
      q: _0x4f777a,
      isGroup: _0x25068d,
      sender: _0x22c3b3,
      senderNumber: _0x4cd5a8,
      botNumber2: _0x20c602,
      botNumber: _0x124d76,
      pushname: _0x37acab,
      isMe: _0x5efa17,
      isOwner: _0x191371,
      groupMetadata: _0x888919,
      groupName: _0x13058d,
      participants: _0x4f2c4d,
      groupAdmins: _0x436695,
      isBotAdmins: _0x1e31ba,
      isAdmins: _0x5eba64,
      reply: _0x1acea4,
    }
  ) => {
    try {
      let _0x24ea59 = await axios.get('https://api.waifu.pics/sfw/megumin')
      await _0x50b8bf.sendMessage(
        _0x5ca583,
        {
          image: { url: _0x24ea59.data.url },
          caption:
            '\uD83E\uDDE7 Random megumin image\n\n*\xA9@CREATE-BY-NIMSARA*',
        },
        { quoted: _0x2f85f7 }
      )
    } catch (_0x31733b) {
      _0x1acea4(cants)
      console.log(_0x31733b)
    }
  }
)
cmd(
  {
    pattern: 'maid',
    alias: ['imgmaid'],
    react: '\uD83E\uDDE7',
    desc: 'Download anime maid images.',
    category: 'anime',
    use: '.maid',
    filename: __filename,
  },
  async (
    _0x5e1c16,
    _0x3268a5,
    _0x14c993,
    {
      from: _0x20c9cf,
      l: _0x382d7e,
      quoted: _0xd37bf6,
      body: _0x192d21,
      isCmd: _0x12475d,
      command: _0x185010,
      args: _0x565d8d,
      q: _0x42ecd2,
      isGroup: _0x40afd0,
      sender: _0xacfe30,
      senderNumber: _0x1fb2d3,
      botNumber2: _0x2844ce,
      botNumber: _0x5ee304,
      pushname: _0x37693c,
      isMe: _0x20fed7,
      isOwner: _0x99f37b,
      groupMetadata: _0x8f7df,
      groupName: _0x529a6a,
      participants: _0x2663ff,
      groupAdmins: _0x19b275,
      isBotAdmins: _0x25d3ea,
      isAdmins: _0x24f73f,
      reply: _0x157173,
    }
  ) => {
    try {
      let _0x32f7ef = await axios.get(
        'https://api.waifu.im/search/?included_tags=maid'
      )
      await _0x5e1c16.sendMessage(
        _0x20c9cf,
        {
          image: { url: _0x32f7ef.data.images[0].url },
          caption: '\uD83E\uDDE7 Random maid image\n\n*\xA9LAKSIDU NIMSARA*',
        },
        { quoted: _0x3268a5 }
      )
    } catch (_0x1d36e3) {
      _0x157173(cants)
      console.log(_0x1d36e3)
    }
  }
)
cmd(
  {
    pattern: 'awoo',
    alias: ['imgawoo'],
    react: '\uD83E\uDDE7',
    desc: 'Download anime awoo images.',
    category: 'anime',
    use: '.awoo',
    filename: __filename,
  },
  async (
    _0x4cac6b,
    _0x4da627,
    _0x5928c7,
    {
      from: _0x2e5787,
      l: _0x7db527,
      quoted: _0x5da719,
      body: _0x10e406,
      isCmd: _0x4daf5b,
      command: _0x33ad58,
      args: _0x4e3aa2,
      q: _0x49558a,
      isGroup: _0x505721,
      sender: _0x54321e,
      senderNumber: _0x25a8c6,
      botNumber2: _0x302e60,
      botNumber: _0x3aa536,
      pushname: _0x4126f0,
      isMe: _0x511bc6,
      isOwner: _0x19314e,
      groupMetadata: _0x44ff12,
      groupName: _0x2f370e,
      participants: _0x41ba65,
      groupAdmins: _0x4137c4,
      isBotAdmins: _0x27b61c,
      isAdmins: _0x5e7b6c,
      reply: _0x5b373d,
    }
  ) => {
    try {
      let _0x25ff57 = await axios.get('https://api.waifu.pics/sfw/awoo')
      await _0x4cac6b.sendMessage(
        _0x2e5787,
        {
          image: { url: _0x25ff57.data.url },
          caption: '\uD83E\uDDE7 Random awoo image\n\n*@CREATE-BY-NIMSARA*',
        },
        { quoted: _0x4da627 }
      )
    } catch (_0x1b6e99) {
      _0x5b373d(cants)
      console.log(_0x1b6e99)
    }
  }
)
