const { cmd } = require('../command'),
  yts = require('yt-search'),
  path = require('path'),
  axios = require('axios'),
  fs = require('fs')
cmd(
  {
    pattern: 'song1',
    react: '\uD83C\uDFB5',
    desc: 'Download audio from YouTube by searching for keywords.',
    category: 'music',
    use: '.play2 <song name or keywords>',
    filename: __filename,
  },
  async (
    _0x4523e8,
    _0x77b75b,
    _0x462c97,
    { from: _0x7c2d01, args: _0x5ece2f, reply: _0x47629f }
  ) => {
    try {
      const _0x1b3f29 = _0x5ece2f.join(' ')
      if (!_0x1b3f29) {
        return _0x47629f(
          '*Please provide a song name or keywords to search for.*'
        )
      }
      _0x47629f('*\uD83C\uDFA7 Searching for the song...*')
      const _0x2badfe = await yts(_0x1b3f29)
      if (!_0x2badfe.videos || _0x2badfe.videos.length === 0) {
        return _0x47629f('\u274C No results found for "' + _0x1b3f29 + '".')
      }
      const _0x3ef32b = _0x2badfe.videos[0],
        _0x334b37 = _0x3ef32b.url,
        _0x3d1eec =
          'https://api.davidcyriltech.my.id/download/ytmp3?url=' + _0x334b37,
        _0x14d9ff = await axios.get(_0x3d1eec)
      if (!_0x14d9ff.data.success) {
        return _0x47629f(
          '\u274C Failed to fetch audio for "' + _0x1b3f29 + '".'
        )
      }
      const { title: _0x57142b, download_url: _0x47a935 } =
        _0x14d9ff.data.result
      await _0x4523e8.sendMessage(
        _0x7c2d01,
        {
          audio: { url: _0x47a935 },
          mimetype: 'audio/mp4',
          ptt: false,
        },
        { quoted: _0x77b75b }
      )
    } catch (_0x32f692) {
      console.error(_0x32f692)
      _0x47629f('\u274C An error occurred while processing your request.')
    }
  }
)
cmd(
  {
    pattern: 'song25',
    react: '\uD83C\uDFB5',
    desc: 'Download audio from YouTube by searching for keywords.',
    category: 'music',
    use: '.play3 <song name or keywords>',
    filename: __filename,
  },
  async (
    _0x473b22,
    _0x540553,
    _0x3144cb,
    { from: _0x8be2e3, args: _0x3b4bee, reply: _0x5a039e }
  ) => {
    try {
      const _0x1c8189 = _0x3b4bee.join(' ')
      if (!_0x1c8189) {
        return _0x5a039e(
          '*Please provide a song name or keywords to search for.*'
        )
      }
      _0x5a039e('*\uD83C\uDFA7 Searching for the song...*')
      const _0xef71b0 = await yts(_0x1c8189)
      if (!_0xef71b0.videos || _0xef71b0.videos.length === 0) {
        return _0x5a039e('\u274C No results found for "' + _0x1c8189 + '".')
      }
      const _0x5c0bcd = _0xef71b0.videos[0],
        _0x4e0de8 = _0x5c0bcd.url,
        _0x2322c8 =
          'https://api.davidcyriltech.my.id/youtube/mp3?url=' + _0x4e0de8,
        _0x7b6e11 = await axios.get(_0x2322c8)
      if (!_0x7b6e11.data.success) {
        return _0x5a039e(
          '\u274C Failed to fetch audio for "' + _0x1c8189 + '".'
        )
      }
      const { title: _0x5621e0, downloadUrl: _0x3e6b73 } = _0x7b6e11.data.result
      await _0x473b22.sendMessage(
        _0x8be2e3,
        {
          audio: { url: _0x3e6b73 },
          mimetype: 'audio/mp4',
          ptt: false,
        },
        { quoted: _0x540553 }
      )
    } catch (_0x29a7fe) {
      console.error(_0x29a7fe)
      _0x5a039e('\u274C An error occurred while processing your request.')
    }
  }
)
cmd(
  {
    pattern: 'video',
    react: '\uD83C\uDFAC',
    desc: 'Download video from YouTube by searching for keywords.',
    category: 'media',
    use: '.video <keywords>',
    filename: __filename,
  },
  async (
    _0xeabf5,
    _0x432901,
    _0xf2d0ca,
    { from: _0x3f75fd, args: _0x28f2ac, reply: _0x414939 }
  ) => {
    try {
      const _0x100668 = _0x28f2ac.join(' ')
      if (!_0x100668) {
        return _0x414939(
          '*Please provide a video title or keywords to search for.*'
        )
      }
      _0x414939('*\uD83C\uDFAC Searching for the video...*')
      const _0x3807e2 = await yts(_0x100668)
      if (!_0x3807e2.videos || _0x3807e2.videos.length === 0) {
        return _0x414939('\u274C No results found for "' + _0x100668 + '".')
      }
      const _0x34d100 = _0x3807e2.videos[0],
        _0x477b01 = _0x34d100.url,
        _0x116118 =
          'https://api.davidcyriltech.my.id/download/ytmp4?url=' + _0x477b01,
        _0x2d0c96 = await axios.get(_0x116118)
      if (!_0x2d0c96.data.success) {
        return _0x414939(
          '\u274C Failed to fetch video for "' + _0x100668 + '".'
        )
      }
      const { title: _0x53e2cf, download_url: _0x290cb0 } =
        _0x2d0c96.data.result
      await _0xeabf5.sendMessage(
        _0x3f75fd,
        {
          video: { url: _0x290cb0 },
          mimetype: 'video/mp4',
          caption: _0x53e2cf,
        },
        { quoted: _0x432901 }
      )
    } catch (_0x5eff0e) {
      console.error(_0x5eff0e)
      _0x414939('\u274C An error occurred while processing your request.')
    }
  }
)
cmd(
  {
    pattern: 'play6',
    react: '\uD83C\uDFB5',
    desc: 'Download MP3 audio from YouTube by searching for song names.',
    category: 'music',
    use: '.play7 <song name>',
    filename: __filename,
  },
  async (
    _0x2b8929,
    _0x1f2a43,
    _0x3027d3,
    { from: _0x556f06, args: _0x58338d, reply: _0x30e1d4 }
  ) => {
    try {
      const _0x417b4a = _0x58338d.join(' ')
      if (!_0x417b4a) {
        return _0x30e1d4('*Please provide a song name to search for.*')
      }
      _0x30e1d4('*\uD83C\uDFA7 Searching for the song...*')
      const _0x3578e9 = await yts(_0x417b4a)
      if (!_0x3578e9.videos || _0x3578e9.videos.length === 0) {
        return _0x30e1d4('\u274C No results found for "' + _0x417b4a + '".')
      }
      const _0x21473b = _0x3578e9.videos[0],
        _0x4afd80 = _0x21473b.url,
        _0x21612c =
          'https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=' +
          encodeURIComponent(_0x4afd80),
        _0x16dabb = await axios.get(_0x21612c)
      if (!_0x16dabb.data.success) {
        return _0x30e1d4(
          '\u274C Failed to fetch audio for "' + _0x417b4a + '".'
        )
      }
      const { download_url: _0x3a9436 } = _0x16dabb.data.result
      await _0x2b8929.sendMessage(
        _0x556f06,
        {
          audio: { url: _0x3a9436 },
          mimetype: 'audio/mp4',
          ptt: false,
        },
        { quoted: _0x1f2a43 }
      )
    } catch (_0x1ac400) {
      console.error(_0x1ac400)
      _0x30e1d4('\u274C An error occurred while processing your request.')
    }
  }
)
cmd(
  {
    pattern: 'video5',
    react: '\uD83C\uDFA5',
    desc: 'Download MP4 video from YouTube by searching for video names.',
    category: 'video',
    use: '.play8 <video name>',
    filename: __filename,
  },
  async (
    _0x48c1e5,
    _0x5e6fd9,
    _0xe7ab07,
    { from: _0x346a82, args: _0x39813c, reply: _0xee79e6 }
  ) => {
    try {
      const _0x19fee1 = _0x39813c.join(' ')
      if (!_0x19fee1) {
        return _0xee79e6('*Please provide a video name to search for.*')
      }
      _0xee79e6('*\uD83C\uDFA5 Searching for the video...*')
      const _0x2499a5 = await yts(_0x19fee1)
      if (!_0x2499a5.videos || _0x2499a5.videos.length === 0) {
        return _0xee79e6('\u274C No results found for "' + _0x19fee1 + '".')
      }
      const _0x440189 = _0x2499a5.videos[0],
        _0xa40c5b = _0x440189.url,
        _0x8d2a41 =
          'https://api.giftedtech.web.id/api/download/dlmp4?apikey=gifted&url=' +
          encodeURIComponent(_0xa40c5b),
        _0x11dfb7 = await axios.get(_0x8d2a41)
      if (!_0x11dfb7.data.success) {
        return _0xee79e6(
          '\u274C Failed to fetch video for "' + _0x19fee1 + '".'
        )
      }
      const { download_url: _0x3e10b9 } = _0x11dfb7.data.result
      await _0x48c1e5.sendMessage(
        _0x346a82,
        {
          video: { url: _0x3e10b9 },
          mimetype: 'video/mp4',
          caption: _0x11dfb7.data.result.title,
        },
        { quoted: _0x5e6fd9 }
      )
    } catch (_0x51a15d) {
      console.error(_0x51a15d)
      _0xee79e6('\u274C An error occurred while processing your request.')
    }
  }
)
cmd(
  {
    pattern: 'fb2',
    react: '\uD83C\uDFAC',
    desc: 'Download video from Facebook by URL.',
    category: 'media',
    use: '.facebookdl <facebook video URL>',
    filename: __filename,
  },
  async (
    _0x13f6d8,
    _0x3258f1,
    _0x28cfa6,
    { from: _0x18f82f, args: _0x1fca5c, reply: _0x22486a }
  ) => {
    try {
      const _0x3b5d69 = _0x1fca5c[0]
      if (!_0x3b5d69) {
        return _0x22486a('*Please provide a Facebook video URL.*')
      }
      _0x22486a('*\uD83C\uDFAC Fetching video from Facebook...*')
      const _0x45eea5 =
          'https://api.giftedtech.web.id/api/download/facebook?apikey=gifted&url=' +
          encodeURIComponent(_0x3b5d69),
        _0x559426 = await axios.get(_0x45eea5)
      if (!_0x559426.data.success) {
        return _0x22486a('\u274C Failed to fetch video from Facebook.')
      }
      const {
          hd_video: _0x233be9,
          sd_video: _0x4cee1a,
          title: _0x1c5a60,
        } = _0x559426.data.result,
        _0x2fab25 = _0x233be9 || _0x4cee1a
      await _0x13f6d8.sendMessage(
        _0x18f82f,
        {
          video: { url: _0x2fab25 },
          mimetype: 'video/mp4',
          caption: _0x1c5a60,
        },
        { quoted: _0x3258f1 }
      )
    } catch (_0x163bdd) {
      console.error(_0x163bdd)
      _0x22486a('\u274C An error occurred while processing your request.')
    }
  }
)
cmd(
  {
    pattern: 'tinyurl',
    react: '\uD83D\uDD17',
    desc: 'Generate a TinyURL from a long URL.',
    category: 'tools',
    use: '.tinyurl <long URL>',
    filename: __filename,
  },
  async (
    _0x3f092e,
    _0x31780b,
    _0x2998b6,
    { from: _0x19e7b2, args: _0x47215f, reply: _0x58c95f }
  ) => {
    try {
      const _0x3fa526 = _0x47215f[0]
      if (!_0x3fa526) {
        return _0x58c95f('*Please provide a long URL to shorten.*')
      }
      _0x58c95f('*\uD83D\uDD17 Generating TinyURL...*')
      const _0x59605e =
          'https://api.giftedtech.web.id/api/tools/tinyurl?apikey=gifted&url=' +
          encodeURIComponent(_0x3fa526),
        _0x309939 = await axios.get(_0x59605e)
      if (!_0x309939.data.success) {
        return _0x58c95f('\u274C Failed to generate TinyURL.')
      }
      const { result: _0x8feabb } = _0x309939.data
      await _0x58c95f("Here's your TinyURL: " + _0x8feabb)
    } catch (_0x1145ed) {
      console.error(_0x1145ed)
      _0x58c95f('\u274C An error occurred while processing your request.')
    }
  }
)
