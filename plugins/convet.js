const axios = require('axios'),
  { cmd, commands } = require('../command'),
  { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter'),
  googleTTS = require('google-tts-api'),
  { getRandom } = require('../lib/functions')
var imgmsg = 'ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴘʜᴏᴛᴏ ғᴏʀ sᴛɪᴄᴋᴇʀ!',
  descg = 'ɪᴛ ᴄᴏɴᴠᴇʀᴛs ʏᴏᴜʀ ʀᴇᴘʟɪᴇᴅ ᴘʜᴏᴛᴏ ᴛᴏ sᴛɪᴄᴋᴇʀ.'
cmd(
  {
    pattern: 'sticker',
    react: '\uD83E\uDD39‍\u2640️',
    alias: ['s', 'stic'],
    desc: descg,
    category: 'convert',
    use: '.sticker <Reply to image>',
    filename: __filename,
  },
  async (
    _0x145742,
    _0x4f3542,
    _0x6b0eea,
    {
      from: _0x15a213,
      reply: _0x1c27b6,
      isCmd: _0xa73aa9,
      command: _0x3a4462,
      args: _0x3ade92,
      q: _0x5e7cc3,
      isGroup: _0x4cf09d,
      pushname: _0xa47fee,
    }
  ) => {
    try {
      const _0x3ddb51 =
          _0x6b0eea.quoted &&
          (_0x6b0eea.quoted.type === 'imageMessage' ||
            (_0x6b0eea.quoted.type === 'viewOnceMessage' &&
              _0x6b0eea.quoted.msg.type === 'imageMessage')),
        _0x446fa2 =
          _0x6b0eea.quoted && _0x6b0eea.quoted.type === 'stickerMessage'
      if (_0x6b0eea.type === 'imageMessage' || _0x3ddb51) {
        const _0x1cb66b = getRandom('.jpg'),
          _0x166618 = _0x3ddb51
            ? await _0x6b0eea.quoted.download()
            : await _0x6b0eea.download()
        await require('fs').promises.writeFile(_0x1cb66b, _0x166618)
        let _0x393df0 = new Sticker(_0x1cb66b, {
          pack: _0xa47fee,
          author: 'Laksidu Nimsara',
          type:
            _0x5e7cc3.includes('--crop') || _0x5e7cc3.includes('-c')
              ? StickerTypes.CROPPED
              : StickerTypes.FULL,
          categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
          id: '12345',
          quality: 75,
          background: 'transparent',
        })
        const _0x321c2f = await _0x393df0.toBuffer()
        return _0x145742.sendMessage(
          _0x15a213,
          { sticker: _0x321c2f },
          { quoted: _0x4f3542 }
        )
      } else {
        if (_0x446fa2) {
          const _0x2cbf4f = getRandom('.webp'),
            _0x1941ec = await _0x6b0eea.quoted.download()
          await require('fs').promises.writeFile(_0x2cbf4f, _0x1941ec)
          let _0x30dc9a = new Sticker(_0x2cbf4f, {
            pack: _0xa47fee,
            author: 'Laksidu Nimsara',
            type:
              _0x5e7cc3.includes('--crop') || _0x5e7cc3.includes('-c')
                ? StickerTypes.CROPPED
                : StickerTypes.FULL,
            categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
            id: '12345',
            quality: 75,
            background: 'transparent',
          })
          const _0x4d34d0 = await _0x30dc9a.toBuffer()
          return _0x145742.sendMessage(
            _0x15a213,
            { sticker: _0x4d34d0 },
            { quoted: _0x4f3542 }
          )
        } else {
          return await _0x1c27b6(imgmsg)
        }
      }
    } catch (_0x3e001b) {
      _0x1c27b6('Error !!')
      console.error(_0x3e001b)
    }
  }
)
cmd(
  {
    pattern: 'tts',
    desc: 'download songs',
    category: 'download',
    react: '\uD83D\uDC67',
    filename: __filename,
  },
  async (
    _0x164e22,
    _0x2882b9,
    _0x1e0d8a,
    {
      from: _0x380b19,
      quoted: _0x2ef230,
      body: _0x12b4c1,
      isCmd: _0x5ce62c,
      command: _0x341243,
      args: _0x40c7d6,
      q: _0x431ac3,
      isGroup: _0x23ad2a,
      sender: _0x557fcd,
      senderNumber: _0x24b535,
      botNumber2: _0x4cf2f8,
      botNumber: _0xf110e0,
      pushname: _0xa06c0e,
      isMe: _0x9feaf6,
      isOwner: _0x364fa9,
      groupMetadata: _0x228d72,
      groupName: _0x7520f3,
      participants: _0x5e9ec4,
      groupAdmins: _0xa94c22,
      isBotAdmins: _0x3761cc,
      isAdmins: _0x494db2,
      reply: _0x139956,
    }
  ) => {
    try {
      if (!_0x431ac3) {
        return _0x139956('Need some text.')
      }
      const _0x93d856 = googleTTS.getAudioUrl(_0x431ac3, {
        lang: 'hi-IN',
        slow: false,
        host: 'https://translate.google.com',
      })
      await _0x164e22.sendMessage(
        _0x380b19,
        {
          audio: { url: _0x93d856 },
          mimetype: 'audio/mpeg',
          ptt: true,
        },
        { quoted: _0x2882b9 }
      )
    } catch (_0x418324) {
      _0x139956('' + _0x418324)
    }
  }
)
cmd(
  {
    pattern: 'SGDJSHGFVADKHUSAGDKHGVAKDHVTAS,JDA',
    alias: ['HJVFYCUYRCYRCYRCCYRRYCYUTTFUVTUVTUVTUVTUVTUVGITIGU'],
    desc: '\uD83C\uDF3B Translate text between languages',
    react: '\u26A1',
    category: 'other',
    filename: __filename,
  },
  async (
    _0x525a48,
    _0x32550a,
    _0x142df8,
    { from: _0x16d172, q: _0x484b0d, reply: _0x9276bd }
  ) => {
    try {
      const _0x3c8613 = _0x484b0d.split(' ')
      if (_0x3c8613.length < 2) {
        return _0x9276bd(
          '\u2757 Please provide a language code and text. Usage: .translate [language code] [text]'
        )
      }
      const _0x1ec8b8 = _0x3c8613[0],
        _0x4ebf8d = _0x3c8613.slice(1).join(' '),
        _0x21ef8d =
          'https://api.mymemory.translated.net/get?q=' +
          encodeURIComponent(_0x4ebf8d) +
          '&langpair=en|' +
          _0x1ec8b8,
        _0x28b9f5 = await axios.get(_0x21ef8d),
        _0x3cbe8d = _0x28b9f5.data.responseData.translatedText,
        _0x2e0d1f =
          '\n\u2764‍\uD83E\uDE79 *𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐓𝐑𝐀𝐍𝐒𝐋𝐀𝐓𝐈𝐎𝐍* \u2764‍\uD83E\uDE79\n\n\uD83D\uDD24 *Original*: ' +
          _0x4ebf8d +
          '\n\n\uD83D\uDD20 *Translated*: ' +
          _0x3cbe8d +
          '\n\n\uD83C\uDF10 *Language*: ' +
          _0x1ec8b8.toUpperCase() +
          '\n\n> created by laksidu nimsara*'
      return _0x9276bd(_0x2e0d1f)
    } catch (_0x2d4cce) {
      return (
        console.log(_0x2d4cce),
        _0x9276bd(
          '\u26A0️ An error occurred data while translating the your text. Please try again later\uD83E\uDD15'
        )
      )
    }
  }
)
