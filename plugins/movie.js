const axios = require('axios'),
  { cmd } = require('../command'),
  config = require('../config')
cmd(
  {
    pattern: 'movie',
    desc: 'Fetch detailed information about a movie.',
    category: 'utility',
    react: '\uD83C\uDF9E️',
    filename: __filename,
  },
  async (
    _0x10ec59,
    _0x408116,
    _0x43b40c,
    {
      from: _0x1f30da,
      quoted: _0x497547,
      body: _0x22ef74,
      isCmd: _0x1833e5,
      command: _0x29af32,
      args: _0x1924da,
      q: _0x7d540f,
      isGroup: _0x4e2e1f,
      sender: _0x5e547c,
      senderNumber: _0x500057,
      botNumber2: _0x266b79,
      botNumber: _0x4b2a18,
      pushname: _0x56ebbf,
      isMe: _0x3b4d8d,
      isOwner: _0x5e9c4b,
      groupMetadata: _0x56819e,
      groupName: _0x18f7e5,
      participants: _0x3e5fa8,
      groupAdmins: _0x29ed9b,
      isBotAdmins: _0x24d5ea,
      isAdmins: _0x18b6ca,
      reply: _0x2fc9e5,
    }
  ) => {
    try {
      const _0x15ac88 = _0x1924da.join(' ')
      if (!_0x15ac88) {
        return _0x2fc9e5('\uD83D\uDCFD️ Please provide the name of the movie.')
      }
      const _0x24638e =
          'http://www.omdbapi.com/?t=' +
          encodeURIComponent(_0x15ac88) +
          '&apikey=' +
          config.OMDB_API_KEY,
        _0x138444 = await axios.get(_0x24638e),
        _0x34e304 = _0x138444.data
      if (_0x34e304.Response === 'False') {
        return _0x2fc9e5('! Movie not found.')
      }
      const _0x47d128 =
          '\n*\u2554\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u265B\xB0\u2022\u2741\u272E \u2550\u2550\u2550\u2557*\n\u2764️️  \uD835\uDC08\uD835\uDC12\uD835\uDC07\uD835\uDC14 \uD835\uDC0C\uD835\uDC0E\uD835\uDC15\uD835\uDC08\uD835\uDC04 \uD835\uDC12\uD835\uDC04\uD835\uDC11\uD835\uDC02\uD835\uDC07 \u2764️️\n*\u255A\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u2740\xB0\u2022\u2741\u272E\u2550\u2550\u2550\u255D*\n\n*\u27A4\uD83C\uDF1Fᴛɪᴛʟᴇ:* ' +
          _0x34e304.Title +
          '\n*\u27A4\uD83C\uDF1Fʏᴇᴀʀ:* ' +
          _0x34e304.Year +
          '\n*\u27A4\uD83C\uDF1Fʀᴀᴛᴇᴅ:* ' +
          _0x34e304.Rated +
          '\n*\u27A4\uD83C\uDF1Fʀᴇʟᴇᴀꜱᴇᴅ:* ' +
          _0x34e304.Released +
          '\n*\u27A4\uD83C\uDF1Fʀᴜɴᴛɪᴍᴇ:* ' +
          _0x34e304.Runtime +
          '\n*\u27A4\uD83C\uDF1Fɢᴇɴʀᴇ:* ' +
          _0x34e304.Genre +
          '\n*\u27A4\uD83C\uDF1Fᴅɪʀᴇᴄᴛᴏʀ:* ' +
          _0x34e304.Director +
          '\n*\u27A4\uD83C\uDF1Fᴡʀɪᴛᴇʀ:* ' +
          _0x34e304.Writer +
          '\n*\u27A4\uD83C\uDF1Fᴀᴄᴛᴏʀꜱ:* ' +
          _0x34e304.Actors +
          '\n*\u27A4\uD83C\uDF1Fʟᴀɴɢᴜᴀɢᴇ:* ' +
          _0x34e304.Language +
          '\n*\u27A4\uD83C\uDF1Fᴄᴏᴜɴᴛʀʏ:* ' +
          _0x34e304.Country +
          '\n*\u27A4\uD83C\uDF1Fᴀᴡᴀʀᴅꜱ:* ' +
          _0x34e304.Awards +
          '\n*\u27A4\uD83C\uDF1Fɪᴍᴅʙ ʀᴀᴛɪɴɢ:* ' +
          _0x34e304.imdbRating +
          '\n\n*\xBB\xBB\u2014\u2014\u2014-𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃-\u2014\u2014\u2014-\xAB\xAB*\n',
        _0x5bf460 =
          _0x34e304.Poster && _0x34e304.Poster !== 'N/A'
            ? _0x34e304.Poster
            : config.ALIVE_IMG
      await _0x10ec59.sendMessage(
        _0x1f30da,
        {
          image: { url: _0x5bf460 },
          caption: _0x47d128 + '\n> *⚜️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 : ®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛*',
        },
        { quoted: _0x408116 }
      )
    } catch (_0x4c3e61) {
      console.error(_0x4c3e61)
      _0x2fc9e5('\u274C Error: ' + _0x4c3e61.message)
    }
  }
)
