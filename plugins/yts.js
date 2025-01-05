const { cmd } = require('../command'),
  yts = require('yt-search'),
  { fetchJson } = require('../lib/functions'),
  sensitiveData = require('../auth_info_baileys/a/b/c/d/dddamsbs'),
  formatViews = (_0x4d0294) =>
    _0x4d0294 >= 1000000000
      ? (_0x4d0294 / 1000000000).toFixed(1) + 'B'
      : _0x4d0294 >= 1000000
      ? (_0x4d0294 / 1000000).toFixed(1) + 'M'
      : _0x4d0294 >= 1000
      ? (_0x4d0294 / 1000).toFixed(1) + 'K'
      : _0x4d0294.toString(),
  thumbnailUrl = 'https://i.imgur.com/vzDwkjg.jpeg'
cmd(
  {
    pattern: 'yts',
    alias: ['yta', 'ytv', 'yt'],
    desc: 'Search and display up to 100 YouTube video details',
    category: 'search',
    filename: __filename,
  },
  async (
    _0x548324,
    _0x140905,
    _0x89671c,
    { from: _0x35dee2, q: _0x164321, reply: _0x10e7c8 }
  ) => {
    try {
      if (!_0x164321) {
        return _0x10e7c8('Please type a Name or Url... \uD83E\uDD16')
      }
      const _0xbf111 = await yts(_0x164321),
        _0x285b99 = _0xbf111.videos.slice(0, 100)
      if (_0x285b99.length === 0) {
        return _0x10e7c8('No videos found for your query.')
      }
      let _0x26a886 =
        '*' +
        sensitiveData.QUEEN +
        ' \uD835\uDDEC\uD835\uDDFC\uD835\uDE02\uD835\uDE01\uD835\uDE02\uD835\uDDEF\uD835\uDDF2 \uD835\uDDE6\uD835\uDDF2\uD835\uDDEE\uD835\uDDFF\uD835\uDDF0\uD835\uDDF5 \uD835\uDDE5\uD835\uDDF2\uD835\uDE00\uD835\uDE02\uD835\uDDF9\uD835\uDE01 \uD83C\uDFA5*\n\n'
      _0x285b99.forEach((_0x198ea5, _0x59cc93) => {
        _0x26a886 += '*No - ' + (_0x59cc93 + 1) + ' \u2935*\n'
        _0x26a886 +=
          '\uD83C\uDFB6 *\uD835\uDDE7\uD835\uDDF6\uD835\uDE01\uD835\uDDF9\uD835\uDDF2*: _' +
          _0x198ea5.title +
          '_\n'
        _0x26a886 +=
          '\uD83D\uDC64 *\uD835\uDDD6\uD835\uDDF5\uD835\uDDEE\uD835\uDDFB\uD835\uDDFB\uD835\uDDF2\uD835\uDDF9*: _' +
          _0x198ea5.author.name +
          '_\n'
        _0x26a886 +=
          '\uD83D\uDCDD *\uD835\uDDD7\uD835\uDDF2\uD835\uDE00\uD835\uDDF0\uD835\uDDFF\uD835\uDDF6\uD835\uDDFD\uD835\uDE01\uD835\uDDF6\uD835\uDDFC\uD835\uDDFB*: _' +
          _0x198ea5.description +
          '_\n'
        _0x26a886 +=
          '\u23F3 *\uD835\uDDE7\uD835\uDDF6\uD835\uDDFA\uD835\uDDF2*: _' +
          _0x198ea5.timestamp +
          '_\n'
        _0x26a886 +=
          '\u23F1️ *\uD835\uDDD4\uD835\uDDF4\uD835\uDDFC*: _' +
          _0x198ea5.ago +
          '_\n'
        _0x26a886 +=
          '\uD83D\uDC41️‍\uD83D\uDDE8️ *\uD835\uDDE9\uD835\uDDF6\uD835\uDDF2\uD835\uDE04\uD835\uDE00*: _' +
          formatViews(_0x198ea5.views) +
          '_\n'
        _0x26a886 +=
          '\uD83D\uDD17 *\uD835\uDDDF\uD835\uDDF6\uD835\uDDFB\uD835\uDDF8*: ' +
          _0x198ea5.url +
          '\n\n'
      })
      _0x26a886 +=
        '*\uD835\uDDDB\uD835\uDDFC\uD835\uDE04 \uD835\uDDE7\uD835\uDDFC \uD835\uDDD7\uD835\uDDFC\uD835\uDE04\uD835\uDDFB\uD835\uDDF9\uD835\uDDFC\uD835\uDDEE\uD835\uDDF1 \uD835\uDDE9\uD835\uDDF6\uD835\uDDF1\uD835\uDDF2\uD835\uDDFC \uD835\uDDE2\uD835\uDDFF \uD835\uDDD4\uD835\uDE02\uD835\uDDF1\uD835\uDDF6\uD835\uDDFC \u2705*\n\n'
      _0x26a886 += 'Example -  .video (enter video title)\n'
      _0x26a886 += 'Example - .song (enter video title)\n\n'
      _0x26a886 += '' + (sensitiveData.QUEEN - ISHU)
      await _0x548324.sendMessage(
        _0x35dee2,
        {
          image: { url: thumbnailUrl },
          caption: _0x26a886,
        },
        { quoted: _0x140905 }
      )
      await _0x548324.sendPresenceUpdate('recording', _0x35dee2)
      await _0x548324.sendMessage(
        _0x35dee2,
        {
          audio: {
            url: 'https://github.com/LAKSIDUOFFICIAL/QUEEN-ISHU/blob/main/media/voice_song.mp3?raw=true',
          },
          mimetype: 'audio/mpeg',
          ptt: true,
        },
        { quoted: _0x140905 }
      )
      await _0x548324.sendMessage(
        _0x35dee2,
        {
          audio: {
            url: 'https://github.com/LAKSIDUOFFICIAL/QUEEN-ISHU/blob/main/media/voice_video.mp3?raw=true',
          },
          mimetype: 'audio/mpeg',
          ptt: true,
        },
        { quoted: _0x140905 }
      )
    } catch (_0x398c4a) {
      console.log(_0x398c4a)
      _0x10e7c8('Error: ' + _0x398c4a.message)
    }
  }
)
