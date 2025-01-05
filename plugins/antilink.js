const { cmd } = require('../command'),
  fs = require('fs'),
  path = require('path'),
  config = require('../config')
cmd(
  { on: 'body' },
  async (
    _0x5679ce,
    _0x3fe519,
    _0xbfad47,
    {
      from: _0x29d652,
      body: _0x342405,
      isGroup: _0x2a6263,
      isAdmins: _0x1400ce,
      isBotAdmins: _0x461470,
      reply: _0x1f431c,
      sender: _0x507ff7,
    }
  ) => {
    try {
      const _0x3ac815 = [
        'wtf',
        'mia',
        'xxx',
        'fuck',
        'sex',
        'huththa',
        'pakaya',
        'ponnaya',
        'hutto',
        'kariya',
        'pakaya',
        'hukapan',
        'hukanna',
        'hutto',
        'xvdl',
        'hutto',
        'Hukapamm',
        'lol',
      ]
      if (!_0x2a6263 || _0x1400ce || !_0x461470) {
        return
      }
      const _0x4d33fb = _0x342405.toLowerCase(),
        _0x2813f5 = _0x3ac815.some((_0x51f1f5) => _0x4d33fb.includes(_0x51f1f5))
      _0x2813f5 & (config.ANTI_BAD === 'true') &&
        (await _0x5679ce.sendMessage(
          _0x29d652,
          { delete: _0x3fe519.key },
          { quoted: _0x3fe519 }
        ),
        await _0x5679ce.sendMessage(
          _0x29d652,
          { text: '\u26A0️BAD WORDS NOT ALLOWED\u26A0️' },
          { quoted: _0x3fe519 }
        ))
    } catch (_0x3b1152) {
      console.error(_0x3b1152)
      _0x1f431c('An error occurred while processing the message.')
    }
  }
)
const linkPatterns = [
  /https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi,
  /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi,
  /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi,
  /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi,
  /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi,
  /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi,
  /https?:\/\/ngl\/\S+/gi,
  /https?:\/\/(?:www\.)?discord\.com\/\S+/gi,
  /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi,
  /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi,
  /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi,
  /https?:\/\/(?:www\.)?medium\.com\/\S+/gi,
]
cmd(
  { on: 'body' },
  async (
    _0x45638b,
    _0x54bbd7,
    _0x1f0488,
    {
      from: _0x2770e5,
      body: _0x59998c,
      sender: _0xc7b1ef,
      isGroup: _0x1d0241,
      isAdmins: _0x154e03,
      isBotAdmins: _0x36819f,
      reply: _0xb8759a,
    }
  ) => {
    try {
      if (!_0x1d0241 || _0x154e03 || !_0x36819f) {
        return
      }
      const _0x3fe4b8 = linkPatterns.some((_0xf53edb) =>
        _0xf53edb.test(_0x59998c)
      )
      _0x3fe4b8 &&
        config.ANTI_LINK === 'true' &&
        (await _0x45638b.sendMessage(
          _0x2770e5,
          { delete: _0x54bbd7.key },
          { quoted: _0x54bbd7 }
        ),
        await _0x45638b.sendMessage(
          _0x2770e5,
          {
            text:
              '\u26A0️ Links are not allowed in this group.\n@' +
              _0xc7b1ef.split('@')[0] +
              ' has been removed. \uD83D\uDEAB',
            mentions: [_0xc7b1ef],
          },
          { quoted: _0x54bbd7 }
        ),
        await _0x45638b.groupParticipantsUpdate(
          _0x2770e5,
          [_0xc7b1ef],
          'remove'
        ))
    } catch (_0x125733) {
      console.error(_0x125733)
      _0xb8759a('An error occurred while processing the message.')
    }
  }
)
