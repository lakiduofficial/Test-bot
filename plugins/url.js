const axios = require('axios'),
  FormData = require('form-data'),
  fs = require('fs'),
  os = require('os'),
  path = require('path'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'url',
    alias: ['imgtourl', 'img2url', 'url'],
    react: '\uD83D\uDD87',
    desc: 'Download anime maid images.',
    category: 'anime',
    use: '.maid',
    filename: __filename,
  },
  async (
    _0x5aa2a5,
    _0x3e4d2c,
    _0x4572c0,
    {
      from: _0x3dbf21,
      mnu: _0x5b9835,
      quoted: _0x2aa830,
      body: _0x102661,
      isCmd: _0x458182,
      command: _0x17afd2,
      args: _0x584452,
      q: _0x1e8526,
      isGroup: _0x2ca4de,
      sender: _0x59f221,
      senderNumber: _0x4307ab,
      botNumber2: _0x17667f,
      botNumber: _0x359bfc,
      pushname: _0x2b3b71,
      isMe: _0xed0daf,
      isOwner: _0x5d3e22,
      groupMetadata: _0x169324,
      groupName: _0x432187,
      participants: _0x4c725d,
      groupAdmins: _0x276007,
      isBotAdmins: _0x13439b,
      isAdmins: _0x1d0a9d,
      reply: _0x2cab4a,
    }
  ) => {
    try {
      let _0x4f43a6 = _0x4572c0.quoted ? _0x4572c0.quoted : _0x4572c0,
        _0x2b3347 = (_0x4f43a6.msg || _0x4f43a6).mimetype || ''
      if (!_0x2b3347) {
        throw '_`\uD83C\uDF3B Replay To image`_'
      }
      let _0x4fb74b = await _0x4f43a6.download(),
        _0x45ad97 = path.join(os.tmpdir(), 'ManulOfcX')
      fs.writeFileSync(_0x45ad97, _0x4fb74b)
      let _0x807e20 = new FormData()
      _0x807e20.append('image', fs.createReadStream(_0x45ad97))
      let _0xf67b93 = await axios.post(
        'https://api.imgbb.com/1/upload?key=06d00f0e4520243a32b58138765a2ecc',
        _0x807e20,
        { headers: { ..._0x807e20.getHeaders() } }
      )
      if (!_0xf67b93.data || !_0xf67b93.data.data || !_0xf67b93.data.data.url) {
        throw '\u274C Error al subir el archivo'
      }
      let _0x56f6ae = _0xf67b93.data.data.url
      fs.unlinkSync(_0x45ad97)
      _0x4572c0.reply(
        '*𝐐𝐔𝐄𝐄𝐍-𝐈𝐒𝐇𝐔-𝐌𝐃-𝐈𝐌𝐀𝐆𝐄\uD83D\uDCF8*\n ' +
          _0x4fb74b.length +
          ' Byte(s)\n *URL-IMG* \uD83D\uDD87️ ' +
          _0x56f6ae +
          '\n\n> *\u2696️UPLOAD - : \xA9 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀*'
      )
    } catch (_0x141b19) {
      _0x2cab4a('' + _0x141b19)
      console.log(_0x141b19)
    }
  }
)
