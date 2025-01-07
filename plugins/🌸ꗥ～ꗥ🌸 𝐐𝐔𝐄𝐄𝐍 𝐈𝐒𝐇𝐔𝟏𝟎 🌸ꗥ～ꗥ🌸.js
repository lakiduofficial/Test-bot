const { cmd } = require('../command')
cmd(
  {
    pattern: 'owner',
    react: '\uD83D\uDC68‍\uD83D\uDCBB',
    alias: ['laksidu', 'nimsara'],
    desc: 'Get owner number',
    category: 'main',
    filename: __filename,
  },
  async (_0x1d4e6e, _0x683e34, _0x2467af, { from: _0x55e777 }) => {
    try {
      const _0x4f215a = '+94760698006',
        _0x1af0cb = 'LAKSIDU-NIMSARA',
        _0x34da71 = 'ishu TEAM',
        _0x3a92c =
          'BEGIN:VCARD\nVERSION:3.0\n' +
          ('FN:' + _0x1af0cb + '\n') +
          ('ORG:' + _0x34da71 + ';\n') +
          ('TEL;type=CELL;type=VOICE;waid=' +
            _0x4f215a.replace('+', '') +
            ':' +
            _0x4f215a +
            '\n') +
          'END:VCARD',
        _0x2745fa = await _0x1d4e6e.sendMessage(_0x55e777, {
          contacts: {
            displayName: _0x1af0cb,
            contacts: [{ vcard: _0x3a92c }],
          },
        })
      await _0x1d4e6e.sendMessage(
        _0x55e777,
        {
          text: "This is the owner's contact: " + _0x1af0cb,
          contextInfo: {
            mentionedJid: [
              _0x4f215a.replace('+94760698006') + '+94760698006@s.whatsapp.net',
            ],
            quotedMessageId: _0x2745fa.key.id,
          },
        },
        { quoted: _0x683e34 }
      )
    } catch (_0x100219) {
      console.error(_0x100219)
      await _0x1d4e6e.sendMessage(
        _0x55e777,
        { text: 'Sorry, there was an error fetching the owner contact.' },
        { quoted: _0x683e34 }
      )
    }
  }
)
