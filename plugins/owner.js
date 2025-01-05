const { cmd, commands } = require('../command'),
  { exec } = require('child_process'),
  config = require('../config'),
  { sleep } = require('../lib/functions')
cmd(
  {
    pattern: 'shutdown',
    desc: 'Shutdown the bot.',
    category: 'owner',
    react: '\uD83D\uDED1',
    filename: __filename,
  },
  async (
    _0x17557d,
    _0x2a3177,
    _0x530e18,
    { from: _0x417f11, isOwner: _0x1d540b, reply: _0xf1bb9e }
  ) => {
    if (!_0x1d540b) {
      return _0xf1bb9e('\u274C You are not the owner!')
    }
    _0xf1bb9e('\uD83D\uDED1 Shutting down...').then(() => process.exit())
  }
)
cmd(
  {
    pattern: 'broadcast',
    desc: 'Broadcast a message to all groups.',
    category: 'owner',
    react: '\uD83D\uDCE2',
    filename: __filename,
  },
  async (
    _0x16e87c,
    _0x2b1e3f,
    _0x89ea3f,
    { from: _0x5ac5b7, isOwner: _0x4f8ce5, args: _0x335cc, reply: _0x5af1ec }
  ) => {
    if (!_0x4f8ce5) {
      return _0x5af1ec('\u274C You are not the owner!')
    }
    if (_0x335cc.length === 0) {
      return _0x5af1ec('\uD83D\uDCE2 Please provide a message to broadcast.')
    }
    const _0x18b972 = _0x335cc.join(' '),
      _0x2a96f8 = Object.keys(await _0x16e87c.groupFetchAllParticipating())
    for (const _0x2bbaf4 of _0x2a96f8) {
      await _0x16e87c.sendMessage(
        _0x2bbaf4,
        { text: _0x18b972 },
        { quoted: _0x2b1e3f }
      )
    }
    _0x5af1ec('\uD83D\uDCE2 Message broadcasted to all groups.')
  }
)
cmd(
  {
    pattern: 'setpp',
    desc: 'Set bot profile picture.',
    category: 'owner',
    react: '\uD83D\uDDBC️',
    filename: __filename,
  },
  async (
    _0x284683,
    _0x20efbc,
    _0x13231a,
    { from: _0x57c029, isOwner: _0x4813ed, quoted: _0x2f7712, reply: _0x1eb7c9 }
  ) => {
    if (!_0x4813ed) {
      return _0x1eb7c9('\u274C You are not the owner!')
    }
    if (!_0x2f7712 || !_0x2f7712.message.imageMessage) {
      return _0x1eb7c9('\u274C Please reply to an image.')
    }
    try {
      const _0x4454ba = await _0x284683.downloadMediaMessage(_0x2f7712)
      await _0x284683.updateProfilePicture(_0x284683.user.jid, {
        url: _0x4454ba,
      })
      _0x1eb7c9('\uD83D\uDDBC️ Profile picture updated successfully!')
    } catch (_0x33be67) {
      _0x1eb7c9('\u274C Error updating profile picture: ' + _0x33be67.message)
    }
  }
)
cmd(
  {
    pattern: 'block',
    desc: 'Block a user.',
    category: 'owner',
    react: '\uD83D\uDEAB',
    filename: __filename,
  },
  async (
    _0x141489,
    _0x4b95c7,
    _0x4c33ce,
    { from: _0x4d3a62, isOwner: _0xf0f5f2, quoted: _0x542144, reply: _0x53acd0 }
  ) => {
    if (!_0xf0f5f2) {
      return _0x53acd0('\u274C You are not the owner!')
    }
    if (!_0x542144) {
      return _0x53acd0('\u274C Please reply to the user you want to block.')
    }
    const _0x4becdd = _0x542144.sender
    try {
      await _0x141489.updateBlockStatus(_0x4becdd, 'block')
      _0x53acd0('\uD83D\uDEAB User ' + _0x4becdd + ' blocked successfully.')
    } catch (_0x35db7e) {
      _0x53acd0('\u274C Error blocking user: ' + _0x35db7e.message)
    }
  }
)
cmd(
  {
    pattern: 'unblock',
    desc: 'Unblock a user.',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (
    _0x1cc316,
    _0x735189,
    _0x178e9d,
    { from: _0x348936, isOwner: _0x4fe5d1, quoted: _0x168b4a, reply: _0x3e600a }
  ) => {
    if (!_0x4fe5d1) {
      return _0x3e600a('\u274C You are not the owner!')
    }
    if (!_0x168b4a) {
      return _0x3e600a('\u274C Please reply to the user you want to unblock.')
    }
    const _0x9cf308 = _0x168b4a.sender
    try {
      await _0x1cc316.updateBlockStatus(_0x9cf308, 'unblock')
      _0x3e600a('\u2705 User ' + _0x9cf308 + ' unblocked successfully.')
    } catch (_0x19842d) {
      _0x3e600a('\u274C Error unblocking user: ' + _0x19842d.message)
    }
  }
)
cmd(
  {
    pattern: 'clearchats',
    desc: 'Clear all chats from the bot.',
    category: 'owner',
    react: '\uD83E\uDDF9',
    filename: __filename,
  },
  async (
    _0x50e928,
    _0x9a135e,
    _0x20fe44,
    { from: _0x491e0b, isOwner: _0x387366, reply: _0x22f4d3 }
  ) => {
    if (!_0x387366) {
      return _0x22f4d3('\u274C You are not the owner!')
    }
    try {
      const _0x19a096 = _0x50e928.chats.all()
      for (const _0x2bb709 of _0x19a096) {
        await _0x50e928.modifyChat(_0x2bb709.jid, 'delete')
      }
      _0x22f4d3('\uD83E\uDDF9 All chats cleared successfully!')
    } catch (_0x150d7f) {
      _0x22f4d3('\u274C Error clearing chats: ' + _0x150d7f.message)
    }
  }
)
cmd(
  {
    pattern: 'jid',
    desc: "Get the bot's JID.",
    category: 'owner',
    react: '\uD83E\uDD16',
    filename: __filename,
  },
  async (
    _0x1bd597,
    _0x5a492e,
    _0x14b4b6,
    { from: _0x2023e0, isOwner: _0x3a46a9, reply: _0x4fe44c }
  ) => {
    if (!_0x3a46a9) {
      return _0x4fe44c('\u274C You are not the owner!')
    }
    _0x4fe44c('\uD83E\uDD16 *Bot JID:* ' + _0x1bd597.user.jid)
  }
)
cmd(
  {
    pattern: 'gjid',
    desc: 'Get the list of JIDs for all groups the bot is part of.',
    category: 'owner',
    react: '\uD83D\uDCDD',
    filename: __filename,
  },
  async (
    _0x5aa339,
    _0x2e2a70,
    _0x3752ed,
    { from: _0x341e37, isOwner: _0x1cb0b6, reply: _0x42c779 }
  ) => {
    if (!_0x1cb0b6) {
      return _0x42c779('\u274C You are not the owner!')
    }
    const _0x15daef = await _0x5aa339.groupFetchAllParticipating(),
      _0x282013 = Object.keys(_0x15daef).join('\n')
    _0x42c779('\uD83D\uDCDD *Group JIDs:*\n\n' + _0x282013)
  }
)
