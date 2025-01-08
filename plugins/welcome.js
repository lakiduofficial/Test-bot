const fs = require('fs'),
  path = require('path'),
  { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command'),
  { fetchJson } = require('../lib/functions'),
  sensitiveData = require('../auth_info_baileys/a/b/c/d/dddamsbs')
let listenerRegistered = false
const sendWelcomeMessage = async (_0x3249ac, _0x671aa4, _0x407f45) => {
    try {
      const _0x3f48e1 = await _0x3249ac.groupMetadata(_0x671aa4),
        _0x201a4f = _0x3f48e1.subject,
        _0x2ac05f = _0x3f48e1.desc || 'No description available.',
        _0x47cf63 = await readEnv()
      if (!_0x47cf63.WELCOME_SET) {
        throw new Error(
          'WELCOME_SET is not defined in the environment variables.'
        )
      }
      let _0x538394 = '\u200B'.repeat(4000),
        _0x20b639 =
          '\n' +
          _0x47cf63.WELCOME_SET +
          '\n\n*Name :*\n' +
          _0x201a4f +
          '\n\n*Description :*\n' +
          _0x2ac05f +
          '\n\nᴄ'
      const _0x3fa003 = _0x407f45
        .map((_0x5233a5) => '@' + _0x5233a5.split('@')[0])
        .join('\n')
      let _0x2dd679 =
        '*Hey \uD83E\uDEC2\u2665️*\n' +
        _0x3fa003 +
        '\n*Welcome to Group \u2935️*\n' +
        _0x538394 +
        _0x20b639
      await _0x3249ac.sendMessage(_0x671aa4, {
        image: { url: 'https://i.imgur.com/JurU8ZF.jpeg' },
        caption: _0x2dd679,
        mentions: _0x407f45,
      })
      await sendGroupRulesAlert(_0x3249ac, _0x407f45, _0x201a4f, _0x2ac05f)
    } catch (_0x478917) {
      console.error('Error sending welcome message:', _0x478917)
    }
  },
  sendGroupRulesAlert = async (_0x388026, _0x43a3a2, _0x7cb225, _0x2d5f7e) => {
    try {
      const _0x1e6e0e = await readEnv()
      if (_0x1e6e0e.WELCOME_ALERT === undefined) {
        throw new Error(
          'WELCOME_ALERT is not defined in the environment variables.'
        )
      }
      if (_0x1e6e0e.WELCOME_ALERT === 'true') {
        const _0x5f3e3d =
          '*Hey Dear \uD83E\uDEC2\u2764️*\n\n*Welcome to ' +
          _0x7cb225 +
          '*\n\n' +
          _0x2d5f7e +
          '\n\n*Be sure to read the group description*\n\nꜟᴄ'
        for (const _0x2e2caf of _0x43a3a2) {
          try {
            if (!_0x2e2caf) {
              continue
            }
            await _0x388026.sendMessage(_0x2e2caf, {
              image: { url: 'https://i.imgur.com/vzDwkjg.jpeg' },
              caption: _0x5f3e3d,
            })
          } catch (_0xa5cfb7) {
            console.error(
              'Error sending message to ' + _0x2e2caf + ':',
              _0xa5cfb7
            )
          }
        }
      }
    } catch (_0x49838e) {
      console.error('Error sending group rules alert:', _0x49838e)
    }
  },
  registerGroupWelcomeListener = (_0x4cb914) => {
    !listenerRegistered &&
      (_0x4cb914.ev.on('group-participants.update', async (_0x579642) => {
        const {
          id: _0x426817,
          participants: _0x34713d,
          action: _0x463ede,
        } = _0x579642
        _0x463ede === 'add' &&
          _0x34713d.length > 0 &&
          (console.log('New participants:', _0x34713d),
          await sendWelcomeMessage(_0x4cb914, _0x426817, _0x34713d))
      }),
      (listenerRegistered = true))
  }
cmd(
  { on: 'body' },
  async (
    _0x2f3597,
    _0x25725e,
    _0x5752e6,
    { from: _0x5351e6, body: _0x47c10e, isOwner: _0x570158 }
  ) => {
    try {
      const _0x522b22 = await readEnv()
      if (_0x522b22.WELCOME === undefined) {
        throw new Error('WELCOME is not defined in the environment variables.')
      }
      if (_0x522b22.WELCOME === 'true') {
        if (_0x570158) {
          return
        }
        registerGroupWelcomeListener(_0x2f3597)
      }
    } catch (_0x437ae6) {
      console.log(_0x437ae6)
      await _0x5752e6.reply('Error: ' + _0x437ae6.message)
    }
  }
)
