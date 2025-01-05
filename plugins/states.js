const fs = require('fs'),
  path = require('path'),
  { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command'),
  { fetchJson } = require('../lib/functions'),
  { downloadMediaMessage } = require('@whiskeysockets/baileys')
function getContentType(_0x46131e) {
  if (!_0x46131e) {
    return null
  }
  if (_0x46131e.conversation) {
    return 'text'
  }
  if (_0x46131e.imageMessage) {
    return 'image'
  }
  if (_0x46131e.videoMessage) {
    return 'video'
  }
  if (_0x46131e.audioMessage) {
    return 'audio'
  }
  if (_0x46131e.documentMessage) {
    return 'document'
  }
  return null
}
let isStatusListenerInitialized = false
function getRandomResponse() {
  const _0x37426e = [
    'Great one!\uD83D\uDD25',
    'Amazing!\uD83D\uDE0D',
    'You nailed it!\uD83D\uDCAF',
    'This is awesome!\uD83D\uDC4F',
    'Keep it up!\uD83D\uDC4D',
    'Well said!\uD83D\uDE4C',
    'That\u2019s lit!\u26A1',
    'So true!\uD83D\uDC4C',
    'Loving this!\uD83D\uDC96',
    'This made me smile!\uD83D\uDE0A',
    'Deep stuff!\uD83E\uDD14',
    'You\u2019re on fire!\uD83D\uDD25',
    'Totally agree!\u2705',
    'Such a vibe!\uD83C\uDFB6',
    'Killing it!\uD83C\uDFAF',
    'Legendary!\uD83C\uDFC6',
    'Well done!\uD83D\uDC4F',
    'Inspiring!\u2728',
    'That\u2019s the spirit!\uD83D\uDCAA',
    'Brilliant!\uD83D\uDCA1',
    'Good times!\u23F3',
    'You\u2019re glowing!\uD83C\uDF1F',
    'Too good!\uD83D\uDE0E',
    'So cool!\uD83C\uDD92',
    'You got this!\uD83D\uDCAA',
    'Making moves!\uD83D\uDE80',
    'Stay blessed!\uD83D\uDE4F',
    'Keep shining!\uD83C\uDF1F',
    'Awesome!\uD83C\uDF08',
    'Well played!\uD83C\uDFC5',
    'Good vibes only!\u270C️',
    'This is gold!\uD83E\uDD47',
    'Too smooth!\uD83D\uDE0F',
    'Pure genius!\uD83E\uDD2F',
    'Incredible!\uD83D\uDE32',
    'Perfection!\uD83D\uDC4C',
    'Well deserved!\uD83C\uDF89',
    'You rock!\uD83E\uDD18',
    'You got style!\uD83D\uDD76️',
    'Epic!\uD83D\uDD25',
    'Top-notch!\uD83C\uDFA9',
    'Pure class!\uD83D\uDD74',
    'Well done, mate!\uD83D\uDC4D',
    'Great stuff!\uD83C\uDFAF',
    'You\u2019re amazing!\uD83C\uDF1F',
    'This is wild!\uD83D\uDD25',
    'I love this!\u2764️',
    'So chill!\uD83D\uDE0E',
    'This slaps!\uD83C\uDFB6',
    'Vibes on point!\uD83D\uDCAF',
    "Can't stop watching!\uD83D\uDC40",
    'That\u2019s genius!\uD83D\uDCA1',
    'You inspire me!\u2728',
    'So funny!\uD83D\uDE02',
    'Hilarious!\uD83E\uDD23',
    'Too real!\uD83E\uDD2F',
    'This is next level!\uD83D\uDE80',
    'Mind blown!\uD83D\uDCA5',
    'Such a masterpiece!\uD83C\uDFA8',
    'Respect!\uD83D\uDE4C',
    'Big energy!\uD83D\uDCA5',
    'Iconic!\uD83C\uDFA5',
    'So uplifting!\uD83D\uDCAB',
    'This is legendary!\uD83C\uDFC6',
    'You always deliver!\uD83D\uDCE6',
    'Never disappoint!\uD83D\uDE0E',
    'On point!\uD83D\uDD1D',
    'Solid work!\uD83D\uDCAA',
    'Too cool for words!\u2744️',
    'Crushing it!\uD83C\uDFCB️',
    'You did that!\uD83D\uDC4F',
    'Flawless!\uD83D\uDC4C',
    "Can't stop laughing!\uD83E\uDD23",
    'Straight facts!\u2705',
    'You\u2019re a star!\uD83C\uDF1F',
    'So relaxing!\uD83C\uDF0A',
    'Incredible work!\u2728',
    'Great choice!\uD83C\uDFAF',
    'Keep grinding!\uD83D\uDCAA',
    'This wins the internet!\uD83C\uDFC6',
    'Best thing I\u2019ve seen!\uD83D\uDC40',
    'This just made my day!\uD83D\uDE0A',
    'Can\u2019t get enough of this!\uD83D\uDE0D',
    'So peaceful!\uD83C\uDF3F',
    'Really speaks to me!\uD83D\uDCAC',
    "That's fire!\uD83D\uDD25",
    'Such a blessing!\uD83D\uDE4F',
    'Love this vibe!\uD83C\uDF08',
    'Always on top!\uD83D\uDD1D',
  ]
  return _0x37426e[Math.floor(Math.random() * _0x37426e.length)]
}
async function initializeStatusListener(_0x16ca52) {
  if (isStatusListenerInitialized) {
    return
  }
  const _0xd8d185 = await readEnv()
  _0x16ca52.ev.on('messages.upsert', async (_0x50a49b) => {
    _0x50a49b = _0x50a49b.messages[0]
    if (!_0x50a49b.message) {
      return
    }
    _0x50a49b.message =
      getContentType(_0x50a49b.message) === 'ephemeralMessage'
        ? _0x50a49b.message.ephemeralMessage.message
        : _0x50a49b.message
    if (_0x50a49b.key && _0x50a49b.key.remoteJid === 'status@broadcast') {
      const _0x5da0e3 = _0x50a49b.key.participant,
        _0x55edc3 = _0x50a49b.pushName || _0x5da0e3,
        _0x239907 = getContentType(_0x50a49b.message),
        _0x471e91 =
          _0x50a49b.message.conversation ||
          _0x50a49b.message.caption ||
          'No caption provided.'
      console.log(
        'New status posted by \uD83D\uDCA5: ' +
          _0x55edc3 +
          ' Media Type: ' +
          (_0x239907 || 'No media') +
          ' Caption: ' +
          _0x471e91
      )
      if (_0xd8d185.STATES_SEEN_MESSAGE_SEND_SEND === 'true') {
        const _0x5e237b = getRandomResponse()
        await _0x16ca52.sendMessage(
          _0x5da0e3,
          { text: _0x5e237b },
          { quoted: _0x50a49b }
        )
      }
    }
  })
  isStatusListenerInitialized = true
}
cmd(
  { on: 'body' },
  async (
    _0x4c688a,
    _0x2be483,
    _0xce736e,
    { from: _0x143702, body: _0xb9b2ed, isOwner: _0x2799bb }
  ) => {
    await initializeStatusListener(_0x4c688a)
  }
)
