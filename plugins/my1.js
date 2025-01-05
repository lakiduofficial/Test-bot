const { cmd, commands } = require('../command'),
  fg = require('api-dylux'),
  yts = require('yt-search')
cmd(
  {
    pattern: 'mp',
    desc: 'download songs',
    category: 'download',
    react: '\uD83C\uDFB5',
    filename: __filename,
  },
  async (
    _0xdddfa8,
    _0xc19a4,
    _0x1e8d2f,
    {
      from: _0x2849ff,
      quoted: _0x550375,
      body: _0x2f8b67,
      isCmd: _0x46ea9c,
      command: _0x2b24a8,
      args: _0x3acf65,
      q: _0x189af6,
      isGroup: _0x3b8a10,
      sender: _0x650602,
      senderNumber: _0x1fda79,
      botNumber2: _0x3aa2b0,
      botNumber: _0x48e0cf,
      pushname: _0x253f2d,
      isMe: _0x28869d,
      isOwner: _0x3460be,
      groupMetadata: _0x44d806,
      groupName: _0x428c0f,
      participants: _0x15307b,
      groupAdmins: _0x30bc40,
      isBotAdmins: _0x28a8ae,
      isAdmins: _0x114431,
      reply: _0x3b287e,
    }
  ) => {
    try {
      if (!_0x189af6) {
        return _0x3b287e(
          '*කරුණාකර Link එකක් හො නමක් ලබා දෙන්න \uD83D\uDD0E...*'
        )
      }
      const _0x3365de = await yts(_0x189af6),
        _0x2299bd = _0x3365de.videos[0],
        _0x103daa = _0x2299bd.url
      let _0x2a0546 =
        '\n\n*| \u27A4 TITLE - ' +
        _0x2299bd.title +
        '*\n\n> POWERED BY QUEEN-ISHU-MD\n'
      await _0xdddfa8.sendMessage(
        _0x2849ff,
        {
          image: { url: _0x2299bd.thumbnail },
          caption: _0x2a0546,
        },
        { quoted: _0xc19a4 }
      )
      let _0x38422c = await fg.yta(_0x103daa),
        _0x2188ef = _0x38422c.dl_url
      await _0xdddfa8.sendMessage(
        _0x2849ff,
        {
          audio: { url: _0x2188ef },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0xc19a4 }
      )
      await _0xdddfa8.sendMessage(
        _0x2849ff,
        {
          document: { url: _0x2188ef },
          mimetype: 'audio/mpeg',
          fileName: _0x2299bd.title + 'mp3',
          caption: ' \xA9CREATE BY LAKSIDU NIMSARA',
        },
        { quoted: _0xc19a4 }
      )
    } catch (_0xf7b5f6) {
      _0x3b287e('' + _0xf7b5f6)
    }
  }
)
cmd(
  {
    pattern: 'laki',
    desc: 'download video',
    category: 'download',
    react: '\uD83C\uDFA5',
    filename: __filename,
  },
  async (
    _0x585943,
    _0x1ec1ad,
    _0x53b601,
    {
      from: _0x4892da,
      quoted: _0x459bbf,
      body: _0x5acf82,
      isCmd: _0x61e755,
      command: _0x1624c1,
      args: _0xf8c9d,
      q: _0x5da4d0,
      isGroup: _0x283e50,
      sender: _0x2e3da3,
      senderNumber: _0x1b452a,
      botNumber2: _0x1b9513,
      botNumber: _0x337147,
      pushname: _0x52a23a,
      isMe: _0x1b6601,
      isOwner: _0x5400ad,
      groupMetadata: _0x41e80a,
      groupName: _0x2f4832,
      participants: _0x5d380b,
      groupAdmins: _0x4f6ab1,
      isBotAdmins: _0x14ada5,
      isAdmins: _0xc3caab,
      reply: _0x28c76a,
    }
  ) => {
    try {
      if (!_0x5da4d0) {
        return _0x28c76a(
          '*කරුණාකර Link එකක් හො නමක් ලබා දෙන්න \uD83D\uDD0E...*'
        )
      }
      const _0x3c4d23 = await yts(_0x5da4d0),
        _0xbcf3a7 = _0x3c4d23.videos[0],
        _0x1bfe74 = _0xbcf3a7.url
      let _0x3e1407 =
        '*\u25C6QUEEN-ISHU-MD VIDEO DOWNLOADER \u25C6*\n\n| \u27A4 TITLE - ' +
        _0xbcf3a7.title +
        '\n\n| \u27A4 VIEWS - ' +
        _0xbcf3a7.views +
        '\n\n| \u27A4 DESCRIPTION - ' +
        _0xbcf3a7.description +
        '\n\n| \u27A4 TIME - ' +
        _0xbcf3a7.timestamp +
        '\n\n| \u27A4 AGO - ' +
        _0xbcf3a7.ago +
        '\n\n \xA9CREATE BY LAKSIDU NIMSARA\n'
      await _0x585943.sendMessage(
        _0x4892da,
        {
          image: { url: _0xbcf3a7.thumbnail },
          caption: _0x3e1407,
        },
        { quoted: _0x1ec1ad }
      )
      let _0x5e58d7 = await fg.ytv(_0x1bfe74),
        _0x48ccff = _0x5e58d7.dl_url
      await _0x585943.sendMessage(
        _0x4892da,
        {
          video: { url: _0x48ccff },
          mimetype: 'video/mp4',
        },
        { quoted: _0x1ec1ad }
      )
      await _0x585943.sendMessage(
        _0x4892da,
        {
          document: { url: _0x48ccff },
          mimetype: 'video/mp4',
          fileName: _0xbcf3a7.title + 'mp4',
          caption: ' \xA9CREATE BY LAKSIDU NIMSARA',
        },
        { quoted: _0x1ec1ad }
      )
    } catch (_0x4c4bfe) {
      _0x28c76a('' + _0x4c4bfe)
    }
  }
)
