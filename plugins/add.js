const config = require('../config'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'add',
    alias: ['aja'],
    react: '\u2795',
    desc: 'Adds a user to the group.',
    category: 'group',
    filename: __filename,
    use: '<number>',
  },
  async (
    _0x5f4ba4,
    _0x15f7f4,
    _0x2994fb,
    {
      from: _0x26ce3b,
      quoted: _0x19a3b6,
      body: _0x13f3cb,
      isCmd: _0xb9739e,
      command: _0x6988e8,
      args: _0x2c4113,
      q: _0x1703b2,
      isGroup: _0x57a2e5,
      sender: _0x59174d,
      senderNumber: _0x1eba6b,
      botNumber2: _0x2ada6b,
      botNumber: _0xd2fc9,
      pushname: _0x16230f,
      isMe: _0x19c9d0,
      isOwner: _0x496fba,
      groupMetadata: _0x259ab9,
      groupName: _0x51aba6,
      participants: _0x3cee10,
      groupAdmins: _0x1a681e,
      isBotAdmins: _0x12aaab,
      isAdmins: _0x32135d,
      reply: _0x144886,
    }
  ) => {
    try {
      if (!_0x2994fb.isGroup) {
        return _0x144886('This command is only for groups.')
      }
      if (!_0x12aaab) {
        return _0x144886('I need admin privileges to add users.')
      }
      if (!_0x1703b2 || isNaN(_0x1703b2)) {
        return _0x144886('Please provide a valid phone number to add.')
      }
      const _0x3d37fe = _0x1703b2 + '@s.whatsapp.net'
      await _0x5f4ba4.groupParticipantsUpdate(
        _0x2994fb.chat,
        [_0x3d37fe],
        'add'
      )
      _0x144886('User ' + _0x1703b2 + ' has been added to the group.')
    } catch (_0x18ab14) {
      console.error('Error adding user:', _0x18ab14)
      _0x144886(
        'An error occurred while adding the user. Please make sure the number is correct and they are not already in the group.'
      )
    }
  }
)
cmd(
  {
    pattern: 'setgoodbye',
    desc: 'Set the goodbye message for the group.',
    category: 'group',
    react: '\uD83D\uDC4B',
    filename: __filename,
  },
  async (
    _0x30b957,
    _0x3947ea,
    _0x218fbc,
    {
      from: _0x1207f9,
      quoted: _0xec5505,
      body: _0x1d8411,
      isCmd: _0x2f2567,
      command: _0x3ed763,
      args: _0x1b0be1,
      q: _0x581380,
      isGroup: _0x2a0c22,
      sender: _0x1282c6,
      senderNumber: _0x54d2ad,
      botNumber2: _0x10cd6c,
      botNumber: _0x533aec,
      pushname: _0x3edefd,
      isMe: _0x2d27e3,
      isOwner: _0x3b5f68,
      groupMetadata: _0x3fde0a,
      groupName: _0x4ada8e,
      participants: _0x2412c9,
      groupAdmins: _0x7f37b2,
      isBotAdmins: _0x3e67b8,
      isAdmins: _0x4c65ac,
      reply: _0x1a09bb,
    }
  ) => {
    try {
      if (!_0x2a0c22) {
        return _0x1a09bb('This command can only be used in a group.')
      }
      if (!_0x3e67b8) {
        return _0x1a09bb('Bot must be an admin to use this command.')
      }
      if (!_0x4c65ac) {
        return _0x1a09bb('You must be an admin to use this command.')
      }
      const _0xfdae6e = _0x581380
      if (!_0xfdae6e) {
        return _0x1a09bb('Please provide a goodbye message.')
      }
      await _0x30b957.sendMessage(_0x1207f9, {
        image: { url: config.ALIVE_IMG },
        caption: _0xfdae6e,
      })
      await _0x1a09bb('Goodbye message has been set.')
    } catch (_0x2e4b1e) {
      console.log(_0x2e4b1e)
      _0x1a09bb('' + _0x2e4b1e)
    }
  }
)
cmd(
  {
    pattern: 'setwelcome',
    desc: 'Set the welcome message for the group.',
    category: 'group',
    react: '\uD83D\uDC4B',
    filename: __filename,
  },
  async (
    _0xe1cf41,
    _0x23df6e,
    _0x2e4c57,
    {
      from: _0x472518,
      quoted: _0x3d38c8,
      body: _0x550273,
      isCmd: _0x1ea41e,
      command: _0x1ce301,
      args: _0xe0573,
      q: _0x587380,
      isGroup: _0x2b26b6,
      sender: _0x406512,
      senderNumber: _0x435eb3,
      botNumber2: _0x2c33e6,
      botNumber: _0x8f7f75,
      pushname: _0x3de834,
      isMe: _0x3f1092,
      isOwner: _0x481054,
      groupMetadata: _0x153e63,
      groupName: _0x2e51a9,
      participants: _0x36171e,
      groupAdmins: _0x2725ce,
      isBotAdmins: _0x532437,
      isAdmins: _0x2f51f6,
      reply: _0x5171a3,
    }
  ) => {
    try {
      if (!_0x2b26b6) {
        return _0x5171a3('This command can only be used in a group.')
      }
      if (!_0x532437) {
        return _0x5171a3('Bot must be an admin to use this command.')
      }
      if (!_0x2f51f6) {
        return _0x5171a3('උබ ඇඩ්මින් නේවේනි පාඩුවේ ඉදපන්🙃.')
      }
      const _0x4a82f5 = _0x587380
      if (!_0x4a82f5) {
        return _0x5171a3('Please provide a welcome message.')
      }
      await _0xe1cf41.sendMessage(_0x472518, {
        image: { url: config.ALIVE_IMG },
        caption: _0x4a82f5,
      })
      await _0x5171a3('Welcome message has been set.')
    } catch (_0x38425e) {
      console.log(_0x38425e)
      _0x5171a3('' + _0x38425e)
    }
  }
)
