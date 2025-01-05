const { readEnv } = require('../lib/database'),
  { cmd } = require('../command')
cmd(
  { on: 'body' },
  async (
    _0x1bd730,
    _0x583723,
    _0x685f27,
    { from: _0xb7e557, isOwner: _0x3b16a8 }
  ) => {
    const _0x42b9a8 = await readEnv()
    if (_0x42b9a8.ALLOWS_ONLINE === 'false') {
      await _0x1bd730.sendPresenceUpdate('paused', _0xb7e557)
      return
    }
  }
)
