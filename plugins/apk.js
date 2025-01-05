const { cmd, commands } = require('../command'),
  { fetchJson } = require('../lib/functions')
cmd(
  {
    pattern: 'apk',
    desc: 'Download apk sever 2',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x56c54f,
    _0x5d95e6,
    _0x33c882,
    {
      from: _0x31983a,
      quoted: _0x28825a,
      body: _0x3a6929,
      isCmd: _0x55a9be,
      command: _0x5e9179,
      args: _0x2b7181,
      q: _0x6a560b,
      isGroup: _0x566d65,
      sender: _0x28313c,
      senderNumber: _0x2328b5,
      botNumber2: _0x3fca87,
      botNumber: _0x4e38fd,
      pushname: _0x127ae6,
      isMe: _0x41a91d,
      isOwner: _0x4ee8fa,
      groupMetadata: _0x1cda80,
      groupName: _0x1af5b8,
      participants: _0x44a8e9,
      groupAdmins: _0x17d8ae,
      isBotAdmins: _0x504599,
      isAdmins: _0x4262f6,
      reply: _0x2fa578,
    }
  ) => {
    try {
      if (!_0x6a560b) {
        return _0x33c882.reply('*Provide an app name*')
      }
      let _0x557a36 = await fetchJson(
          'https://bk9.fun/search/apk?q=' + _0x6a560b
        ),
        _0x20f390 = await fetchJson(
          'https://bk9.fun/download/apk?id=' + _0x557a36.BK9[0].id
        )
      _0x2fa578('*\xA9DOWNLOADING YOU APK PLEASE WAITE?.*\n> QUEEN-ISHU-MD')
      await _0x56c54f.sendMessage(
        _0x31983a,
        {
          document: { url: _0x20f390.BK9.dllink },
          fileName: _0x20f390.BK9.name,
          mimetype: 'application/vnd.android.package-archive',
          caption:
            '*\xA9 CREATED BY LAKSIDU NIMSARA \xB7 \xB7 \xB7* \uD83D\uDC9B',
        },
        { quoted: _0x5d95e6 }
      )
    } catch (_0x28a23b) {
      console.log(_0x28a23b)
      _0x2fa578('' + _0x28a23b)
    }
  }
)
