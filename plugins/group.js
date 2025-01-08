const config = require('../config'),
  { cmd, commands } = require('../command'),
  {
    default: makeWASocket,
    useMultiFileAuthState,
    WA_DEFAULT_EPHEMERAL,
    jidNormalizedUser,
    proto,
    getDevice,
    generateWAMessageFromContent,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    getContentType,
    generateForwardMessageContent,
    downloadContentFromMessage,
    jidDecode,
  } = require('@whiskeysockets/baileys')
cmd(
  {
    pattern: 'admins',
    desc: 'Get a list of group admins.',
    react: '\uD83D\uDC65',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x288b2a,
    _0x240b6e,
    _0x112295,
    {
      from: _0x20b585,
      quoted: _0x574c1d,
      body: _0x38b8cb,
      isCmd: _0x2f134b,
      command: _0x5263a4,
      q: _0x450444,
      isGroup: _0x3662e3,
      sender: _0x32e4c7,
      senderNumber: _0xca96f6,
      botNumber2: _0x2af5df,
      botNumber: _0x1d9c1e,
      pushname: _0x1e4cc7,
      isMe: _0xdb4be6,
      isOwner: _0x567395,
      groupMetadata: _0x4d26be,
      groupName: _0xe7c3bd,
      participants: _0x179aa0,
      groupAdmins: _0x18969e,
      isBotAdmins: _0x499df1,
      isAdmins: _0x68fb49,
      reply: _0x1c3091,
    }
  ) => {
    try {
      const _0x2aa7e3 = await _0x288b2a.groupMetadata(_0x20b585),
        _0x1d4499 = _0x2aa7e3.participants
          .filter(
            (_0x4accfd) =>
              _0x4accfd.admin === 'admin' || _0x4accfd.admin === 'superadmin'
          )
          .map((_0x1e6f5e) => '@' + _0x1e6f5e.id.split('@')[0])
          .join('\n')
      return await _0x288b2a.sendMessage(
        _0x20b585,
        {
          text: '*Group Admins:*\n\n' + _0x1d4499,
          mentions: _0x2aa7e3.participants
            .filter(
              (_0x32408a) =>
                _0x32408a.admin === 'admin' || _0x32408a.admin === 'superadmin'
            )
            .map((_0x38493c) => _0x38493c.id),
        },
        { quoted: _0x240b6e }
      )
    } catch (_0x22ad76) {
      console.log(_0x22ad76)
      return await _0x288b2a.sendMessage(_0x20b585, {
        react: {
          text: '\u274C',
          key: _0x240b6e.key,
        },
      })
      _0x1c3091('Error: ' + _0x22ad76.message)
    }
  }
)
cmd(
  {
    pattern: 'groupdesc',
    desc: 'Change the group description.',
    use: '.groupdesc <New Description>',
    react: '\uD83D\uDC65',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x5002f0,
    _0x1ce22d,
    _0x12df41,
    {
      from: _0x7efe9d,
      args: _0x34c3db,
      quoted: _0x35c705,
      body: _0x5c77db,
      isCmd: _0x201924,
      command: _0x4bbe75,
      q: _0x244f0a,
      isGroup: _0x4cfb8f,
      sender: _0x1117a5,
      senderNumber: _0x116374,
      botNumber2: _0x305c0a,
      botNumber: _0x353582,
      pushname: _0x2ba47d,
      isMe: _0x10b559,
      isOwner: _0x59008b,
      groupMetadata: _0x169656,
      groupName: _0xa7cbfd,
      participants: _0x51bbcb,
      groupAdmins: _0xf6d09c,
      isBotAdmins: _0x380d0d,
      isAdmins: _0x3b032e,
      reply: _0x166d8a,
    }
  ) => {
    try {
      if (!_0x3b032e) {
        return _0x166d8a('You Must Be Admin For Use This Command')
      }
      if (_0x34c3db.length === 0) {
        return _0x166d8a('Please provide a new group description.')
      }
      const _0x14af63 = _0x34c3db.join(' ')
      return (
        await _0x5002f0.groupUpdateDescription(_0x7efe9d, _0x14af63),
        await _0x5002f0.sendMessage(
          _0x7efe9d,
          { text: 'Group description has been updated to:\n\n' + _0x14af63 },
          { quoted: _0x1ce22d }
        )
      )
    } catch (_0x5d2cd9) {
      console.log(_0x5d2cd9)
      return await _0x5002f0.sendMessage(_0x7efe9d, {
        react: {
          text: '\u274C',
          key: _0x1ce22d.key,
        },
      })
      _0x166d8a('Error: ' + _0x5d2cd9.message)
    }
  }
)
cmd(
  {
    pattern: 'groupinfo',
    desc: 'Get information  the group.',
    react: '\uD83D\uDC65',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x197613,
    _0x7fadec,
    _0x2aa611,
    {
      from: _0x1adb6c,
      quoted: _0x3f5545,
      body: _0x4b1121,
      isCmd: _0x2e067a,
      command: _0x121fad,
      q: _0x1629fc,
      isGroup: _0x506f08,
      sender: _0x21868b,
      senderNumber: _0xd3c817,
      botNumber2: _0x2689ef,
      botNumber: _0x3527d0,
      pushname: _0x2c4cb6,
      isMe: _0x5666e4,
      isOwner: _0x9362cb,
      groupMetadata: _0x5a2dff,
      groupName: _0x5968f9,
      participants: _0x4d1cd0,
      groupAdmins: _0x27b188,
      isBotAdmins: _0x428c10,
      isAdmins: _0x198939,
      reply: _0x3e1ad8,
    }
  ) => {
    try {
      const _0x531d3d = await _0x197613.groupMetadata(_0x1adb6c),
        _0x5ebb1b =
          '\n*Group Name:* ' +
          _0x531d3d.subject +
          '\n*Group Description:* ' +
          (_0x531d3d.desc || 'No description') +
          '\n*Members:* ' +
          _0x531d3d.participants.length +
          '\n*Created At:* ' +
          new Date(_0x531d3d.creation * 1000).toLocaleString() +
          '\n        '
      return await _0x197613.sendMessage(
        _0x1adb6c,
        { text: _0x5ebb1b },
        { quoted: _0x7fadec }
      )
    } catch (_0x26b641) {
      console.log(_0x26b641)
      return await _0x197613.sendMessage(_0x1adb6c, {
        react: {
          text: '\u274C',
          key: _0x7fadec.key,
        },
      })
      _0x3e1ad8('Error: ' + _0x26b641.message)
    }
  }
)
cmd(
  {
    pattern: 'grouplink',
    desc: "Get the group's invite link.",
    react: '\uD83D\uDC65',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x546286,
    _0x20e565,
    _0xa77bfe,
    {
      from: _0x3d51da,
      quoted: _0x1c8fa1,
      body: _0x4c5bdc,
      isCmd: _0xb81d38,
      command: _0x133b62,
      q: _0x2b96a0,
      isGroup: _0x20ef71,
      sender: _0x1812f4,
      senderNumber: _0x19cc82,
      botNumber2: _0x13bf7f,
      botNumber: _0x14b3df,
      pushname: _0x13c40f,
      isMe: _0x4f46f4,
      isOwner: _0xa2830d,
      groupMetadata: _0xc6e938,
      groupName: _0x3c0448,
      participants: _0x29622c,
      groupAdmins: _0x45a6d3,
      isBotAdmins: _0x599ce4,
      isAdmins: _0x336d09,
      reply: _0x48f656,
    }
  ) => {
    try {
      const _0x5be8c8 = await _0x546286.groupInviteCode(_0x3d51da)
      return await _0x546286.sendMessage(
        _0x3d51da,
        {
          text:
            "*Here is your group's invite link:* https://chat.whatsapp.com/" +
            _0x5be8c8,
        },
        { quoted: _0x20e565 }
      )
    } catch (_0x5e6a8b) {
      console.log(_0x5e6a8b)
      return await _0x546286.sendMessage(_0x3d51da, {
        react: {
          text: '\u274C',
          key: _0x20e565.key,
        },
      })
      _0x48f656('Error: ' + _0x5e6a8b.message)
    }
  }
)
cmd(
  {
    pattern: 'gname',
    desc: 'Change the group name',
    use: '.gname <New Group Name>',
    react: '\u270F️',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x499b81,
    _0x26ed8a,
    _0x1d8fde,
    {
      from: _0x4a0500,
      isGroup: _0x5bccbe,
      sender: _0x2d6965,
      groupMetadata: _0x17d921,
      args: _0x97f351,
      reply: _0x2f8921,
    }
  ) => {
    if (!_0x5bccbe) {
      return await _0x2f8921('This command can only be used in groups.')
    }
    const _0x37b910 = _0x499b81.user.jid,
      _0x26d717 = _0x17d921.participants.some(
        (_0x36423e) => _0x36423e.jid === _0x37b910 && _0x36423e.admin
      )
    if (!_0x26d717) {
      return await _0x2f8921("I'm not an admin in this group.")
    }
    const _0x446cc9 = _0x97f351.join(' ')
    if (!_0x446cc9) {
      return await _0x2f8921('Please provide a new group name.')
    }
    try {
      await _0x499b81.groupUpdateSubject(_0x4a0500, _0x446cc9)
      return await _0x2f8921(
        'Group name changed to "' + _0x446cc9 + '" successfully!'
      )
      await _0x499b81.sendMessage(_0x4a0500, {
        react: {
          text: '\u2705',
          key: _0x26ed8a.key,
        },
      })
    } catch (_0x5b8897) {
      return (
        console.error('Error changing group name:', _0x5b8897),
        await _0x499b81.sendMessage(_0x4a0500, {
          react: {
            text: '\u274C',
            key: _0x26ed8a.key,
          },
        }),
        await _0x2f8921(
          'Failed to change the group name. Please try again later.'
        )
      )
    }
  }
)
cmd(
  {
    pattern: 'setsubject',
    desc: 'Change the group subject.',
    use: '.setsubject <New Subject>',
    react: '\uD83D\uDC65',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x1c1f24,
    _0xb7589d,
    _0x5b5da0,
    {
      from: _0x33f6fb,
      quoted: _0x345e99,
      body: _0x34cec9,
      isCmd: _0x7aba9c,
      command: _0x3a6403,
      args: _0x1f68fb,
      q: _0x353d68,
      isGroup: _0x25cd07,
      sender: _0x449291,
      senderNumber: _0x58f9c6,
      botNumber2: _0x1887d9,
      botNumber: _0xefb406,
      pushname: _0x2b88e6,
      isMe: _0x45d4b2,
      isOwner: _0x2b0a68,
      groupMetadata: _0x1b6e80,
      groupName: _0x714910,
      participants: _0x67a62b,
      groupAdmins: _0x47981e,
      isBotAdmins: _0x3b0d25,
      isAdmins: _0x16e043,
      reply: _0x75f03c,
    }
  ) => {
    try {
      if (!_0x16e043) {
        return _0x75f03c('You Must Be Admin For Use This Command')
      }
      if (_0x1f68fb.length === 0) {
        return await _0x1c1f24.sendMessage(
          _0x33f6fb,
          { text: 'Please provide a new group subject.' },
          { quoted: _0xb7589d }
        )
      }
      const _0x1ab2dd = _0x1f68fb.join(' ')
      await _0x1c1f24.groupUpdateSubject(_0x33f6fb, _0x1ab2dd)
      return await _0x1c1f24.sendMessage(
        _0x33f6fb,
        { text: 'Group subject has been updated to: ' + _0x1ab2dd },
        { quoted: _0xb7589d }
      )
      await _0x1c1f24.sendMessage(_0x33f6fb, {
        react: {
          text: '\u2705',
          key: _0xb7589d.key,
        },
      })
    } catch (_0x5d2f09) {
      console.log(_0x5d2f09)
      await _0x1c1f24.sendMessage(_0x33f6fb, {
        react: {
          text: '\u274C',
          key: _0xb7589d.key,
        },
      })
      _0x75f03c('Error: ' + _0x5d2f09.message)
    }
  }
)
cmd(
  {
    pattern: 'tagall',
    desc: 'Mention all group members.',
    react: '\uD83D\uDC65',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x2d3b80,
    _0x49f488,
    _0x18d463,
    {
      from: _0x1cacb0,
      quoted: _0x2a0bf0,
      body: _0x209031,
      isCmd: _0x54ad1b,
      command: _0x73307,
      args: _0xd7fe37,
      q: _0x59a5f2,
      isGroup: _0x59204c,
      sender: _0x598800,
      senderNumber: _0x2fb3d1,
      botNumber2: _0x39c33e,
      botNumber: _0x5334d4,
      pushname: _0x3b5d99,
      isMe: _0x188abb,
      isOwner: _0x5aa0a3,
      groupMetadata: _0x158b1b,
      groupName: _0x471ccb,
      participants: _0x453288,
      groupAdmins: _0x2bfdc8,
      isBotAdmins: _0x4f0741,
      isAdmins: _0xe8aa28,
      reply: _0x38d010,
    }
  ) => {
    try {
      if (!_0xe8aa28) {
        return _0x38d010('You Must Be Admin For Use This Command')
      }
      const _0x4a49e7 = await _0x2d3b80.groupMetadata(_0x1cacb0),
        _0x5beb5b = _0x4a49e7.participants
          .map((_0x509ee0) => '@' + _0x509ee0.id.split('@')[0])
          .join('\n'),
        _0xbd4479 = _0x4a49e7.participants.map((_0x44d9ac) => _0x44d9ac.id)
      return await _0x2d3b80.sendMessage(
        _0x1cacb0,
        {
          text: 'Mentioning everyone:\n\n' + _0x5beb5b,
          mentions: _0xbd4479,
        },
        { quoted: _0x49f488 }
      )
    } catch (_0x2440c5) {
      return (
        console.log(_0x2440c5),
        await _0x2d3b80.sendMessage(_0x1cacb0, {
          react: {
            text: '\u274C',
            key: _0x49f488.key,
          },
        }),
        _0x38d010('Error: ' + _0x2440c5.message)
      )
    }
  }
)
cmd(
  {
    pattern: 'requests',
    desc: 'View pending join requests',
    use: '.requests',
    react: '\uD83D\uDCDD',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x38bd5c,
    _0x3e4dc0,
    _0x3c9039,
    { from: _0x22ec1b, isGroup: _0x59ac38, reply: _0x4834d8 }
  ) => {
    if (!_0x59ac38) {
      return await _0x4834d8('This command can only be used in groups.')
    }
    const _0x58b89c = _0x38bd5c.user.jid,
      _0xb851a6 = await _0x38bd5c.groupMetadata(_0x22ec1b),
      _0x34e51c = _0xb851a6.participants.some(
        (_0x2227fd) => _0x2227fd.jid === _0x58b89c && _0x2227fd.admin
      )
    if (!_0x34e51c) {
      return await _0x4834d8("I'm not an admin in this group.")
    }
    try {
      const _0x14e006 = await _0x38bd5c.groupRequestParticipantsList(_0x22ec1b)
      if (_0x14e006.length === 0) {
        return await _0x4834d8('No pending join requests.')
      }
      let _0x2a8eda = 'Pending Join Requests:\n\n'
      return (
        _0x14e006.forEach((_0x4f8922, _0x851869) => {
          _0x2a8eda +=
            _0x851869 + 1 + '. @' + _0x4f8922.jid.split('@')[0] + '\n'
        }),
        await _0x4834d8(_0x2a8eda, {
          mentions: _0x14e006.map((_0x408378) => _0x408378.jid),
        })
      )
    } catch (_0x52f507) {
      return (
        console.error('Error retrieving join requests:', _0x52f507),
        await _0x4834d8(
          'Failed to retrieve join requests. Please try again later.'
        )
      )
    }
  }
)
cmd(
  {
    pattern: 'accept',
    desc: 'Accept group join request(s)',
    use: '.accept <request numbers>',
    react: '\u2714️',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x56ebb2,
    _0x2537db,
    _0xde7553,
    { from: _0x343ae4, isGroup: _0x2fdccd, reply: _0x2488a5, match: _0x8e43ef }
  ) => {
    if (!_0x2fdccd) {
      return await _0x2488a5('This command can only be used in groups.')
    }
    const _0x5a68f3 = _0x56ebb2.user.jid,
      _0x39206f = await _0x56ebb2.groupMetadata(_0x343ae4),
      _0x208f4d = _0x39206f.participants.some(
        (_0x5f0128) => _0x5f0128.jid === _0x5a68f3 && _0x5f0128.admin
      )
    if (!_0x208f4d) {
      return await _0x2488a5("_I'm not an admin in this group._")
    }
    try {
      const _0x4b7ad4 = await _0x56ebb2.groupRequestParticipantsList(_0x343ae4)
      if (_0x4b7ad4.length === 0) {
        return await _0x2488a5('No pending join requests.')
      }
      if (!_0x8e43ef) {
        return await _0x2488a5(
          '_Provide the number(s) of the request(s) to accept, separated by commas._'
        )
      }
      const _0x56c445 = _0x8e43ef
          .split(',')
          .map((_0x39ca49) => parseInt(_0x39ca49.trim()) - 1),
        _0x56a6ca = _0x56c445.filter(
          (_0x450756) => _0x450756 >= 0 && _0x450756 < _0x4b7ad4.length
        )
      if (_0x56a6ca.length === 0) {
        return await _0x2488a5('_Invalid request number(s)._')
      }
      for (let _0x155aa5 of _0x56a6ca) {
        await _0x56ebb2.groupRequestParticipantsUpdate(
          _0x343ae4,
          [_0x4b7ad4[_0x155aa5].jid],
          'accept'
        )
      }
      return await _0x2488a5(
        '_Accepted ' + _0x56a6ca.length + ' join request(s)._'
      )
    } catch (_0x5c4092) {
      return (
        console.error('Error accepting join requests:', _0x5c4092),
        await _0x56ebb2.sendMessage(_0x343ae4, {
          react: {
            text: '\u274C',
            key: _0x2537db.key,
          },
        }),
        await _0x2488a5(
          'Failed to accept join requests. Please try again later.'
        )
      )
    }
  }
)
cmd(
  {
    pattern: 'reject',
    desc: 'Reject group join request(s)',
    use: '.reject <request numbers>',
    react: '\u274C',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x419e11,
    _0x9eb58a,
    _0x14c66c,
    { from: _0x216048, isGroup: _0x59accc, reply: _0x366a5b, match: _0x2835ba }
  ) => {
    if (!_0x59accc) {
      return await _0x366a5b('This command can only be used in groups.')
    }
    const _0x6842d4 = _0x419e11.user.jid,
      _0x5c712c = await _0x419e11.groupMetadata(_0x216048),
      _0x10d214 = _0x5c712c.participants.some(
        (_0x72931f) => _0x72931f.jid === _0x6842d4 && _0x72931f.admin
      )
    if (!_0x10d214) {
      return await _0x366a5b("I'm not an admin in this group.")
    }
    try {
      const _0x224954 = await _0x419e11.groupRequestParticipantsList(_0x216048)
      if (_0x224954.length === 0) {
        return await _0x366a5b('No pending join requests.')
      }
      if (!_0x2835ba) {
        return await _0x366a5b(
          'Provide the number(s) of the request(s) to reject, separated by commas.'
        )
      }
      const _0x14bdaf = _0x2835ba
          .split(',')
          .map((_0x57c3c7) => parseInt(_0x57c3c7.trim()) - 1),
        _0x399c70 = _0x14bdaf.filter(
          (_0x4a5b0d) => _0x4a5b0d >= 0 && _0x4a5b0d < _0x224954.length
        )
      if (_0x399c70.length === 0) {
        return await _0x366a5b('_Invalid request number(s)._')
      }
      for (let _0x3590f8 of _0x399c70) {
        await _0x419e11.groupRequestParticipantsUpdate(
          _0x216048,
          [_0x224954[_0x3590f8].jid],
          'reject'
        )
      }
      return await _0x366a5b(
        '_Rejected ' + _0x399c70.length + ' join request(s)._'
      )
    } catch (_0x49d788) {
      return (
        console.error('Error rejecting join requests:', _0x49d788),
        await _0x419e11.sendMessage(_0x216048, {
          react: {
            text: '\u274C',
            key: _0x9eb58a.key,
          },
        }),
        await _0x366a5b(
          'Failed to reject join requests. Please try again later.'
        )
      )
    }
  }
)
cmd(
  {
    pattern: 'hidetag',
    desc: 'Tags everyperson of group without mentioning their numbers',
    react: '\uD83D\uDC65',
    category: 'group',
    filename: __filename,
    use: '<text>',
  },
  (
    _0x2b7a12,
    _0x3c4c64,
    _0x405f75,
    {
      from: _0x25041c,
      quoted: _0x42ac97,
      body: _0x17271f,
      isCmd: _0x6c5475,
      command: _0x58e66a,
      args: _0x25ab9d,
      q: _0x3c280a,
      isGroup: _0x44beca,
      sender: _0x2ad842,
      senderNumber: _0x4911da,
      botNumber2: _0x82c5d,
      botNumber: _0x4361e4,
      pushname: _0x2de557,
      isMe: _0x122e7d,
      isOwner: _0x413522,
      groupMetadata: _0x55273a,
      groupName: _0x15ffe1,
      participants: _0x2c55c7,
      groupAdmins: _0x25c601,
      isBotAdmins: _0xd0bb11,
      isAdmins: _0x37fc60,
      reply: _0xe60609,
    }
  ) => {
    try {
      if (!_0x405f75.isGroup) {
        return _0xe60609(tlang().group)
      }
      if (!_0x405f75.isGroup) {
        return _0xe60609('only for groups')
      }
      if (!_0x37fc60) {
        return _0xe60609('You Must Be Admin For Use This Command')
      }
      _0x2b7a12.sendMessage(
        _0x405f75.chat,
        {
          text: _0x3c280a ? text : '',
          mentions: _0x2c55c7.map((_0x31f451) => _0x31f451.id),
        },
        {
          quoted: _0x3c4c64,
          messageId: genMsgId(),
        }
      )
    } catch (_0x4ea9a2) {
      _0xe60609('Error !!')
      l(_0x4ea9a2)
    }
  }
)
cmd(
  {
    pattern: 'kick',
    desc: 'Kicks replied/quoted user from group.',
    react: '\uD83D\uDC65',
    category: 'group',
    filename: __filename,
    use: '<quote|reply|number>',
  },
  async (
    _0x12661b,
    _0x36db1f,
    _0x5071b4,
    {
      from: _0x3aae45,
      quoted: _0xe3c610,
      body: _0x37f74b,
      isCmd: _0x48e602,
      command: _0x5cb8a8,
      args: _0x4961a6,
      q: _0x324113,
      isGroup: _0x36d63b,
      sender: _0x5c0345,
      senderNumber: _0x533b7f,
      botNumber2: _0x5d8150,
      botNumber: _0x105732,
      pushname: _0xa323a8,
      isMe: _0x21f73b,
      isOwner: _0x51c976,
      groupMetadata: _0x1eb7e5,
      groupName: _0x850511,
      participants: _0x4979a9,
      groupAdmins: _0x180897,
      isBotAdmins: _0x4c8c67,
      isAdmins: _0x599a50,
      reply: _0x1d1727,
    }
  ) => {
    try {
      if (!_0x5071b4.isGroup) {
        return _0x1d1727('This command is only for groups.')
      }
      if (!_0x4c8c67) {
        return _0x1d1727("I can't do that. Please make me a group admin.")
      }
      if (!_0x599a50) {
        return _0x1d1727('You must be an admin to use this command.')
      }
      const _0x1f1f1e = _0xe3c610 ? _0xe3c610.sender : null
      if (!_0x1f1f1e) {
        return _0x1d1727('Please reply to a user to kick them.')
      }
      await _0x12661b.groupParticipantsUpdate(
        _0x5071b4.chat,
        [_0x1f1f1e],
        'remove'
      )
      _0x1d1727(_0x1f1f1e + ' has been kicked out of the group!')
    } catch (_0x50a90) {
      console.log(_0x50a90)
      await _0x12661b.sendMessage(_0x3aae45, {
        react: {
          text: '\u274C',
          key: _0x36db1f.key,
        },
      })
      _0x1d1727('Error occurred while trying to kick the user.')
    }
  }
)
cmd(
  {
    pattern: 'unlock',
    desc: "Allow all participants to modify the group's settings",
    react: '\uD83D\uDD13',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x1b8468,
    _0x5dc7b7,
    _0x23c1ae,
    {
      isGroup: _0x3aefbc,
      isBotAdmins: _0xfd22f3,
      isAdmins: _0x37a8cd,
      args: _0x2c4c5a,
      reply: _0x473073,
    }
  ) => {
    try {
      if (!_0x3aefbc) {
        return _0x473073('This command is only for groups.')
      }
      if (!_0xfd22f3) {
        return _0x473073('I need to be a group admin to perform this action.')
      }
      if (!_0x37a8cd) {
        return _0x473073('You must be an admin to use this command.')
      }
      await _0x1b8468.groupSettingUpdate(_0x5dc7b7.key.remoteJid, 'unlocked')
      _0x473073(
        "Group settings unlocked. All participants can modify the group's settings."
      )
    } catch (_0x30cf96) {
      console.log(_0x30cf96)
      await _0x1b8468.sendMessage(from, {
        react: {
          text: '\u274C',
          key: _0x5dc7b7.key,
        },
      })
      _0x473073('Error: ' + _0x30cf96)
    }
  }
)
cmd(
  {
    pattern: 'lock',
    desc: "Only allow admins to modify the group's settings",
    react: '\uD83D\uDD12',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x1b31f5,
    _0x1303a6,
    _0x41e384,
    {
      isGroup: _0x1e13bb,
      isBotAdmins: _0x5aa4b6,
      isAdmins: _0x32aebe,
      args: _0x5951c2,
      reply: _0x47582e,
    }
  ) => {
    try {
      if (!_0x1e13bb) {
        return _0x47582e('This command is only for groups.')
      }
      if (!_0x5aa4b6) {
        return _0x47582e('I need to be a group admin to perform this action.')
      }
      if (!_0x32aebe) {
        return _0x47582e('You must be an admin to use this command.')
      }
      await _0x1b31f5.groupSettingUpdate(_0x1303a6.key.remoteJid, 'locked')
      _0x47582e(
        "Group settings locked. Only admins can modify the group's settings."
      )
    } catch (_0x2ce086) {
      console.log(_0x2ce086)
      await _0x1b31f5.sendMessage(from, {
        react: {
          text: '\u274C',
          key: _0x1303a6.key,
        },
      })
      _0x47582e('Error: ' + _0x2ce086)
    }
  }
)
cmd(
  {
    pattern: 'approve',
    desc: 'Automatically approve Specific Country users in the waiting list',
    react: '\u2705',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x4635fa,
    _0x3a751f,
    _0x211f5c,
    {
      isGroup: _0x3f3b46,
      isBotAdmins: _0x45e8fb,
      isAdmins: _0x4fa7a0,
      args: _0x7757ba,
      reply: _0x123dc7,
    }
  ) => {
    try {
      if (!_0x3f3b46) {
        return _0x123dc7('This command is only for groups.')
      }
      if (!_0x45e8fb) {
        return _0x123dc7('I need to be a group admin to perform this action.')
      }
      if (!_0x4fa7a0) {
        return _0x123dc7('You must be an admin to use this command.')
      }
      const _0x3e9894 = _0x3a751f.key.remoteJid,
        _0x4fcbc0 = await _0x4635fa.groupRequestParticipantsList(_0x3e9894)
      if (_0x4fcbc0.length === 0) {
        return _0x123dc7('No participants are in the waiting list.')
      }
      const _0x32dc30 = _0x4fcbc0.filter((_0x59af19) =>
        _0x59af19.jid.startsWith(config.AUTO_ADD_Country_Code)
      )
      if (_0x32dc30.length === 0) {
        return _0x123dc7('No +94 users found in the waiting list.')
      }
      const _0x52dda9 = _0x32dc30.map((_0xb18644) => _0xb18644.jid),
        _0x234aa6 = await _0x4635fa.groupRequestParticipantsUpdate(
          _0x3e9894,
          _0x52dda9,
          'approve'
        )
      console.log(_0x234aa6)
      _0x123dc7('Approved the following +94 users:\n' + _0x52dda9.join('\n'))
    } catch (_0x4f7fe1) {
      console.log(_0x4f7fe1)
      await _0x4635fa.sendMessage(from, {
        react: {
          text: '\u274C',
          key: _0x3a751f.key,
        },
      })
      _0x123dc7('Error: ' + _0x4f7fe1)
    }
  }
)
cmd(
  {
    pattern: 'poll',
    desc: 'Create a poll',
    use: '.poll <Question> | <Option1> | <Option2> | ...',
    react: '\uD83D\uDCCA',
    category: 'group',
    filename: __filename,
  },
  async (
    _0x41a0b4,
    _0x3fe7bb,
    _0x4279fb,
    { from: _0x2a379e, isGroup: _0x15bebb, reply: _0x4e1e83, match: _0x1d41da }
  ) => {
    if (!_0x15bebb) {
      return await _0x4e1e83('This command can only be used in groups.')
    }
    const [_0xf46b46, ..._0x132061] = _0x1d41da
      .split('|')
      .map((_0x32195d) => _0x32195d.trim())
    if (!_0xf46b46 || _0x132061.length < 2) {
      return await _0x4e1e83(
        'Usage: .poll <Question> | <Option1> | <Option2> | ...'
      )
    }
    const _0x4c9d57 = {
      name: _0xf46b46,
      values: _0x132061,
      selectableCount: 1,
    }
    try {
      return (
        await _0x41a0b4.sendMessage(_0x2a379e, { poll: _0x4c9d57 }),
        await _0x4e1e83('Poll created successfully.')
      )
    } catch (_0x116028) {
      return (
        console.error('Error creating poll:', _0x116028),
        await _0x41a0b4.sendMessage(_0x2a379e, {
          react: {
            text: '\u274C',
            key: _0x3fe7bb.key,
          },
        }),
        await _0x4e1e83('Failed to create poll. Please try again later.')
      )
    }
  }
)
cmd(
  {
    pattern: 'getpic',
    desc: 'Get the group profile picture.',
    category: 'group',
    react: '\uD83D\uDDBC️',
    filename: __filename,
  },
  async (
    _0x1952fb,
    _0xcc21e1,
    _0xde04e0,
    {
      from: _0x2f9ce5,
      quoted: _0x4bb3ed,
      body: _0x19ab0c,
      isCmd: _0x33b6c1,
      command: _0x28b06c,
      args: _0x5aaf9f,
      q: _0x25d2a2,
      isGroup: _0x2e401c,
      sender: _0x15569f,
      senderNumber: _0x3cd6da,
      botNumber2: _0x3fd992,
      botNumber: _0x1823ab,
      pushname: _0x2a1d31,
      isMe: _0x16172b,
      isOwner: _0x3eeb16,
      groupMetadata: _0x4fbca2,
      groupName: _0x38e4f7,
      participants: _0x407676,
      groupAdmins: _0x3248c8,
      isBotAdmins: _0x11ce68,
      isAdmins: _0x4ca4b9,
      reply: _0x37db2f,
    }
  ) => {
    try {
      if (!_0x2e401c) {
        return _0x37db2f('This command can only be used in a group.')
      }
      const _0x1a77a9 = await _0x1952fb.getProfilePicture(_0x2f9ce5)
      await _0x1952fb.sendMessage(_0x2f9ce5, {
        image: { url: _0x1a77a9 },
        caption: 'Group Profile Picture',
      })
    } catch (_0x563423) {
      console.log(_0x563423)
      _0x37db2f('' + _0x563423)
    }
  }
)
