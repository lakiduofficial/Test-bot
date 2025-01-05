const _0x4a6c70 = (function () {
    let _0x38fb0e = true
    return function (_0x55abd8, _0x15463c) {
      const _0x4c9489 = _0x38fb0e
        ? function () {
            if (_0x15463c) {
              const _0x3610bc = _0x15463c.apply(_0x55abd8, arguments)
              return (_0x15463c = null), _0x3610bc
            }
          }
        : function () {}
      return (_0x38fb0e = false), _0x4c9489
    }
  })(),
  _0x49e4c4 = _0x4a6c70(this, function () {
    return _0x49e4c4
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x49e4c4)
      .search('(((.+)+)+)+$')
  })
_0x49e4c4()
const _0x45b17e = (function () {
  let _0x510541 = true
  return function (_0xd53363, _0x417732) {
    const _0x440ad3 = _0x510541
      ? function () {
          if (_0x417732) {
            const _0x226621 = _0x417732.apply(_0xd53363, arguments)
            return (_0x417732 = null), _0x226621
          }
        }
      : function () {}
    return (_0x510541 = false), _0x440ad3
  }
})()
;(function () {
  _0x45b17e(this, function () {
    const _0x3c2ba4 = new RegExp('function *\\( *\\)'),
      _0x872181 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x4ccc9c = _0x42be95('init')
    if (
      !_0x3c2ba4.test(_0x4ccc9c + 'chain') ||
      !_0x872181.test(_0x4ccc9c + 'input')
    ) {
      _0x4ccc9c('0')
    } else {
      _0x42be95()
    }
  })()
})()
const _0x3d60c0 = (function () {
  let _0x105c2a = true
  return function (_0x445b6b, _0x4d0369) {
    const _0x275408 = _0x105c2a
      ? function () {
          if (_0x4d0369) {
            const _0x52d1e0 = _0x4d0369.apply(_0x445b6b, arguments)
            return (_0x4d0369 = null), _0x52d1e0
          }
        }
      : function () {}
    return (_0x105c2a = false), _0x275408
  }
})()
const _0x193434 = _0x3d60c0(this, function () {
  let _0x452169
  try {
    const _0x50dfea = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x452169 = _0x50dfea()
  } catch (_0x89afde) {
    _0x452169 = window
  }
  const _0x7abe87 = (_0x452169.console = _0x452169.console || {}),
    _0x1611f7 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
  for (let _0x15d242 = 0; _0x15d242 < _0x1611f7.length; _0x15d242++) {
    const _0x40c559 = _0x3d60c0.constructor.prototype.bind(_0x3d60c0),
      _0x3330f0 = _0x1611f7[_0x15d242],
      _0x26dcc1 = _0x7abe87[_0x3330f0] || _0x40c559
    _0x40c559['__proto__'] = _0x3d60c0.bind(_0x3d60c0)
    _0x40c559.toString = _0x26dcc1.toString.bind(_0x26dcc1)
    _0x7abe87[_0x3330f0] = _0x40c559
  }
})
_0x193434()
const axios = require('axios')
const { File } = require('megajs'),
  { cmd } = require('../command'),
  config = require('../config'),
  _0x3284b2 = {}
_0x3284b2.pattern = 'mega'
_0x3284b2.react = '\uD83C\uDF5F'
_0x3284b2.alias = ['megadl', 'meganz']
_0x3284b2.desc = 'urlneed'
_0x3284b2.category = 'download'
_0x3284b2.use = '.mega url'
_0x3284b2.filename = __filename
cmd(
  _0x3284b2,
  async (
    _0x4ff5d7,
    _0x14a19e,
    _0xc0739e,
    { from: _0x53aabe, q: _0x4f5b6d, reply: _0x3d84e4 }
  ) => {
    if (!_0x4f5b6d) {
      return await _0x3d84e4('Please provide a mega.nz URL!')
    }
    try {
      const _0x2410d9 = File.fromURL(_0x4f5b6d)
      await _0x2410d9.loadAttributes()
      const _0x1e2b2d = await _0x2410d9.downloadBuffer()
      if (/mp4/.test(_0x2410d9.name)) {
        await _0x4ff5d7.sendMessage(
          'from, { document: data, mimetype: "video/mp4", filename: ${file.name} }, { quoted: mek }'
        )
      } else {
        if (/pdf/.test(_0x2410d9.name)) {
          await _0x4ff5d7.sendMessage(
            'from, { document: data, mimetype: "application/pdf", filename: ${file.name} }, { quoted: mek }'
          )
        } else {
          if (/zip/.test(_0x2410d9.name)) {
            await _0x4ff5d7.sendMessage(
              'from, { document: data, mimetype: "application/zip", filename: ${file.name} }, { quoted: mek }'
            )
          } else {
            if (/rar/.test(_0x2410d9.name)) {
              await _0x4ff5d7.sendMessage(
                _0x53aabe,
                '{ document: data, mimetype: "application/x-rar-compressed", filename: ${file.name} }, { quoted: mek }'
              )
            } else {
              if (/7z/.test(_0x2410d9.name)) {
                await _0x4ff5d7.sendMessage(
                  'from, { document: data, mimetype: "application/x-7z-compressed", filename: ${file.name} }, { quoted: mek }'
                )
              } else {
                if (/jpg|jpeg/.test(_0x2410d9.name)) {
                  await _0x4ff5d7.sendMessage(
                    'from, { document: data, mimetype: "image/jpeg", filename: ${file.name} }, { quoted: mek }'
                  )
                } else {
                  if (/png/.test(_0x2410d9.name)) {
                    await _0x4ff5d7.sendMessage(
                      'from, { document: data, mimetype: "image/png", filename: ${file.name} }, { quoted: mek }'
                    )
                  } else {
                    await _0x4ff5d7.sendMessage(
                      'from, { document: data, mimetype: "application/octet-stream", filename: ${file.name} }, { quoted: mek }'
                    )
                  }
                }
              }
            }
          }
        }
      }
      const _0x4237a0 = {
        text: '\u2705',
        key: _0x14a19e.key,
      }
      const _0x5a82e2 = { react: _0x4237a0 }
      await _0x4ff5d7.sendMessage(_0x53aabe, _0x5a82e2)
    } catch (_0x52120c) {
      console.log(_0x52120c)
      _0x3d84e4('${e}')
    }
  }
)
function _0x42be95(_0x219d66) {
  function _0x1b7715(_0x2b9eb4) {
    if (typeof _0x2b9eb4 === 'string') {
      return function (_0x196e23) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x2b9eb4 / _0x2b9eb4).length !== 1 || _0x2b9eb4 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x1b7715(++_0x2b9eb4)
  }
  try {
    if (_0x219d66) {
      return _0x1b7715
    } else {
      _0x1b7715(0)
    }
  } catch (_0x3247a3) {}
}
;(function () {
  let _0x54244c
  try {
    const _0xedb70b = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x54244c = _0xedb70b()
  } catch (_0x199f2e) {
    _0x54244c = window
  }
  _0x54244c.setInterval(_0x42be95, 4000)
})()
