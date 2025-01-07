const { cmd, commands } = require('../command'),
  yts = require('yt-search'),
  { fetchJson } = require('../lib/functions'),
  { ytsearch, ytmp3 } = require('@dark-yasiya/yt-dl.js'),
  axios = require('axios')
async function ytmp4(_0x56de36, _0x298a8d) {
  try {
    if (!_0x56de36 || !_0x298a8d) {
      throw new Error('url and format parameters are required.')
    }
    const _0x53a065 = parseInt(_0x298a8d.replace('p', ''), 10),
      _0x2ce328 = {
        button: 1,
        start: 1,
        end: 1,
        format: _0x53a065,
        url: _0x56de36,
      },
      _0xda2a97 = {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        Origin: 'https://loader.to',
        Referer: 'https://loader.to',
        'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
        'Sec-Ch-Ua-Mobile': '?1',
        'Sec-Ch-Ua-Platform': '"Android"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
      },
      _0x266528 = await axios.get(
        'https://ab.cococococ.com/ajax/download.php',
        {
          params: _0x2ce328,
          headers: _0xda2a97,
        }
      ),
      _0x5c642e = _0x266528.data.id,
      _0x3b188e = async () => {
        const _0xae9021 = { id: _0x5c642e }
        try {
          const _0x30a4ad = await axios.get(
              'https://p.oceansaver.in/ajax/progress.php',
              {
                params: _0xae9021,
                headers: _0xda2a97,
              }
            ),
            {
              progress: _0x199a55,
              download_url: _0x29270d,
              text: _0x1290ff,
            } = _0x30a4ad.data
          return _0x1290ff === 'Finished'
            ? _0x29270d
            : (await new Promise((_0x3008bb) => setTimeout(_0x3008bb, 1000)),
              _0x3b188e())
        } catch (_0x16e399) {
          throw new Error('Error in progress check: ' + _0x16e399.message)
        }
      }
    return await _0x3b188e()
  } catch (_0x280b0a) {
    return console.error('Error:', _0x280b0a), { error: _0x280b0a.message }
  }
}
module.exports = { ytmp4: ytmp4 }
function extractYouTubeId(_0x1a3acf) {
  const _0x9388f1 = _0x1a3acf.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return _0x9388f1 ? _0x9388f1[1] : null
}
function convertYouTubeLink(_0x20e9bd) {
  const _0x539572 = extractYouTubeId(_0x20e9bd)
  if (_0x539572) {
    return 'https://www.youtube.com/watch?v=' + _0x539572
  }
  return _0x20e9bd
}
cmd(
  {
    pattern: 'song',
    alias: 'play',
    desc: 'To download songs.',
    react: '\uD83C\uDFB5',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x260a13,
    _0x41f02a,
    _0x31cc0d,
    {
      from: _0x369710,
      quoted: _0x30d73c,
      body: _0x9af5e4,
      isCmd: _0x11159c,
      command: _0x41626d,
      args: _0x5093aa,
      q: _0x17e208,
      isGroup: _0x2516fd,
      sender: _0x6bb993,
      senderNumber: _0x387ac6,
      botNumber2: _0x2cfcab,
      botNumber: _0x4888a9,
      pushname: _0x5bbb85,
      isMe: _0x79efb6,
      isOwner: _0xfd3e31,
      groupMetadata: _0x25cfe5,
      groupName: _0x48e576,
      participants: _0x566c1c,
      groupAdmins: _0x9b430,
      isBotAdmins: _0x125bbf,
      isAdmins: _0x19382b,
      reply: _0x4dd229,
    }
  ) => {
    try {
      if (!_0x17e208) {
        return _0x4dd229('Please give me a URL or title.')
      }
      _0x17e208 = convertYouTubeLink(_0x17e208)
      const _0x1c66ee = await yts(_0x17e208),
        _0x5b9edc = _0x1c66ee.videos[0],
        _0xeda539 = _0x5b9edc.url
      let _0x4cf7ff =
        '\n*\u2756HASHI-MUSIC\u2756*\n\u274D *ᴛɪᴛʟᴇ :* ' +
        _0x5b9edc.title +
        '\n\u274D *ᴅᴜʀᴀᴛɪᴏɴ :* ' +
        _0x5b9edc.timestamp +
        '\n\u274D *ᴠɪᴇᴡꜱ :* ' +
        _0x5b9edc.views +
        '\n\u274D *ᴜᴘʟᴏᴀᴅ ᴏɴ :* ' +
        _0x5b9edc.ago +
        '\n*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ \uD83C\uDFA7*\n\n*1*     \u2503  *ᴀᴜᴅɪᴏ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ \uD83D\uDCC1*\n\n*2*     \u2503  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n\n> *\u27BASILENT-SOBX-MD*\n'
      const _0x232387 = await _0x260a13.sendMessage(
          _0x369710,
          {
            image: { url: _0x5b9edc.thumbnail },
            caption: _0x4cf7ff,
            contextInfo: {
              mentionedJid: ['923096287432@s.whatsapp.net'],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: '120363189714152560@newsletter',
                newsletterName: '\u2756SILENT-SOBX-MD\u2756',
                serverMessageId: 999,
              },
              externalAdReply: {
                title: '\u2756SILENT-SOBX-MD\u2756',
                body: '\u2756SILENT LOVER432\u2756',
                mediaType: 1,
                sourceUrl: 'https://github.com/SILENTLOVER40/SILENT-SOBX-MD',
                thumbnailUrl: 'https://i.ibb.co/mbGXCfd/Manul-Ofc-X.jpg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              },
            },
          },
          { quoted: _0x41f02a }
        ),
        _0x5de647 = _0x232387.key.id
      _0x260a13.ev.on('messages.upsert', async (_0x2038e6) => {
        const _0x2510d4 = _0x2038e6.messages[0]
        if (!_0x2510d4.message) {
          return
        }
        const _0x58cdc2 =
            _0x2510d4.message.conversation ||
            _0x2510d4.message.extendedTextMessage?.text,
          _0x42d721 = _0x2510d4.key.remoteJid,
          _0xf0cfe9 =
            _0x2510d4.message.extendedTextMessage &&
            _0x2510d4.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x5de647
        if (_0xf0cfe9) {
          await _0x260a13.sendMessage(_0x42d721, {
            react: {
              text: '\u2B07️',
              key: _0x2510d4.key,
            },
          })
          if (_0x58cdc2 === '1') {
            const _0x573731 = await ytmp3(_0xeda539)
            await _0x260a13.sendMessage(_0x42d721, {
              react: {
                text: '\u2B06️',
                key: _0x2510d4.key,
              },
            })
            await _0x260a13.sendMessage(
              _0x42d721,
              {
                audio: { url: _0x573731.download.url },
                mimetype: 'audio/mpeg',
                contextInfo: {
                  mentionedJid: ['923096287432@s.whatsapp.net'],
                  groupMentions: [],
                  forwardingScore: 1,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363189714152560@newsletter',
                    newsletterName: '\u2756SILENT-SOBX-MD\u2756',
                    serverMessageId: 999,
                  },
                  externalAdReply: {
                    title: '\u2756SILENT-SOBX-MD\u2756',
                    body: '\u2756SILENT-SOBX-MD-BOT\u2756',
                    mediaType: 1,
                    sourceUrl: _0x5b9edc.url,
                    thumbnailUrl: _0x5b9edc.thumbnail,
                    renderLargerThumbnail: false,
                    showAdAttribution: true,
                  },
                },
              },
              { quoted: _0x2510d4 }
            )
            await _0x260a13.sendMessage(_0x42d721, {
              react: {
                text: '\u2705',
                key: _0x2510d4.key,
              },
            })
          } else {
            if (_0x58cdc2 === '2') {
              const _0x26d759 = await ytmp3(_0xeda539)
              await _0x260a13.sendMessage(_0x42d721, {
                react: {
                  text: '\u2B06️',
                  key: _0x2510d4.key,
                },
              })
              await _0x260a13.sendMessage(
                _0x42d721,
                {
                  document: { url: _0x26d759.download.url },
                  mimetype: 'audio/mp3',
                  fileName: _0x5b9edc.title + '.mp3',
                  caption:
                    '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ \xB7 \xB7 \xB7\u2074\xB3\xB2*\n ',
                  contextInfo: {
                    mentionedJid: ['923096287432@s.whatsapp.net'],
                    groupMentions: [],
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363189714152560@newsletter',
                      newsletterName: '\u2756SILENT-SOBX-MD\u2756',
                      serverMessageId: 999,
                    },
                    externalAdReply: {
                      title: '\u2756SILENT-SOBX-MD\u2756',
                      body: '\u2756SILENT LOVER432\u2756',
                      mediaType: 1,
                      sourceUrl: _0x5b9edc.url,
                      thumbnailUrl: _0x5b9edc.thumbnail,
                      renderLargerThumbnail: false,
                      showAdAttribution: true,
                    },
                  },
                },
                { quoted: _0x2510d4 }
              )
              await _0x260a13.sendMessage(_0x42d721, {
                react: {
                  text: '\u2705',
                  key: _0x2510d4.key,
                },
              })
              await _0x260a13.sendMessage(_0x42d721, { delete: _0x232387.key })
            }
          }
        }
      })
    } catch (_0x142ed8) {
      console.log(_0x142ed8)
      _0x4dd229('' + _0x142ed8)
    }
  }
)
cmd(
  {
    pattern: 'video',
    desc: 'To download videos.',
    react: '\uD83C\uDFA5',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x20244f,
    _0x240a18,
    _0x4afdf5,
    {
      from: _0x1905a3,
      quoted: _0x280dc9,
      body: _0x1f6a1a,
      isCmd: _0x1f7df3,
      command: _0x95a805,
      args: _0x2a8972,
      q: _0x44f98a,
      isGroup: _0x4b1e70,
      sender: _0x4fc8b2,
      senderNumber: _0x3fb530,
      botNumber2: _0x32c275,
      botNumber: _0x36f5e2,
      pushname: _0x52d527,
      isMe: _0x25d53c,
      isOwner: _0x5a8c72,
      groupMetadata: _0x2ddd0b,
      groupName: _0x5603ce,
      participants: _0xafd1e9,
      groupAdmins: _0x4eadfe,
      isBotAdmins: _0x38d3d9,
      isAdmins: _0x51b2ca,
      reply: _0x15ddd2,
    }
  ) => {
    try {
      if (!_0x44f98a) {
        return _0x15ddd2('Please give me a URL or title.')
      }
      _0x44f98a = convertYouTubeLink(_0x44f98a)
      const _0x22e72c = await yts(_0x44f98a),
        _0x4c7797 = _0x22e72c.videos[0],
        _0xf637ae = _0x4c7797.url
      let _0x1738de =
        '\n*\u2756SILENT-SOBX-MD-VIDEO\u2756*\n ' +
        _0x4c7797.title +
        '\n\u274D *ᴅᴜʀᴀᴛɪᴏɴ :* ' +
        _0x4c7797.timestamp +
        '\n\u274D *ᴠɪᴇᴡꜱ :* ' +
        _0x4c7797.views +
        '\n\u274D *ᴜᴘʟᴏᴀᴅ ᴏɴ :* ' +
        _0x4c7797.ago +
        '\n\n*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ \uD83C\uDFAC*\n\n*1.1*     \u2503  *360ᴘ*\n*1.2*     \u2503  *480ᴘ*\n*1.3*     \u2503  *720ᴘ*\n*1.4*     \u2503  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ \uD83D\uDCC1*\n\n*2.1*     \u2503  *360ᴘ*\n*2.2*     \u2503  *480ᴘ*\n*2.3*     \u2503  *720ᴘ*\n*2.4*     \u2503  *1080ᴘ*\n\n> *\u27BASILENT-SOBX-MD*\n'
      const _0x30bf6e = await _0x20244f.sendMessage(
          _0x1905a3,
          {
            image: { url: _0x4c7797.thumbnail },
            caption: _0x1738de,
            contextInfo: {
              mentionedJid: ['923096287432@s.whatsapp.net'],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: '120363189714152560@newsletter',
                newsletterName: '\u2756SILENT-SOBX-MD\u2756',
                serverMessageId: 999,
              },
              externalAdReply: {
                title: '\u2756SILENT-SOBX-MD\u2756',
                body: '\u2756SILENT LOVER432\u2756',
                mediaType: 1,
                sourceUrl: 'https://github.com/SILENTLOVER40/SILENT-SOBX-MD',
                thumbnailUrl: 'https://i.ibb.co/mbGXCfd/Manul-Ofc-X.jpg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              },
            },
          },
          { quoted: _0x240a18 }
        ),
        _0xc0ced9 = _0x30bf6e.key.id
      _0x20244f.ev.on('messages.upsert', async (_0x25cda3) => {
        const _0xb8cc54 = _0x25cda3.messages[0]
        if (!_0xb8cc54.message) {
          return
        }
        const _0x527966 =
            _0xb8cc54.message.conversation ||
            _0xb8cc54.message.extendedTextMessage?.text,
          _0xe915f4 = _0xb8cc54.key.remoteJid,
          _0x2c13b8 =
            _0xb8cc54.message.extendedTextMessage &&
            _0xb8cc54.message.extendedTextMessage.contextInfo.stanzaId ===
              _0xc0ced9
        if (_0x2c13b8) {
          await _0x20244f.sendMessage(_0xe915f4, {
            react: {
              text: '\u2B07️',
              key: _0xb8cc54.key,
            },
          })
          if (_0x527966 === '1.1') {
            const _0x4ef133 = await ytmp4('' + _0xf637ae, '360p')
            await _0x20244f.sendMessage(_0xe915f4, { delete: _0x30bf6e.key })
            await _0x20244f.sendMessage(_0xe915f4, {
              react: {
                text: '\u2B06️',
                key: _0xb8cc54.key,
              },
            })
            await _0x20244f.sendMessage(
              _0xe915f4,
              {
                video: { url: _0x4ef133 },
                caption:
                  '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ \xB7 \xB7 \xB7\u2074\xB3\xB2*\n',
                contextInfo: {
                  mentionedJid: ['923096287432@s.whatsapp.net'],
                  groupMentions: [],
                  forwardingScore: 1,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363189714152560@newsletter',
                    newsletterName: '\u2756SILENT-SOBX-MD\u2756',
                    serverMessageId: 999,
                  },
                  externalAdReply: {
                    title: '\u2756SILENT-SOBX-MD\u2756',
                    body: '\u2756SILENT LOVER432\u2756',
                    mediaType: 1,
                    sourceUrl: _0x4c7797.url,
                    thumbnailUrl: _0x4c7797.thumbnail,
                    renderLargerThumbnail: false,
                    showAdAttribution: true,
                  },
                },
              },
              { quoted: _0xb8cc54 }
            )
            await _0x20244f.sendMessage(_0xe915f4, {
              react: {
                text: '\u2705',
                key: _0xb8cc54.key,
              },
            })
          } else {
            if (_0x527966 === '1.2') {
              const _0xecaf11 = await ytmp4('' + _0xf637ae, '480')
              await _0x20244f.sendMessage(_0xe915f4, { delete: _0x30bf6e.key })
              await _0x20244f.sendMessage(_0xe915f4, {
                react: {
                  text: '\u2B06️',
                  key: _0xb8cc54.key,
                },
              })
              await _0x20244f.sendMessage(
                _0xe915f4,
                {
                  video: { url: _0xecaf11 },
                  caption:
                    '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ \xB7 \xB7 \xB7\u2074\xB3\xB2*\n',
                  contextInfo: {
                    mentionedJid: ['923096287432@s.whatsapp.net'],
                    groupMentions: [],
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363189714152560@newsletter',
                      newsletterName: '\u2756SILENT-SOBX-MD\u2756',
                      serverMessageId: 999,
                    },
                    externalAdReply: {
                      title: '\u2756SILENT-SOBX-MD\u2756',
                      body: '\u2756SILENT LOVER432\u2756',
                      mediaType: 1,
                      sourceUrl: _0x4c7797.url,
                      thumbnailUrl: _0x4c7797.thumbnail,
                      renderLargerThumbnail: false,
                      showAdAttribution: true,
                    },
                  },
                },
                { quoted: _0xb8cc54 }
              )
              await _0x20244f.sendMessage(_0xe915f4, {
                react: {
                  text: '\u2705',
                  key: _0xb8cc54.key,
                },
              })
            } else {
              if (_0x527966 === '1.3') {
                const _0x4fc7db = await ytmp4('' + _0xf637ae, '720')
                await _0x20244f.sendMessage(_0xe915f4, {
                  delete: _0x30bf6e.key,
                })
                await _0x20244f.sendMessage(_0xe915f4, {
                  react: {
                    text: '\u2B06️',
                    key: _0xb8cc54.key,
                  },
                })
                await _0x20244f.sendMessage(
                  _0xe915f4,
                  {
                    video: { url: _0x4fc7db },
                    caption:
                      '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ \xB7 \xB7 \xB7\u2074\xB3\xB2*\n',
                    contextInfo: {
                      mentionedJid: ['923096287432@s.whatsapp.net'],
                      groupMentions: [],
                      forwardingScore: 1,
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363189714152560@newsletter',
                        newsletterName: '\u2756SILENT-SOBX-MD\u2756',
                        serverMessageId: 999,
                      },
                      externalAdReply: {
                        title: '\u2756SILENT-SOBX-MD\u2756',
                        body: '\u2756SILENT LOVER432\u2756',
                        mediaType: 1,
                        sourceUrl: _0x4c7797.url,
                        thumbnailUrl: _0x4c7797.thumbnail,
                        renderLargerThumbnail: false,
                        showAdAttribution: true,
                      },
                    },
                  },
                  { quoted: _0xb8cc54 }
                )
                await _0x20244f.sendMessage(_0xe915f4, {
                  react: {
                    text: '\u2705',
                    key: _0xb8cc54.key,
                  },
                })
              } else {
                if (_0x527966 === '1.4') {
                  const _0x273e03 = await ytmp4('' + _0xf637ae, '1080')
                  await _0x20244f.sendMessage(_0xe915f4, {
                    delete: _0x30bf6e.key,
                  })
                  await _0x20244f.sendMessage(_0xe915f4, {
                    react: {
                      text: '\u2B06️',
                      key: _0xb8cc54.key,
                    },
                  })
                  await _0x20244f.sendMessage(
                    _0xe915f4,
                    {
                      video: { url: _0x273e03 },
                      caption:
                        '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ \xB7 \xB7 \xB7\u2074\xB3\xB2*\n',
                    },
                    { quoted: _0xb8cc54 }
                  )
                  await _0x20244f.sendMessage(_0xe915f4, {
                    react: {
                      text: '\u2705',
                      key: _0xb8cc54.key,
                    },
                  })
                } else {
                  if (_0x527966 === '2.1') {
                    const _0x1f0666 = await ytmp4('' + _0xf637ae, '360')
                    await _0x20244f.sendMessage(_0xe915f4, {
                      delete: _0x30bf6e.key,
                    })
                    await _0x20244f.sendMessage(_0xe915f4, {
                      react: {
                        text: '\u2B06️',
                        key: _0xb8cc54.key,
                      },
                    })
                    await _0x20244f.sendMessage(
                      _0xe915f4,
                      {
                        document: { url: _0x1f0666 },
                        mimetype: 'video/mp4',
                        fileName: _0x4c7797.title + '.mp4',
                        caption:
                          '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ \xB7 \xB7 \xB7\u2074\xB3\xB2*\n',
                        contextInfo: {
                          mentionedJid: ['923096287432@s.whatsapp.net'],
                          groupMentions: [],
                          forwardingScore: 1,
                          isForwarded: true,
                          forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363189714152560@newsletter',
                            newsletterName: '\u2756SILENT-SOBX-MD\u2756',
                            serverMessageId: 999,
                          },
                          externalAdReply: {
                            title: '\u2756SILENT-SOBX-MD\u2756',
                            body: '\u2756SILENT LOVER432\u2756',
                            mediaType: 1,
                            sourceUrl: _0x4c7797.url,
                            thumbnailUrl: _0x4c7797.thumbnail,
                            renderLargerThumbnail: false,
                            showAdAttribution: true,
                          },
                        },
                      },
                      { quoted: _0xb8cc54 }
                    )
                    await _0x20244f.sendMessage(_0xe915f4, {
                      react: {
                        text: '\u2705',
                        key: _0xb8cc54.key,
                      },
                    })
                  } else {
                    if (_0x527966 === '2.2') {
                      const _0x5f0b71 = await ytmp4('' + _0xf637ae, '480')
                      await _0x20244f.sendMessage(_0xe915f4, {
                        delete: _0x30bf6e.key,
                      })
                      await _0x20244f.sendMessage(_0xe915f4, {
                        react: {
                          text: '\u2B06️',
                          key: _0xb8cc54.key,
                        },
                      })
                      await _0x20244f.sendMessage(
                        _0xe915f4,
                        {
                          document: { url: _0x5f0b71 },
                          mimetype: 'video/mp4',
                          fileName: _0x4c7797.title + '.mp4',
                          caption:
                            '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ \xB7 \xB7 \xB7\u2074\xB3\xB2*\n',
                          contextInfo: {
                            mentionedJid: ['923096287432@s.whatsapp.net'],
                            groupMentions: [],
                            forwardingScore: 1,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                              newsletterJid: '120363189714152560@newsletter',
                              newsletterName: '\u2756SILENT-SOBX-MD\u2756',
                              serverMessageId: 999,
                            },
                            externalAdReply: {
                              title: '\u2727SILENT-SOBX-MD\u2727',
                              body: '\u2756SILENT LOVER432\u2756',
                              mediaType: 1,
                              sourceUrl: _0x4c7797.url,
                              thumbnailUrl: _0x4c7797.thumbnail,
                              renderLargerThumbnail: false,
                              showAdAttribution: true,
                            },
                          },
                        },
                        { quoted: _0xb8cc54 }
                      )
                      await _0x20244f.sendMessage(_0xe915f4, {
                        react: {
                          text: '\u2705',
                          key: _0xb8cc54.key,
                        },
                      })
                    } else {
                      if (_0x527966 === '2.3') {
                        const _0x3a166e = await ytmp4('' + _0xf637ae, '720')
                        await _0x20244f.sendMessage(_0xe915f4, {
                          delete: _0x30bf6e.key,
                        })
                        await _0x20244f.sendMessage(_0xe915f4, {
                          react: {
                            text: '\u2B06️',
                            key: _0xb8cc54.key,
                          },
                        })
                        await _0x20244f.sendMessage(
                          _0xe915f4,
                          {
                            document: { url: _0x3a166e },
                            mimetype: 'video/mp4',
                            fileName: _0x4c7797.title + '.mp4',
                            caption:
                              '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ \xB7 \xB7 \xB7\u2074\xB3\xB2*\n',
                            contextInfo: {
                              mentionedJid: ['923096287432@s.whatsapp.net'],
                              groupMentions: [],
                              forwardingScore: 1,
                              isForwarded: true,
                              forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363189714152560@newsletter',
                                newsletterName: '\u2756SILENT-SOBX-MD\u2756',
                                serverMessageId: 999,
                              },
                              externalAdReply: {
                                title: '\u2756SILENT-SOBX-MD\u2756',
                                body: '\u2756SILENT LOVER432\u2756',
                                mediaType: 1,
                                sourceUrl: _0x4c7797.url,
                                thumbnailUrl: _0x4c7797.thumbnail,
                                renderLargerThumbnail: false,
                                showAdAttribution: true,
                              },
                            },
                          },
                          { quoted: _0xb8cc54 }
                        )
                        await _0x20244f.sendMessage(_0xe915f4, {
                          react: {
                            text: '\u2705',
                            key: _0xb8cc54.key,
                          },
                        })
                      } else {
                        if (_0x527966 === '2.4') {
                          const _0x2a93aa = await ytmp4('' + _0xf637ae, '1080')
                          await _0x20244f.sendMessage(_0xe915f4, {
                            delete: _0x30bf6e.key,
                          })
                          await _0x20244f.sendMessage(_0xe915f4, {
                            react: {
                              text: '\u2B06️',
                              key: _0xb8cc54.key,
                            },
                          })
                          await _0x20244f.sendMessage(
                            _0xe915f4,
                            {
                              document: { url: _0x2a93aa },
                              mimetype: 'video/mp4',
                              fileName: _0x4c7797.title + '.mp4',
                              caption:
                                '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ \xB7 \xB7 \xB7\u2074\xB3\xB2*\n',
                              contextInfo: {
                                mentionedJid: ['923096287432@s.whatsapp.net'],
                                groupMentions: [],
                                forwardingScore: 1,
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                  newsletterJid:
                                    '120363189714152560@newsletter',
                                  newsletterName: '\u2756SILENT-SOBX-MD\u2756',
                                  serverMessageId: 999,
                                },
                                externalAdReply: {
                                  title: 'SILENT-SOBX-MD',
                                  body: 'SILENT LOVER432',
                                  mediaType: 1,
                                  sourceUrl: _0x4c7797.url,
                                  thumbnailUrl: _0x4c7797.thumbnail,
                                  renderLargerThumbnail: false,
                                  showAdAttribution: true,
                                },
                              },
                            },
                            { quoted: _0xb8cc54 }
                          )
                          await _0x20244f.sendMessage(_0xe915f4, {
                            react: {
                              text: '\u2705',
                              key: _0xb8cc54.key,
                            },
                          })
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })
    } catch (_0x2b9e92) {
      console.log(_0x2b9e92)
      _0x15ddd2('' + _0x2b9e92)
    }
  }
)
cmd(
  {
    pattern: 'yta',
    alias: 'ytmp3',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0xa02efa,
    _0x584de0,
    _0x26e802,
    { from: _0x58d971, q: _0x34803b, reply: _0x4c250e }
  ) => {
    try {
      if (!_0x34803b) {
        return await _0x4c250e('*Need a YouTube URL!*')
      }
      const _0x2be6e1 = await fetchJson(
          'https://api.giftedtech.my.id/api/download/ytaud?apikey=gifted&url=' +
            _0x34803b
        ),
        _0x3939aa = _0x2be6e1.result.download_url
      await _0xa02efa.sendMessage(
        _0x58d971,
        {
          audio: { url: _0x3939aa },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x584de0 }
      )
    } catch (_0x2760ed) {
      console.log('First attempt failed:', _0x2760ed)
      try {
        const _0x5d8da3 = await dlyta(_0x34803b)
        await _0xa02efa.sendMessage(
          _0x58d971,
          {
            audio: { url: _0x5d8da3.dl_link },
            mimetype: 'audio/mpeg',
          },
          { quoted: _0x584de0 }
        )
      } catch (_0xb47e6b) {
        console.log('Second attempt failed:', _0xb47e6b)
        await _0x4c250e(
          '*Failed to process the request. Please try again later!*'
        )
      }
    }
  }
)
