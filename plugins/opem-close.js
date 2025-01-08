const config = require('../config'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'opentime',
    react: '\uD83D\uDD16',
    desc: 'To open group to a time',
    category: 'group',
    use: '.opentime',
    filename: __filename,
  },
  async (
    _0x1b25b2,
    _0x247d3e,
    _0x1de025,
    {
      from: _0x34615f,
      prefix: _0x5e9fbd,
      l: _0x31bc0f,
      quoted: _0x2dbc98,
      body: _0x12f0dd,
      isCmd: _0x326367,
      command: _0x443c57,
      args: _0x23149b,
      q: _0x56768b,
      isGroup: _0x353222,
      sender: _0x584210,
      senderNumber: _0xbbb468,
      botNumber2: _0x5763c3,
      botNumber: _0x53f50b,
      pushname: _0x606cd7,
      isMe: _0x31a0c1,
      isOwner: _0x19b6bc,
      groupMetadata: _0x48e6da,
      groupName: _0x11e09f,
      participants: _0x21d8af,
      groupAdmins: _0x513aec,
      isBotAdmins: _0x2790a3,
      isAdmins: _0x5e566a,
      reply: _0x88f481,
    }
  ) => {
    try {
      if (!_0x353222) {
        return _0x88f481(ONLGROUP)
      }
      if (!_0x5e566a) {
        return _0x88f481(ADMIN)
      }
      if (_0x23149b[1] == 'second') {
        var _0x57aac7 = _0x23149b[0] * '1000'
      } else {
        if (_0x23149b[1] == 'minute') {
          var _0x57aac7 = _0x23149b[0] * '60000'
        } else {
          if (_0x23149b[1] == 'hour') {
            var _0x57aac7 = _0x23149b[0] * '3600000'
          } else {
            if (_0x23149b[1] == 'day') {
              var _0x57aac7 = _0x23149b[0] * '86400000'
            } else {
              return _0x88f481(
                '*select:*\nsecond\nminute\nhour\n\n*example*\n10 second'
              )
            }
          }
        }
      }
      _0x88f481('Open time ' + _0x56768b + ' starting from now')
      setTimeout(() => {
        var _0x549bfc = _0x247d3e.participant
        _0x1b25b2.groupSettingUpdate(_0x34615f, 'not_announcement')
        _0x88f481(
          '*OPEN TIME* `𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏 𝐖𝐀𝐒 𝐎𝐏𝐄𝐍𝐄𝐃 𝐁𝐘 𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐓𝐎 𝐀𝐏𝐏𝐑𝐎𝐕𝐄𝐃 𝐀𝐃𝐌𝐈𝐍`\n`𝐍𝐎𝐖 𝐌𝐄𝐌𝐁𝐄𝐑𝐒 𝐂𝐀𝐍 𝐒𝐄𝐍𝐃 𝐌𝐄𝐒𝐒𝐀𝐆𝐄𝐒`\uD83D\uDD13'
        )
      }, _0x57aac7)
      await _0x1b25b2.sendMessage(_0x34615f, {
        react: {
          text: '\u2705',
          key: _0x247d3e.key,
        },
      })
    } catch (_0x4714b4) {
      _0x88f481('*Error !!*')
      _0x31bc0f(_0x4714b4)
    }
  }
)
cmd(
  {
    pattern: 'closetime',
    react: '\uD83D\uDD16',
    desc: 'To close group to a time',
    category: 'group',
    use: '.closstime',
    filename: __filename,
  },
  async (
    _0x1eabc5,
    _0x52735e,
    _0x1fe49f,
    {
      from: _0x5552cd,
      prefix: _0x3b6082,
      l: _0x48702e,
      quoted: _0x2da4b4,
      body: _0x32b03d,
      isCmd: _0x38e217,
      command: _0x470112,
      args: _0x24e035,
      q: _0xe9740e,
      isGroup: _0x45d0ad,
      sender: _0x38323f,
      senderNumber: _0x5b598a,
      botNumber2: _0x174888,
      botNumber: _0x28e9c9,
      pushname: _0x4a8583,
      isMe: _0x426d1b,
      isOwner: _0x591476,
      groupMetadata: _0x31b33c,
      groupName: _0x22ff42,
      participants: _0x416874,
      groupAdmins: _0x55c1bd,
      isBotAdmins: _0x128a18,
      isAdmins: _0x16593e,
      reply: _0x1dec76,
    }
  ) => {
    try {
      if (!_0x45d0ad) {
        return _0x1dec76(ONLGROUP)
      }
      if (!_0x16593e) {
        return _0x1dec76(ADMIN)
      }
      if (_0x24e035[1] == 'second') {
        var _0x3e5fe1 = _0x24e035[0] * '1000'
      } else {
        if (_0x24e035[1] == 'minute') {
          var _0x3e5fe1 = _0x24e035[0] * '60000'
        } else {
          if (_0x24e035[1] == 'hour') {
            var _0x3e5fe1 = _0x24e035[0] * '3600000'
          } else {
            if (_0x24e035[1] == 'day') {
              var _0x3e5fe1 = _0x24e035[0] * '86400000'
            } else {
              return _0x1dec76(
                '*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second'
              )
            }
          }
        }
      }
      _0x1dec76('Close time ' + _0xe9740e + ' starting from now')
      setTimeout(() => {
        var _0x18fd6e = _0x1fe49f.participant
        const _0x151fd3 =
          '*CLOSE TIME*`𝐆𝐑𝐎𝐔𝐏 𝐂𝐋𝐎𝐒𝐄𝐃 𝐁𝐘 𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐀𝐓 𝐀𝐏𝐏𝐑𝐎𝐕𝐄𝐃 𝐀𝐃𝐌𝐈𝐍`\n`𝐍𝐎𝐖 𝐎𝐍𝐋𝐘 𝐀𝐃𝐌𝐈𝐍 𝐂𝐀𝐍 𝐒𝐄𝐍𝐃 𝐌𝐄𝐒𝐒𝐀𝐆𝐄𝐒`\uD83D\uDD10'
        _0x1eabc5.groupSettingUpdate(_0x5552cd, 'announcement')
        _0x1dec76(_0x151fd3)
      }, _0x3e5fe1)
      await _0x1eabc5.sendMessage(_0x5552cd, {
        react: {
          text: '\u2705',
          key: _0x52735e.key,
        },
      })
    } catch (_0x29c516) {
      _0x1dec76('*Error !!*')
      _0x48702e(_0x29c516)
    }
  }
)
cmd(
  {
    pattern: 'tagadmin',
    alais: ['tagadmins'],
    react: '\uD83D\uDE40',
    desc: 'Tags all the admins in the group.',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x383ed5,
    _0x1c3b38,
    _0x3c7fcb,
    {
      from: _0xeaff6,
      prefix: _0x390a57,
      l: _0x4319d3,
      quoted: _0xe6e1ec,
      body: _0x4adee9,
      isCmd: _0x4cb823,
      command: _0x2655dc,
      args: _0x34cb1b,
      q: _0x4c04bc,
      isGroup: _0x58890a,
      sender: _0x46becd,
      senderNumber: _0xb726a8,
      botNumber2: _0x20b985,
      botNumber: _0x2f8b2f,
      pushname: _0x20bc44,
      isMe: _0x3a5d7a,
      isOwner: _0x4b9db4,
      groupMetadata: _0x3a2129,
      groupName: _0x49075f,
      participants: _0x2763df,
      groupAdmins: _0x4592ee,
      isBotAdmins: _0x3bad46,
      isAdmins: _0x40971a,
      reply: _0x138eca,
    }
  ) => {
    try {
      if (!_0x58890a) {
        return _0x138eca('This command is only for groups.')
      }
      if (!_0x40971a) {
        return _0x138eca('This command is only for group admin.')
      }
      const _0x5d996b = _0x4592ee
      if (_0x5d996b.length === 0) {
        return _0x138eca('There are no admins in this group.')
      }
      let _0x581793 = '𝗧𝗔𝗚𝗚𝗜𝗡𝗚 𝗔𝗟𝗟 𝗔𝗗𝗠𝗜𝗡𝗦 𝗜𝗡 𝗧𝗛𝗘 𝗚𝗥𝗢𝗨𝗣\uD83D\uDD33:*\n\n'
      for (let _0x2c63a9 of _0x5d996b) {
        _0x581793 += '@' + _0x2c63a9.split('@')[0] + '\n'
      }
      await _0x383ed5.sendMessage(
        _0xeaff6,
        {
          text: _0x581793,
          mentions: _0x5d996b,
        },
        { quoted: _0x1c3b38 }
      )
    } catch (_0xf95b49) {
      console.error('Error tagging admins:', _0xf95b49)
      _0x138eca('you are not an admin.')
    }
  }
)
