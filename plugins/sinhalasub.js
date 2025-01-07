const axios = require('axios'),
  { cmd, commands } = require('../command'),
  fs = require('fs'),
  path = require('path'),
  cheerio = require('cheerio'),
  { sinhalaSub } = require('mrnima-moviedl')
cmd(
  {
    pattern: 'hashi',
    alias: ['sinhalasub'],
    react: '\uD83D\uDCD1',
    category: 'download',
    desc: 'Search movies on sinhalasub and get download links',
    filename: __filename,
  },
  async (
    _0x13c9aa,
    _0x2123e1,
    _0x26bf84,
    { from: _0x2beada, q: _0x19515d, reply: _0x54059c }
  ) => {
    try {
      if (!_0x19515d) {
        return await _0x54059c(
          '*​🇵​​🇱​​🇪​​🇦​​🇸​​🇪​ ​🇸​​🇪​​🇳​​🇩​ ​🇲​​🇴​​🇻​​🇮​​🇪​ ​🇳​​🇦​​🇲​​🇪​!😔*'
        )
      }
      var _0x3904c9 = await sinhalaSub()
      const _0x4d4428 = await _0x3904c9.search(_0x19515d),
        _0x1ff073 = _0x4d4428.result.slice(0, 10)
      if (!_0x1ff073 || _0x1ff073.length === 0) {
        return await _0x54059c('No results found for: ' + _0x19515d)
      }
      let _0x49c238 =
        '\uD83D\uDD22 *ℙ𝕝𝕖𝕒𝕤𝕖 𝕣𝕖𝕡𝕝𝕪 𝕨𝕚𝕥𝕙 𝕥𝕙𝕖 𝕟𝕦𝕞𝕓𝕖𝕣 𝕪𝕠𝕦 𝕨𝕒𝕟𝕥 𝕥𝕠 𝕤𝕖𝕝𝕖𝕔𝕥*\n\n\uD83D\uDCFD️ *𝗦𝗘𝗔𝗥𝗖𝗛 𝗥𝗘𝗦𝗨𝗟𝗧𝗦 𝗙𝗢𝗥* "' +
        _0x19515d +
        '":\n\n'
      _0x1ff073.forEach((_0x45ce4b, _0xee64bc) => {
        _0x49c238 +=
          '*' +
          (_0xee64bc + 1) +
          '.* ' +
          _0x45ce4b.title +
          '\n\uD83D\uDD17 Link: ' +
          _0x45ce4b.link +
          '\n\n'
      })
      const _0x37a70e = await _0x13c9aa.sendMessage(
          _0x2beada,
          {
            text: _0x49c238,
            contextInfo: {
              mentionedJid: ['94760698006@s.whatsapp.net'],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: '',
                newsletterName: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 \u273B',
                serverMessageId: 999,
              },
              externalAdReply: {
                title: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈',
                body: '𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀',
                mediaType: 1,
                sourceUrl: 'https://github.com/laksidunimsara1',
                thumbnailUrl:
                  'https://raw.githubusercontent.com/lakiduofficial/laksidu/refs/heads/main/WhatsApp%20Image%202025-01-07%20at%203.55.23%20PM.jpeg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              },
            },
          },
          { quoted: _0x26bf84 }
        ),
        _0x14c96d = _0x37a70e.key.id
      _0x13c9aa.ev.on('messages.upsert', async (_0x2a3ec4) => {
        const _0x597641 = _0x2a3ec4.messages[0]
        if (!_0x597641.message) {
          return
        }
        const _0x473a9c =
            _0x597641.message.conversation ||
            _0x597641.message.extendedTextMessage?.text,
          _0x33c323 =
            _0x597641.message.extendedTextMessage &&
            _0x597641.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x14c96d
        if (_0x33c323) {
          const _0x5eee4f = parseInt(_0x473a9c.trim())
          if (
            !isNaN(_0x5eee4f) &&
            _0x5eee4f > 0 &&
            _0x5eee4f <= _0x1ff073.length
          ) {
            const _0xc9cd73 = _0x1ff073[_0x5eee4f - 1],
              _0x246d4a =
                'https://api-site-2.vercel.app/api/sinhalasub/movie?url=' +
                encodeURIComponent(_0xc9cd73.link)
            try {
              const _0x3bc443 = await axios.get(_0x246d4a),
                _0x2ca307 = _0x3bc443.data.result,
                _0x33cde5 = _0x2ca307.dl_links || []
              if (_0x33cde5.length === 0) {
                return await _0x54059c('No PixelDrain links found.')
              }
              let _0x47cefa =
                '\uD83D\uDD22 *𝙋𝙡𝙚𝙖𝙨𝙚 𝙧𝙚𝙥𝙡𝙮 𝙬𝙞𝙩𝙝 𝙩𝙝𝙚 𝙣𝙪𝙢𝙗𝙚𝙧 𝙮𝙤𝙪 𝙬𝙖𝙣𝙩 𝙩𝙤 𝙨𝙚𝙡𝙚𝙘𝙩*\n\n\uD83C\uDFA5 *' +
                _0x2ca307.title +
                '*\n\n'
              _0x47cefa += '*📽️𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐎𝐕𝐈𝐄 𝐋𝐈𝐍𝐊📽️:*\n'
              _0x33cde5.forEach((_0x5991e7, _0x287db8) => {
                _0x47cefa +=
                  '*' +
                  (_0x287db8 + 1) +
                  '.* ' +
                  _0x5991e7.quality +
                  ' - ' +
                  _0x5991e7.size +
                  '\n\uD83D\uDD17 Link: ' +
                  _0x5991e7.link +
                  '\n\n'
              })
              const _0x494148 = await _0x13c9aa.sendMessage(
                  _0x2beada,
                  {
                    text: _0x47cefa,
                    contextInfo: {
                      mentionedJid: ['94760698006@s.whatsapp.net'],
                      groupMentions: [],
                      forwardingScore: 1,
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 \u273B',
                        serverMessageId: 999,
                      },
                      externalAdReply: {
                        title: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈',
                        body: '𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀',
                        mediaType: 1,
                        sourceUrl: 'https://github.com/laksidunimsara1',
                        thumbnailUrl:
                          'https://raw.githubusercontent.com/lakiduofficial/laksidu/refs/heads/main/WhatsApp%20Image%202025-01-07%20at%203.55.23%20PM.jpeg',
                        renderLargerThumbnail: false,
                        showAdAttribution: true,
                      },
                    },
                  },
                  { quoted: _0x597641 }
                ),
                _0x14738c = _0x494148.key.id
              _0x13c9aa.ev.on('messages.upsert', async (_0x2785ec) => {
                const _0x13d095 = _0x2785ec.messages[0]
                if (!_0x13d095.message) {
                  return
                }
                const _0x220c58 =
                    _0x13d095.message.conversation ||
                    _0x13d095.message.extendedTextMessage?.text,
                  _0x11b5c0 =
                    _0x13d095.message.extendedTextMessage &&
                    _0x13d095.message.extendedTextMessage.contextInfo
                      .stanzaId === _0x14738c
                if (_0x11b5c0) {
                  const _0x3f7e40 = parseInt(_0x220c58.trim())
                  if (
                    !isNaN(_0x3f7e40) &&
                    _0x3f7e40 > 0 &&
                    _0x3f7e40 <= _0x33cde5.length
                  ) {
                    const _0x39807d = _0x33cde5[_0x3f7e40 - 1],
                      _0x57f385 = _0x39807d.link.split('/').pop()
                    await _0x13c9aa.sendMessage(_0x2beada, {
                      react: {
                        text: '\u2B07️',
                        key: _0x494148.key,
                      },
                    })
                    await _0x13c9aa.sendMessage(
                      _0x2beada,
                      {
                        text: '*Downloading your movie... \uD83D\uDCE5*\n*Wait few minits...*\n\n> *\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ*',
                        contextInfo: {
                          mentionedJid: ['94760698006@s.whatsapp.net'],
                          groupMentions: [],
                          forwardingScore: 1,
                          isForwarded: true,
                          forwardedNewsletterMessageInfo: {
                            newsletterJid: '',
                            newsletterName: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 \u273B',
                            serverMessageId: 999,
                          },
                          externalAdReply: {
                            title: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈',
                            body: '𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀',
                            mediaType: 1,
                            sourceUrl: 'https://github.com/laksidunimsara1',
                            thumbnailUrl:
                              'https://raw.githubusercontent.com/lakiduofficial/laksidu/refs/heads/main/WhatsApp%20Image%202025-01-07%20at%203.55.23%20PM.jpeg',
                            renderLargerThumbnail: false,
                            showAdAttribution: true,
                          },
                        },
                      },
                      { quoted: _0x26bf84 }
                    )
                    const _0x4bee71 =
                      'https://pixeldrain.com/api/file/' + _0x57f385
                    await _0x13c9aa.sendMessage(_0x2beada, {
                      react: {
                        text: '\u2B06',
                        key: _0x494148.key,
                      },
                    })
                    await _0x13c9aa.sendMessage(
                      _0x2beada,
                      {
                        document: { url: _0x4bee71 },
                        mimetype: 'video/mp4',
                        fileName:
                          _0x2ca307.title + ' - ' + _0x39807d.quality + '.mp4',
                        caption:
                          _0x2ca307.title +
                          '\nQuality: ' +
                          _0x39807d.quality +
                          '\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ*',
                        contextInfo: {
                          mentionedJid: ['94760698006@s.whatsapp.net'],
                          groupMentions: [],
                          forwardingScore: 1,
                          isForwarded: true,
                          forwardedNewsletterMessageInfo: {
                            newsletterJid: '',
                            newsletterName: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 \u273B',
                            serverMessageId: 999,
                          },
                          externalAdReply: {
                            title: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈',
                            body: '𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀',
                            mediaType: 1,
                            sourceUrl: 'https://github.com/laksidunimsara1',
                            thumbnailUrl:
                              'https://raw.githubusercontent.com/lakiduofficial/laksidu/refs/heads/main/WhatsApp%20Image%202025-01-07%20at%203.55.23%20PM.jpeg',
                            renderLargerThumbnail: false,
                            showAdAttribution: true,
                          },
                        },
                      },
                      { quoted: _0x26bf84 }
                    )
                    await _0x13c9aa.sendMessage(_0x2beada, {
                      react: {
                        text: '\u2705',
                        key: _0x26bf84.key,
                      },
                    })
                  } else {
                    await _0x54059c(
                      'Invalid selection. Please reply with a valid number.'
                    )
                  }
                }
              })
            } catch (_0x3f0504) {
              console.error('Error fetching movie details:', _0x3f0504)
              await _0x54059c(
                'An error occurred while fetching movie details. Please try again.'
              )
            }
          } else {
            await _0x54059c(
              'Invalid selection. Please reply with a valid number.'
            )
          }
        }
      })
    } catch (_0x7e47d) {
      console.error('Error during search:', _0x7e47d)
      _0x54059c('*An error occurred while searching!*')
    }
  }
)
cmd(
  {
    pattern: 'ginisisila',
    alias: ['cartoon'],
    react: '\uD83D\uDCD1',
    category: 'download',
    desc: 'ginisisilacartoon.net',
    filename: __filename,
  },
  async (
    _0x1d2873,
    _0xd216d2,
    _0x163ef5,
    { from: _0x21e02f, q: _0x16580e, isDev: _0x4ac3b2, reply: _0x2a24ca }
  ) => {
    try {
      if (!_0x16580e) {
        return await _0x2a24ca(
          '*Please provide a search query! (e.g., Garfield)*'
        )
      }
      const _0x1c649f =
          'https://ginisisilacartoon.net/search.php?q=' +
          encodeURIComponent(_0x16580e),
        _0x45bf90 = await axios.get(_0x1c649f),
        _0x15eb94 = cheerio.load(_0x45bf90.data)
      let _0x3442b1 = []
      _0x15eb94('div.inner-video-cell').each((_0x17a69e, _0x91a99e) => {
        const _0x435894 = _0x15eb94(_0x91a99e)
            .find('div.video-title > a')
            .attr('title'),
          _0x3ac96d = _0x15eb94(_0x91a99e)
            .find('div.posted-time')
            .text()
            .trim(),
          _0x2afa6a = _0x15eb94(_0x91a99e)
            .find('div.video-title > a')
            .attr('href'),
          _0x12c713 = _0x15eb94(_0x91a99e)
            .find('div.inner-video-thumb-wrapper img')
            .attr('src')
        _0x435894 &&
          _0x2afa6a &&
          _0x3442b1.push({
            title: _0x435894,
            postedTime: _0x3ac96d,
            episodeLink: 'https://ginisisilacartoon.net/' + _0x2afa6a,
            imageUrl: _0x12c713,
          })
      })
      if (_0x3442b1.length === 0) {
        return await _0x2a24ca('No results found for: ' + _0x16580e)
      }
      let _0x26cf8c =
        '\uD83D\uDD22 *Please reply with the number you want to select*\n\n\uD83D\uDCFA Search Results for *' +
        _0x16580e +
        ':*\n\n'
      _0x3442b1.forEach((_0x1b4e89, _0xfb1300) => {
        _0x26cf8c +=
          '*' +
          (_0xfb1300 + 1) +
          '.* ' +
          _0x1b4e89.title +
          '\n\uD83D\uDDD3️ Posted: ' +
          _0x1b4e89.postedTime +
          '\n\uD83D\uDD17 Link: ' +
          _0x1b4e89.episodeLink +
          '\n\n'
      })
      const _0x5dd19f = await _0x1d2873.sendMessage(
          _0x21e02f,
          {
            text: _0x26cf8c,
            contextInfo: {
              mentionedJid: ['94760698006@s.whatsapp.net'],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: '',
                newsletterName: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 \u273B',
                serverMessageId: 999,
              },
              externalAdReply: {
                title: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈',
                body: '𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀',
                mediaType: 1,
                sourceUrl: 'https://github.com/laksidunimsara1',
                thumbnailUrl:
                  'https://raw.githubusercontent.com/lakiduofficial/laksidu/refs/heads/main/WhatsApp%20Image%202025-01-07%20at%203.55.23%20PM.jpeg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              },
            },
          },
          { quoted: _0x163ef5 }
        ),
        _0x44e901 = _0x5dd19f.key.id
      _0x1d2873.ev.on('messages.upsert', async (_0x275d84) => {
        const _0xd06d0b = _0x275d84.messages[0]
        if (!_0xd06d0b.message) {
          return
        }
        const _0x5984f4 =
            _0xd06d0b.message.conversation ||
            _0xd06d0b.message.extendedTextMessage?.text,
          _0x14201e = _0xd06d0b.key.remoteJid,
          _0x3cb6dc =
            _0xd06d0b.message.extendedTextMessage &&
            _0xd06d0b.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x44e901
        if (_0x3cb6dc) {
          const _0x434909 = parseInt(_0x5984f4.trim())
          if (
            !isNaN(_0x434909) &&
            _0x434909 > 0 &&
            _0x434909 <= _0x3442b1.length
          ) {
            const _0x5acb02 = _0x3442b1[_0x434909 - 1],
              _0x2c3271 =
                '*\uD83E\uDE84 ɴᴀᴍᴇ:-* ' +
                _0x5acb02.title +
                '\n\u23F3 *ᴅᴀᴛᴇ:-* ' +
                _0x5acb02.postedTime +
                '\n\uD83D\uDCCE *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- ' +
                _0x5acb02.episodeLink +
                '\n\n\u2618 *We are uploading the Movie/Episode you requested.*',
              _0x56b7cf = {
                image: { url: _0x5acb02.imageUrl },
                caption: _0x2c3271,
              }
            await _0x1d2873.sendMessage(_0x14201e, _0x56b7cf, {
              quoted: _0xd06d0b,
            })
            const _0x315dfd = await axios.get(_0x5acb02.episodeLink),
              _0x5882dd = cheerio.load(_0x315dfd.data),
              _0xb4011a = _0x5882dd('div#player-holder iframe').attr('src')
            if (_0xb4011a) {
              const _0x5f5be3 =
                'https://www.dark-yasiya-api.site/download/ginisisila?url=' +
                _0xb4011a
              try {
                const _0x1e19fb = await axios.get(_0x5f5be3),
                  _0x5d691b = _0x1e19fb.result.dl_link
                _0x5d691b
                  ? await _0x1d2873.sendMessage(
                      _0x14201e,
                      {
                        document: { url: _0x5d691b },
                        mimetype: 'video/mp4',
                        fileName: 'Sadeesha | ' + _0x5acb02.title + '.mp4',
                        caption:
                          _0x5acb02.title +
                          ' |  *𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀*\n\n> 𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈',
                        contextInfo: {
                          mentionedJid: ['94760698006@s.whatsapp.net'],
                          groupMentions: [],
                          forwardingScore: 1,
                          isForwarded: true,
                          forwardedNewsletterMessageInfo: {
                            newsletterJid: '',
                            newsletterName: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 \u273B',
                            serverMessageId: 999,
                          },
                          externalAdReply: {
                            title: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈',
                            body: '𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀',
                            mediaType: 1,
                            sourceUrl: 'https://github.com/laksidunimsara1',
                            thumbnailUrl:
                              'https://raw.githubusercontent.com/lakiduofficial/laksidu/refs/heads/main/WhatsApp%20Image%202025-01-07%20at%203.55.23%20PM.jpeg',
                            renderLargerThumbnail: false,
                            showAdAttribution: true,
                          },
                        },
                      },
                      { quoted: _0xd06d0b }
                    )
                  : await _0x2a24ca(
                      'Failed to retrieve the download link for this episode.'
                    )
              } catch (_0xef63b4) {
                console.error('Error fetching the download link:', _0xef63b4)
                await _0x2a24ca(
                  'An error occurred while trying to fetch the download link.'
                )
              }
            } else {
              await _0x2a24ca('No downloadable link found for this episode.')
            }
          } else {
            await _0x2a24ca('Please reply with a valid number from the list.')
          }
        }
      })
    } catch (_0x387561) {
      _0x2a24ca('*Error occurred while scraping!*')
      console.error(_0x387561)
    }
  }
)
cmd(
  {
    pattern: 'baiscope',
    react: '\uD83D\uDCD1',
    category: 'download',
    desc: 'baiscope.lk',
    filename: __filename,
  },
  async (
    _0x4c53d1,
    _0x47cf36,
    _0x3832c8,
    { from: _0x20fd1e, q: _0x205422, isDev: _0x289e57, reply: _0x3acc2a }
  ) => {
    try {
      if (!_0x205422) {
        return await _0x3acc2a(
          '*Please provide a search query! (e.g., Avatar)*'
        )
      }
      const _0xfc657b =
          'https://www.baiscope.lk/?s=' + encodeURIComponent(_0x205422),
        _0x2264b4 = await axios.get(_0xfc657b),
        _0x39c008 = cheerio.load(_0x2264b4.data)
      let _0x1d475e = []
      _0x39c008('article.elementor-post').each((_0x50d475, _0x1a6b50) => {
        const _0x2270fe = _0x39c008(_0x1a6b50)
            .find('h5.elementor-post__title > a')
            .text()
            .trim(),
          _0x3526f4 = _0x39c008(_0x1a6b50)
            .find('h5.elementor-post__title > a')
            .attr('href'),
          _0x43cea5 = _0x39c008(_0x1a6b50)
            .find('.elementor-post__thumbnail img')
            .attr('src')
        _0x2270fe &&
          _0x3526f4 &&
          _0x43cea5 &&
          _0x1d475e.push({
            title: _0x2270fe,
            episodeLink: _0x3526f4,
            imgUrl: _0x43cea5,
          })
      })
      if (_0x1d475e.length === 0) {
        return await _0x3acc2a('No results found for: ' + _0x205422)
      }
      let _0x193587 = '\uD83D\uDCFA Search Results for *' + _0x205422 + ':*\n\n'
      _0x1d475e.forEach((_0x341aaa, _0xb7314b) => {
        _0x193587 +=
          '*' +
          (_0xb7314b + 1) +
          '.* ' +
          _0x341aaa.title +
          '\n\uD83D\uDD17 Link: ' +
          _0x341aaa.episodeLink +
          '\n\n'
      })
      const _0x5cf1b8 = await _0x4c53d1.sendMessage(
          _0x20fd1e,
          { text: _0x193587 },
          { quoted: _0x3832c8 }
        ),
        _0x3a4aff = _0x5cf1b8.key.id
      _0x4c53d1.ev.on('messages.upsert', async (_0x31f8f9) => {
        const _0x25496f = _0x31f8f9.messages[0]
        if (!_0x25496f.message) {
          return
        }
        const _0x275fc2 =
            _0x25496f.message.conversation ||
            _0x25496f.message.extendedTextMessage?.text,
          _0x44f970 = _0x25496f.key.remoteJid,
          _0x28ca5e =
            _0x25496f.message.extendedTextMessage &&
            _0x25496f.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x3a4aff
        if (_0x28ca5e) {
          const _0x5ddbfe = parseInt(_0x275fc2.trim())
          if (
            !isNaN(_0x5ddbfe) &&
            _0x5ddbfe > 0 &&
            _0x5ddbfe <= _0x1d475e.length
          ) {
            const _0x33ec54 = _0x1d475e[_0x5ddbfe - 1],
              _0x58c70a = await axios.get(_0x33ec54.episodeLink),
              _0x35d8a4 = cheerio.load(_0x58c70a.data),
              _0x575266 = _0x35d8a4('a.dlm-buttons-button').attr('href')
            if (_0x575266) {
              await _0x4c53d1.sendMessage(
                _0x44f970,
                {
                  image: { url: _0x33ec54.imgUrl },
                  caption:
                    '\uD83C\uDFAC *' +
                    _0x33ec54.title +
                    '*\n\uD83D\uDD17 Link: ' +
                    _0x33ec54.episodeLink +
                    '\n\u2B07️ Download will follow.',
                },
                { quoted: _0x25496f }
              )
              const _0x3facb6 = path.join(__dirname, 'downloaded_episode.zip'),
                _0x26f02c = fs.createWriteStream(_0x3facb6),
                _0x243cb1 = await axios({
                  url: _0x575266,
                  method: 'GET',
                  responseType: 'stream',
                })
              _0x243cb1.data.pipe(_0x26f02c)
              _0x26f02c.on('finish', async () => {
                await _0x4c53d1.sendMessage(
                  _0x44f970,
                  {
                    document: { url: _0x3facb6 },
                    mimetype: 'application/zip',
                    fileName: _0x33ec54.title + '.zip',
                    caption: '*' + _0x33ec54.title + '*\n\n> 𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 \u273B',
                    contextInfo: {
                      mentionedJid: ['94760698006@s.whatsapp.net'],
                      groupMentions: [],
                      forwardingScore: 1,
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 \u273B',
                        serverMessageId: 999,
                      },
                      externalAdReply: {
                        title: '𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈',
                        body: '𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀',
                        mediaType: 1,
                        sourceUrl: 'https://github.com/laksidunimsara1',
                        thumbnailUrl:
                          'https://raw.githubusercontent.com/lakiduofficial/laksidu/refs/heads/main/WhatsApp%20Image%202025-01-07%20at%203.55.23%20PM.jpeg',
                        renderLargerThumbnail: false,
                        showAdAttribution: true,
                      },
                    },
                  },
                  { quoted: _0x25496f }
                )
                fs.unlinkSync(_0x3facb6)
              })
              _0x26f02c.on('error', (_0x2aecc4) => {
                console.error('Error downloading ZIP file:', _0x2aecc4)
                _0x3acc2a('*Error downloading the episode ZIP file.*')
              })
            } else {
              await _0x3acc2a(
                '*Download link not found for the selected episode.*'
              )
            }
          } else {
            await _0x3acc2a(
              '*Invalid selection. Please choose a valid number.*'
            )
          }
        }
      })
    } catch (_0x8d7e0f) {
      console.error(_0x8d7e0f)
      await _0x3acc2a('*An error occurred while scraping the data.*')
    }
  }
)
