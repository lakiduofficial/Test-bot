const axios = require('axios'),
  config = require('../config'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'weather',
    desc: '\uD83C\uDF24 Get weather information for a location',
    react: '\uD83C\uDF24',
    category: 'other',
    filename: __filename,
  },
  async (
    _0xbadbba,
    _0x333e1a,
    _0x444e52,
    { from: _0x2b1aca, q: _0x273b15, reply: _0x1704ca }
  ) => {
    try {
      if (!_0x273b15) {
        return _0x1704ca(
          '\u2757 Please provide a city name. Usage: .weather [city name]'
        )
      }
      const _0x76d264 = '2d61a72574c11c4f36173b627f8cb177',
        _0xab2f33 = _0x273b15,
        _0x391ba4 =
          'http://api.openweathermap.org/data/2.5/weather?q=' +
          _0xab2f33 +
          '&appid=' +
          _0x76d264 +
          '&units=metric',
        _0xf8694 = await axios.get(_0x391ba4),
        _0x5f1df1 = _0xf8694.data,
        _0x474546 =
          '\n\uD83D\uDC9B *Weather Information for ' +
          _0x5f1df1.name +
          ', ' +
          _0x5f1df1.sys.country +
          '* \uD83C\uDF0D\n\uD83D\uDC9B *Temperature*: ' +
          _0x5f1df1.main.temp +
          '\xB0C\n\uD83D\uDC9B *Humidity*: ' +
          _0x5f1df1.main.humidity +
          '%\n\uD83D\uDC9B *Weather*: ' +
          _0x5f1df1.weather[0].main +
          '\n\uD83D\uDC9B *Description*: ' +
          _0x5f1df1.weather[0].description +
          '\n\uD83D\uDC9B *Wind Speed*: ' +
          _0x5f1df1.wind.speed +
          ' m/s\n\uD83D\uDC9B *Pressure*: ' +
          _0x5f1df1.main.pressure +
          ' hPa\n\n*QUEEN-ISHU-MD*\n'
      return _0x1704ca(_0x474546)
    } catch (_0x18c9a9) {
      console.log(_0x18c9a9)
      if (_0x18c9a9.response && _0x18c9a9.response.status === 404) {
        return _0x1704ca(
          '\uD83D\uDEAB City not found. Please check the spelling and try again.'
        )
      }
      return _0x1704ca(
        '\u26A0️ An error occurred while fetching the weather information. Please try again later.'
      )
    }
  }
)
