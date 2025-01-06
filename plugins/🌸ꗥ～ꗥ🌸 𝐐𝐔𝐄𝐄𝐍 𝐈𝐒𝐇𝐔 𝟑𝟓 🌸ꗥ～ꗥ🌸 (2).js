(function (_0x9d4c1a, _0x52153d) {
  const _0xeb3d2a = _0x9d4c1a();
  while (true) {
    try {
      const _0x3e8b07 = parseInt(_0xb6a1(960, 0x1d9)) / 1 + parseInt(_0xb6a1(587, 0xc8)) / 2 * (parseInt(_0xb6a1(258, -0x1ec)) / 3) + -parseInt(_0xb6a1(570, -0x1d8)) / 4 + parseInt(_0xb6a1(460, -0x32)) / 5 + -parseInt(_0xb6a1(936, -0x46)) / 6 + parseInt(_0xb6a1(508, 0x185)) / 7 + parseInt(_0xb6a1(543, 0xa5)) / 8 * (-parseInt(_0xb6a1(1059, 0x5da)) / 9);
      if (_0x3e8b07 === _0x52153d) {
        break;
      } else {
        _0xeb3d2a.push(_0xeb3d2a.shift());
      }
    } catch (_0x5c1084) {
      _0xeb3d2a.push(_0xeb3d2a.shift());
    }
  }
})(_0x1606, 118916);
const _0x5d7536 = function () {
  let _0x3208b4 = true;
  return function (_0x299f1a, _0x26c76a) {
    const _0x2bb28c = _0x3208b4 ? function () {
      if (_0x26c76a) {
        const _0x1bdb2c = _0x26c76a.apply(_0x299f1a, arguments);
        _0x26c76a = null;
        return _0x1bdb2c;
      }
    } : function () {};
    _0x3208b4 = false;
    return _0x2bb28c;
  };
}();
const _0x28b203 = _0x5d7536(this, function () {
  return _0x28b203.toString().search("(((.+)+)+)+$").toString().constructor(_0x28b203).search("(((.+)+)+)+$");
});
_0x28b203();
function _0x4be7fd(_0x3481ec, _0x3c5adc, _0x26470e, _0x49a157, _0x5ee7ca) {
  return _0xb6a1(_0x3481ec + 0x321, _0x5ee7ca);
}
const _0x2df816 = function () {
  let _0x17851f = true;
  return function (_0x3c1e45, _0xebdf58) {
    const _0x26a27e = _0x17851f ? function () {
      if (_0xebdf58) {
        const _0x16fa55 = _0xebdf58.apply(_0x3c1e45, arguments);
        _0xebdf58 = null;
        return _0x16fa55;
      }
    } : function () {};
    _0x17851f = false;
    return _0x26a27e;
  };
}();
(function () {
  _0x2df816(this, function () {
    const _0x3dbbc1 = new RegExp("function *\\( *\\)");
    const _0x17aed6 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x1c1428 = _0x4af9d5("init");
    if (!_0x3dbbc1.test(_0x1c1428 + "chain") || !_0x17aed6.test(_0x1c1428 + "input")) {
      _0x1c1428('0');
    } else {
      _0x4af9d5();
    }
  })();
})();
const _0x244689 = function () {
  let _0x4e0cee = true;
  return function (_0xb28c7e, _0x49cbd4) {
    const _0x350d96 = _0x4e0cee ? function () {
      if (_0x49cbd4) {
        const _0x13fd38 = _0x49cbd4.apply(_0xb28c7e, arguments);
        _0x49cbd4 = null;
        return _0x13fd38;
      }
    } : function () {};
    _0x4e0cee = false;
    return _0x350d96;
  };
}();
const _0x4b2f3f = _0x244689(this, function () {
  let _0x4e5ddf;
  try {
    const _0x5818a1 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4e5ddf = _0x5818a1();
  } catch (_0x44853a) {
    _0x4e5ddf = window;
  }
  const _0x3495cd = _0x4e5ddf.console = _0x4e5ddf.console || {};
  const _0x55a784 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x36b5a5 = 0; _0x36b5a5 < _0x55a784.length; _0x36b5a5++) {
    const _0x220469 = _0x244689.constructor.prototype.bind(_0x244689);
    const _0x1cfe98 = _0x55a784[_0x36b5a5];
    const _0x1741a6 = _0x3495cd[_0x1cfe98] || _0x220469;
    _0x220469.__proto__ = _0x244689.bind(_0x244689);
    _0x220469.toString = _0x1741a6.toString.bind(_0x1741a6);
    _0x3495cd[_0x1cfe98] = _0x220469;
  }
});
_0x4b2f3f();
const {
  cmd,
  commands
} = require("../command");
const yts = require("yt-search");
const {
  fetchJson
} = require("../lib/functions");
const {
  ytsearch,
  ytmp3
} = require("@dark-yasiya/yt-dl.js");
const axios = require("axios");
async function ytmp4(_0x57d42f, _0x129e11) {
  try {
    if (!_0x57d42f || !_0x129e11) {
      throw new Error("url and format parameters are required.");
    }
    const _0x179a5b = parseInt(_0x129e11.replace('p', ''), 10);
    const _0x276283 = {
      'button': 0x1,
      'start': 0x1,
      'end': 0x1,
      'format': _0x179a5b,
      'url': _0x57d42f
    };
    const _0xaaab5 = {
      'Accept': "*/*",
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
      'Origin': "https://loader.to",
      'Referer': "https://loader.to",
      'Sec-Ch-Ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': "\"Android\"",
      'Sec-Fetch-Dest': "empty",
      'Sec-Fetch-Mode': "cors",
      'Sec-Fetch-Site': "cross-site",
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0x554162 = await axios.get("https://ab.cococococ.com/ajax/download.php", {
      'params': _0x276283,
      'headers': _0xaaab5
    });
    const _0x14b2fb = _0x554162.data.id;
    const _0x47f354 = async () => {
      const _0x1b7e13 = {
        'id': _0x14b2fb
      };
      try {
        const _0x7ec7a8 = {
          params: _0x1b7e13,
          headers: _0xaaab5
        };
        const _0x2cfe9a = await axios.get("https://p.oceansaver.in/ajax/progress.php", _0x7ec7a8);
        const {
          progress: _0x46e774,
          download_url: _0x1d89b1,
          text: _0x53c92b
        } = _0x2cfe9a.data;
        return _0x53c92b === "Finished" ? _0x1d89b1 : (await new Promise(_0x1bca97 => setTimeout(_0x1bca97, 1000)), _0x47f354());
      } catch (_0x5b819c) {
        throw new Error("Error in progress check: " + _0x5b819c.message);
      }
    };
    return await _0x47f354();
  } catch (_0x3af6a2) {
    console.error("Error:", _0x3af6a2);
    return {
      'error': _0x3af6a2.message
    };
  }
}
function _0x4c84c6(_0xdc2968, _0x2f913b, _0x1fd416, _0x405d08, _0x8e7f88) {
  return _0xb6a1(_0x405d08 - 0x7c, _0x1fd416);
}
const _0x48f1f0 = {
  ytmp4: ytmp4
};
module.exports = _0x48f1f0;
function extractYouTubeId(_0x58578a) {
  const _0x5dfa4a = _0x58578a.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return _0x5dfa4a ? _0x5dfa4a[1] : null;
}
function convertYouTubeLink(_0x23756a) {
  const _0x542290 = extractYouTubeId(_0x23756a);
  if (_0x542290) {
    return "https://www.youtube.com/watch?v=" + _0x542290;
  }
  return _0x23756a;
}
function _0x1606() {
  const _0x4d0ec4 = ['rDZPd', "ain l", 'zsJvg', 'EMtuV', 'ZYgoI', "𝐃 *\n━", "nd fo", 'text', '/blob', 'vIFRU', 'IYnni', 'KHKHR', 'aw=tr', 'JCwbW', 'ʀᴇᴀᴛᴇ', "ase t", 'psnBX', 'UWxmM', 'ader.', 'YZVft', 'Name', 'cCAuC', 'ʙᴇʟᴏᴡ', 'nbylz', "𝔻 𝔻𝕆ℂ", 'SACHI', 'LsKkB', 'BQNmI', 'EjFYL', " Qᴜᴇᴇ", "\n 𝙄𝙎𝙃", 'cXBBG', 'ifWdQ', '*(?:[', 'ocean', 'WebKi', 'arch', 'rogre', 'lkjOw', 'NwdqU', 'NVzqO', ", lik", '1.2', '𝐖𝐍𝐋𝐎𝐀', "─❥*\n*", 'hed', "ɴ ɪꜱʜ", 'xJYcg', 'KrKeK', 'ᴍꜱᴀʀᴀ', 'data', 'itle.', 'xnpEz', 'test', 'terva', "eck: ", 'XpiiE', '.id/a', 'Type', 'unims', "a URL", 'UKDOU', 'OMjAk', 'lengt', 'FtGhg', "ion *", "url a", '83099', 'GUpHt', "id 10", 'BNwbC', "empt ", 'ibuti', 'LRaIE', 'BiZPK', '*720ᴘ', 'FQFXx', 'vRnUr', 'rLarg', 'repla', 'conte', 'KYoCh', '844164zqDYLK', 'eSuzt', 'tent.', 'conve', 'uQTfa', '../li', 'ludcH', 'Objec', 'Secon', 'BWaDK', 'ame', 'cheer', 'egndG', 'JIlqY', 'hrome', 'uMToC', ';q=0.', 'fFhTr', 'lMPZT', 'OruCD', 'lSKyN', " a Yo", 'vzxsl', '@dark', '131061gTSTDQ', 'pWKpf', 'b/fun', 'ud?ap', 'ACHIY', 'bjbna', "4*   ", 'gDUGP', 'Eauml', 'nailU', 'Ksvpa', 'facOP', 'OVVyQ', 'AXtmc', 'w.git', 'kDHsi', 'stanz', '://ap', 'YyPdI', "\n\n*1.", 'to__', "rmat ", 'rsati', 'vpsUQ', 'ing', 'hsGFb', 'fZTyJ', 'gXAKa', 'nail', "ᴅ ᴏɴ ", 'lVWda', "is\")(", 'a-zA-', 'ygMMi', 'amOZN', "ᴇᴘʟʏ ", 'mYRcC', 'DEfIM', 'fvLOA', 'YCGEq', 'cDVRh', 'xdiWe', 'OUClR', "  *ᴀᴜ", 'react', 'excep', 'faile', 'rwBPQ', 'ara1', 'ktuuO', 'qJbYb', 'oqDBG', 'ywZyn', 'tYEcm', 'BFWkQ', ", \"Ch", 'LFEcY', 'IzIrf', "*\n*2.", "\n\n*2.", '-dl.j', '://ww', 'mGjMS', 'wnloa', 'bMRbJ', 'com/S', "ry ag", 'UWVVU', 'atch?', 'zWNbJ', 'EtHhP', 'LwNcL', 'TSGfX', ":* ", 'oTQaM', 'hZryE', 'mHPCR', 'yoVrv', "3*   ", 'OBbBV', 'expor', "ᴘ*\n\n*", " :* ", 'nygct', 'rMess', " in p", 'serve', 'fFqsy', 'TzVSf', 'SYNHw', 'EblmM', '0@s.w', 'qbjSe', " Mobi", 'KqqwE', "ᴛʟᴇ :", 'twNhM', 'kKeoc', 'red.', '9hFVXNA', 'KxZov', '720', "n (fu", 'cipan', 'VYjGu', 'ZwnBp', 'rOjDM', 'lhRYZ', 'thub.', 'LrDwp', '.in/a', 'gifte', '➽────', '.9,en', 'rXaQA', "0 (Li", 'while', '━━━━━', 'mxloc', 'funct', 'bDLSz', '.coco', 'EUwDX', 'KRIUS', '360p', "d son", 'w.you', 'pdTfO', 'ons', 'yUQjC', 'faOlU', 'nJWxu', "e giv", 'ist', 'wNSsW', 'SEogV', 'Ihcse', 'svNgT', 'gqpMx', 'ezEMu', 'xxxxx', 'CzPSR', 'xtMes', 'YvDrV', 'FAgxG', 'LiwHW', 'filen', 'yVCWu', 'YGvJN', 'EeDlz', 'JdYDz', 'table', 'HseJl', 'HDzpD', 'rYgeR', "ɴ :* ", 'AamYV', 'warn', "   ┃ ", "*\n*1.", 'hgjnx', 'XFgyF', 'call', 'desc', '/mpeg', 'init', 'aGEPz', 'type', 'vLWNp', 'Apple', "ISHU ", 'CIZBb', 'ya/yt', 'OmloN', 'd&url', 'cAyfH', 'mgsul', 'gzip,', 'Ozhfq', "   \n\n", 'mimet', 'play', 'rogIm', 'tedte', 'strin', 'VHiUE', 's/mai', 'ᴜᴘʟᴏᴀ', 'idu.j', "  ┃  ", 'isFor', 'alias', 'rrtSK', 'zNMgc', 'param', 'First', "\"Not-", 'bujPk', '://p.', 'ikey=', 'ceFOp', 'MtTdX', 'Sdsa', 'get', '49917RngzNJ', 'ePGIx', 'VvyDr', 'dedTe', 'tNKoR', 'heade', '2.1', "\n*1* ", 'la/5.', 'ageId', "he re", 'vIBCe', 'hKIQx', 'xHxxc', 'LWKwU', 'ABmpn', 'pi/do', 'SJwNN', 'bRxVw', 'Sjmgu', "\"retu", 'BXBRi', "     ", "𝐍𝐆 𝐃𝐎", 'cZVCD', 'nstru', 'glQmB', 'S;q=0', 'FyoiM', 'UEbeT', 'YifCR', '1.1', 'mVbOH', 'NfpHe', 'KAsDF', 'eInfo', 'ECjrc', 'rJSae', 'BdnPm', 'proto', '*Need', 'nhAnq', "━━━\n❍", 'KQqLz', 'sPGhY', 'ges.u', 'moaDY', 'CAYnT', '*Fail', 'apply', 'OMADF', 'ddCom', 'ges', '{}.co', 'surca', 'onedJ', 'WpYUg', '://ab', 'group', "\n━━━━", 'Maofz', '-yasi', 'iVSbh', '://ra', 'RxTvx', 'pjBTl', "2*   ", "m\";v=", 'FZMcl', 'yt-se', 'kjaLU', 'jkHqt', 'pkiFe', 'FBZjk', 'yta', '*/*', "\"124\"", 'ory', 'sourc', 'messa', 'actio', 'fiVSM', 'essag', 'xkSMh', 'YPeyG', 'ruIsD', 'JSGon', 'nalAd', 'BjGvG', 'en-GB', 'A.Bra', 'KtgEu', 'xIYez', 'UYSOO', 'hSXiN', 'toStr', 'hCrnx', 'IbAPD', 'swQuS', 'sFFZN', 'PjWLK', 'MVEhi', 'tNpiJ', "ᴅᴜ ɴɪ", "\n*💥𝔻𝕆", 'trace', 'zBOIu', 'LqTGu', 'ZfYAI', 'KvleW', 'etter', 'ACryq', "ʀ ᴛᴏ*", " ᴍᴅ", "mpt f", "\n  \n ", " (tru", "*2*  ", 'nkkQi', 'ʀᴀᴛɪᴏ', 'UNElh', 'fdgxf', 'EsglV', 'com/w', 'Buaim', 'PyrSK', 'MqeqN', 'ptgym', 'hubus', 'EFezP', ".36 (", "To do", "\n*🔥ᴠɪ", '*480ᴘ', "𝐃🎵`\n*", 'sirxU', 'Error', 'Mozil', 'nyvNE', "ate, ", 'TeFIm', 'mlcCY', 'OAiAo', 'bind', 'ULlic', 'JjWRz', 'zSRQv', 'KzJix', 'fari/', 'pzNFu', 'uXkRx', 'ater!', 'ailed', 'dl_li', 'Hwmkb', 'crUpa', " proc", '1080', 'KUWJY', '─────', 'ᴅᴏᴡɴʟ', 'ctor(', "e Gec", 'cors', 'mlLNR', 'input', 'retur', 'JfIVB', " defl", '/laks', 'error', 'iJdHS', 'rAKtA', '../co', 'capti', 'xSUnj', 'media', 'eos.', 'nBQHf', 'parti', 'erThu', "e me ", 'kdxen', 'i.gif', ')+)+)', 'hbqzd', " 📁*\n\n", 'gs.', 'NzgxC', '0-9a-', 'HFwfd', 'OtKde', 'OOQMJ', 'JiQsW', 'cross', 'zqsXn', 'MZVwK', 'fUqtw', 'ikCWu', 'bYZJl', 'pAkUF', 'qebYl', '318095GwTbDb', 'jXiwR', 'tion', 'aksid', 'WZlXt', 'aIzGa', 'DrEvz', 'NbIjN', 'pDiSJ', 'VBcHl', 'forwa', " are ", " *ᴅᴏᴄ", 'XzeSQ', 'YPkrm', 'YXtqJ', 'peg?r', "\n*🔥ᴅᴜ", "d att", 'SPHLY', "; K) ", '$]*)', 'AOFFI', '/main', "rn th", "ᴅ ʙʏ ", "\\+\\+ ", "    ┃", "\\( *\\", "=\"99\"", 'image', 'KHTML', " atte", "ed to", 'LGTqL', 'hciIR', 'NaTzw', 'const', 'ewsle', '/head', 'kOGec', 'YcaZt', 'sidu.', "━\n\n  ", "ɪᴏɴ :", 'cjioG', " ɪꜱʜᴜ", 'SXAgn', '1589294LtmDpI', 'bZSlR', 'ytmp3', 'eJid', "━━━\n━", 'ɴᴜᴍʙᴇ', " ᴛʜᴇ ", 'iYLTr', 'Reply', "\n*🔥ᴜᴘ", 'SaxnS', 'rdedN', 'WQKmw', 'Fpakw', 'title', 'LszeY', 'Adgow', 'categ', 'times', 'url', 'Menti', 'dAttr', 'ghjOd', '94703', 'NXCzJ', 'bbQwM', "d vid", " 🔥*ᴛɪ", 'exter', 'IHdpZ', 'chain', 'lNmQY', 'zA-Z_', 'ercon', 'mandL', '913672jBEAUQ', "ʟᴏᴀᴅ ", 'CIAL/', 'pp.ne', 'QutAe', '480', " 𝔸𝕌𝔻𝕀", 'ʟᴀᴋꜱɪ', 'IBAtE', 'dSdyw', 'LtZrb', 'zoqJF', 'afFnd', 'remot', 'patte', '1.3', 'lIsmQ', '0.0.0', "𝐄𝐎 𝐃𝐎", 'state', 'PNsJw', 'icJwH', 'ss.ph', "\n*➽──", 'romiu', 'yGIgE', "ᴏɴ :*", '391280pGahDc', ',en-U', 'bWkdU', 'info', 'GgKXd', 'rQUxi', 'BCKkA', '://gi', 'searc', "oid\"", "ess t", 'views', 'ELsDi', 'KiroH', 'eAbtm', 'SqiWJ', 'pgLyV', '6vtksPO', 'nctio', 'iMkXp', 'SMNFA', "e) {}", 'tAltq', 'CEXZN', 'ᴏᴄᴜᴍᴇ', 'eQyId', "ᴘ*\n\n>", 'xeMHG', 'delet', 'hatsa', 'aSKbh', "*\n ", 'xtInf', 'ructo', 'rende', " ꜰʀᴏᴍ", 'ESpnw', 't/537', '2.3', "ss ch", 'oHsqS', 'match', 'tube.', 'vbDXF', "\n*ᴅᴏᴡ", 'hnAJk', 'TnUIl', 'showA', 'OwIwl', 'KtwQb', 'omfTv', 'gHBnh', 'com/l', 'ℕ𝕃𝕆𝔸𝔻', "𝙐 𝐕𝐈𝐃", 'HsCLs', '*1080', 'jax/p', 'psert', "le Sa", 'feGpN', 'song', '/124.', 'WWIfP', 'BGOdK', '.mp4', 'body', 'ᴜᴍᴇɴᴛ', 'vshkf', '2.4', 'key', 'uXttG', 'oad_u', 'n/lak', 'HGAzP', '__pro', 'oRcMT', '.com/', 'ijgBb', 'xxdfA', 'uEbPG', 'debu', 'avqpq', " ᴍᴅ✻", 'tterM', '/refs', 'DrBsR', "ᴜ ᴍᴅ✻", 'KGPEX', 'STUMD', "ᴅɪᴏ*\n", 'downl', 'quest', 'qaIae', '/mp4', 'SWSJL', 'resul', 'count', 'warde', "\"Andr", 'XGDjU', 'BCwnF', 'iddJE', 'ikuvi', 'gMybe', 'KLXKv', 'uicfH', 'hFXsM', '𝕌𝕄𝔼ℕ𝕋', 'tamp', 'PXtSw', '://lo', 'ago', 'eUrl', "𝕆 🎬🎬*", 'video', '-site', 'thumb', 'sage', "\n`🎵𝐈𝐒", 'exwAf', 'ZsBKm', 'nxiqN', 'spnUd', 'ype', '537.3', 'gHrPx', 'NAgjV', "1*   ", 'hYwsD', 'cococ', 'GMiry', 'owsEU', "𝐇𝐔 𝐒𝐎", 'quote', 'ZtRRr', "ko) C", 'WESnh', 'setIn', 'requi', 'yuQiN', ". Ple", 'yvHVS', "nd\";v", 'sendM', 'JeOQq', 'Qᴜᴇᴇɴ', 'EXkyQ', " 𝕍𝕀𝔻𝔼", 'oad', 'ytmp4', 'aId', 'xEioO', '🔥ᴛɪᴛʟ', 'Score', 'wDWZa', 'GiKvm', 'rding', " URL!", 'FyAkH', 'caqNO', 'gger', 'rYHhS', 'rFPPd', 'log', 'uTube', 'veOqH', 'dLPob', "*\n\n> ", 'LUfyX', 'zLcYG', 'hRijy', 'd/yta', 'vLVak', 'zjXTW', '*360ᴘ', " or t", 'ycEpu', 'zVfQk', "\n*© ᴄ", '───❥*', 'pXOli', 'QjwoA', "nux; ", 'keoWb', 'ᴅᴜʀᴀᴛ', 'menti', 'IBAGY', 'szbqt', "n() ", 'fVlQU', 'Andro', 'joEoz', 'aGHkh', 'qEXby', 'ctAZh', 'ch.my', 'VdlAt', 'ZISGg', 'CsikT', 'avdTH', 'oPoHx', 'ɴʟᴏᴀᴅ', 'YA-MD', 'TzaEg', 'https', 'kWIUv', 'xJDry', 'khjJh', 'Finis', 'Jid', 'jkKoS', 'rkkCc', '2.2', 'eters', '360', 'axios', '1.4', "ᴇᴡꜱ :", 'newsl', 'empty', " ᴍᴅ ✻", 'sguog', 'arMEu', '(((.+', 'ᴠɪᴇᴡꜱ', 'BrVaB', 'Pleas', 'oad.p', 'exten', " \n━━━", '/mp3', 'mbnai', 'keaUB', '𝕎ℕ𝕃𝕆𝔸', 'audio', 'wqXEF', 'SXQlT', 'gMXgt', 'hgcVz', 'KFFHE', 'mIFdh', '.mp3', 'bLtgk', "ᴏᴀᴅ ᴅ", 'gymYf', 'YyrcQ', "ᴀᴛ*\n\n", 'Z_$][', 'ycobo', 'mjxBz', "ᴇ :* ", "\n🔢 *ʀ", " ᴍᴅ\n", 'SWmIn', "\n❍ 🔥*", 'vAnwx', "· · ·", 'ajax/', 'iKloY', 'conso', 'Yoyrx', 'TYGKW', 'dontA', 'WITpf', 'OzpyS', 'GOIRx', 'KgDhk', 'saver', "ɴᴛ 📁*", 'jpeg', "𝕆 🎧*\n", 'iTHes', 'TCCwd', 'ction', 'iZQcY', 'qYCdd', 'OksqM', 'mmand', '*💥𝔻𝕆𝕎', 'TVDoi', 'eEYoI', 'ioybP', 'XnFzw'];
  _0x1606 = function () {
    return _0x4d0ec4;
  };
  return _0x1606();
}
const _0x577383 = {
  pattern: "song",
  alias: "play",
  desc: "To download songs.",
  react: '🎵',
  category: "download"
};
function _0x2d7e83(_0x36de1e, _0x126cf0, _0x3043d0, _0x4841f2, _0x7c13f) {
  return _0xb6a1(_0x126cf0 + 0x301, _0x3043d0);
}
_0x577383.filename = __filename;
cmd(_0x577383, async (_0xefa2ca, _0x179979, _0x462c25, {
  from: _0x177b08,
  quoted: _0x579516,
  body: _0x1d4d55,
  isCmd: _0x28fec7,
  command: _0x2114ba,
  args: _0x58c3b7,
  q: _0x17036d,
  isGroup: _0x56cd87,
  sender: _0xa4f541,
  senderNumber: _0x3274bc,
  botNumber2: _0x397884,
  botNumber: _0x1b3dd0,
  pushname: _0xcd9de1,
  isMe: _0x159017,
  isOwner: _0x30bf61,
  groupMetadata: _0x58460b,
  groupName: _0x1d694c,
  participants: _0x550cc3,
  groupAdmins: _0x23d7c5,
  isBotAdmins: _0x5b3d76,
  isAdmins: _0x4a10be,
  reply: _0x464761
}) => {
  try {
    if (!_0x17036d) {
      return _0x464761("Please give me a URL or title.");
    }
    _0x17036d = convertYouTubeLink(_0x17036d);
    const _0xdb1e41 = await yts(_0x17036d);
    const _0x218e6f = _0xdb1e41.videos[0];
    const _0x58c8be = _0x218e6f.url;
    let _0x4a7cb1 = "\n*➽────────────────────❥*\n`🎵𝐈𝐒𝐇𝐔 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃🎵`\n*➽────────────────────❥*\n*➽────────────────────❥*\n*🔥ᴛɪᴛʟᴇ :* " + _0x218e6f.title + "\n*🔥ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x218e6f.timestamp + "\n*🔥ᴠɪᴇᴡꜱ :* " + _0x218e6f.views + "\n*🔥ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x218e6f.ago + "\n*➽────────────────────❥*\n🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*💥𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝔸𝕌𝔻𝕀𝕆 🎧*\n\n*1*     ┃  *ᴀᴜᴅɪᴏ*\n\n*💥𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝔻𝕆ℂ𝕌𝕄𝔼ℕ𝕋 📁*\n\n*2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n\n> Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ\n";
    const _0x5bd22b = {
      url: _0x218e6f.thumbnail
    };
    const _0x116e74 = {
      mentionedJid: ["94703830990@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x116e74.forwardedNewsletterMessageInfo.newsletterJid = '';
    _0x116e74.forwardedNewsletterMessageInfo.newsletterName = "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ ✻";
    _0x116e74.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x116e74.externalAdReply.title = "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ";
    _0x116e74.externalAdReply.body = "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ";
    _0x116e74.externalAdReply.mediaType = 0x1;
    _0x116e74.externalAdReply.sourceUrl = "https://github.com/laksidunimsara1";
    _0x116e74.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/SACHIYAOFFICIAL/SACHIYA-MD/refs/heads/main/laksidu.jpeg";
    _0x116e74.externalAdReply.renderLargerThumbnail = false;
    _0x116e74.externalAdReply.showAdAttribution = true;
    const _0x857650 = {
      image: _0x5bd22b,
      caption: _0x4a7cb1,
      contextInfo: _0x116e74
    };
    const _0x2a7834 = {
      quoted: _0x179979
    };
    const _0xb6909 = await _0xefa2ca.sendMessage(_0x177b08, _0x857650, _0x2a7834);
    const _0x3bffe0 = _0xb6909.key.id;
    _0xefa2ca.ev.on("messages.upsert", async _0x89c8ca => {
      const _0x433e7d = _0x89c8ca.messages[0];
      if (!_0x433e7d.message) {
        return;
      }
      const _0x4b4f34 = _0x433e7d.message.conversation || _0x433e7d.message.extendedTextMessage?.["text"];
      const _0x438122 = _0x433e7d.key.remoteJid;
      const _0x5106dd = _0x433e7d.message.extendedTextMessage && _0x433e7d.message.extendedTextMessage.contextInfo.stanzaId === _0x3bffe0;
      if (_0x5106dd) {
        const _0x299e98 = {
          text: '⬇️',
          key: _0x433e7d.key
        };
        const _0x45efe2 = {
          react: _0x299e98
        };
        await _0xefa2ca.sendMessage(_0x438122, _0x45efe2);
        if (_0x4b4f34 === '1') {
          const _0x163f43 = await ytmp3(_0x58c8be);
          const _0x3ddc7c = {
            text: '⬆️',
            key: _0x433e7d.key
          };
          const _0x12a816 = {
            react: _0x3ddc7c
          };
          await _0xefa2ca.sendMessage(_0x438122, _0x12a816);
          const _0x69ae4f = {
            url: _0x163f43.download.url
          };
          const _0x3ad01f = {
            audio: _0x69ae4f,
            mimetype: "audio/mpeg",
            contextInfo: {}
          };
          _0x3ad01f.contextInfo.mentionedJid = ["94703830990@s.whatsapp.net"];
          _0x3ad01f.contextInfo.groupMentions = [];
          _0x3ad01f.contextInfo.forwardingScore = 0x1;
          _0x3ad01f.contextInfo.isForwarded = true;
          _0x3ad01f.contextInfo.forwardedNewsletterMessageInfo = {};
          _0x3ad01f.contextInfo.externalAdReply = {};
          _0x3ad01f.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = '';
          _0x3ad01f.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ✻";
          _0x3ad01f.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x3ad01f.contextInfo.externalAdReply.title = "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ";
          _0x3ad01f.contextInfo.externalAdReply.body = "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ";
          _0x3ad01f.contextInfo.externalAdReply.mediaType = 0x1;
          _0x3ad01f.contextInfo.externalAdReply.sourceUrl = _0x218e6f.url;
          _0x3ad01f.contextInfo.externalAdReply.thumbnailUrl = _0x218e6f.thumbnail;
          _0x3ad01f.contextInfo.externalAdReply.renderLargerThumbnail = false;
          _0x3ad01f.contextInfo.externalAdReply.showAdAttribution = true;
          const _0xaa66c = {
            quoted: _0x433e7d
          };
          await _0xefa2ca.sendMessage(_0x438122, _0x3ad01f, _0xaa66c);
          const _0x5bced6 = {
            text: '✅',
            key: _0x433e7d.key
          };
          const _0x347368 = {
            react: _0x5bced6
          };
          await _0xefa2ca.sendMessage(_0x438122, _0x347368);
        } else {
          if (_0x4b4f34 === '2') {
            const _0x180bf0 = await ytmp3(_0x58c8be);
            const _0x2efb85 = {
              text: '⬆️',
              key: _0x433e7d.key
            };
            const _0x55c2de = {
              react: _0x2efb85
            };
            await _0xefa2ca.sendMessage(_0x438122, _0x55c2de);
            const _0x5d0f51 = {
              url: _0x180bf0.download.url
            };
            const _0x258d0f = {
              quoted: _0x433e7d
            };
            await _0xefa2ca.sendMessage(_0x438122, {
              'document': _0x5d0f51,
              'mimetype': "audio/mp3",
              'fileName': _0x218e6f.title + ".mp3",
              'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ· · ·*\n ",
              'contextInfo': {
                'mentionedJid': ["94703830990@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': '',
                  'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ✻",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ",
                  'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                  'mediaType': 0x1,
                  'sourceUrl': _0x218e6f.url,
                  'thumbnailUrl': _0x218e6f.thumbnail,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, _0x258d0f);
            const _0x2a2cbd = {
              text: '✅',
              key: _0x433e7d.key
            };
            const _0x4d9fab = {
              react: _0x2a2cbd
            };
            await _0xefa2ca.sendMessage(_0x438122, _0x4d9fab);
            await _0xefa2ca.sendMessage;
          }
        }
      }
    });
  } catch (_0x4c834b) {
    console.log(_0x4c834b);
    _0x464761('' + _0x4c834b);
  }
});
const _0x3fe128 = {
  pattern: "mp1",
  desc: "To download videos.",
  react: '🎥',
  category: "download",
  filename: __filename
};
cmd(_0x3fe128, async (_0x37e6d4, _0x1a4c71, _0x5e0046, {
  from: _0x1ffb01,
  quoted: _0x5261c1,
  body: _0x5879f0,
  isCmd: _0x29f39f,
  command: _0x4bb0f2,
  args: _0x4b9eeb,
  q: _0x33ebbe,
  isGroup: _0x3f3721,
  sender: _0x3d4134,
  senderNumber: _0x384fd5,
  botNumber2: _0x5f13ab,
  botNumber: _0x55f092,
  pushname: _0x2c37ed,
  isMe: _0x304395,
  isOwner: _0x58cd14,
  groupMetadata: _0x193aa0,
  groupName: _0x5e7331,
  participants: _0x4eae98,
  groupAdmins: _0x2aa2cc,
  isBotAdmins: _0x5d9c69,
  isAdmins: _0x1762a3,
  reply: _0x278ab8
}) => {
  try {
    if (!_0x33ebbe) {
      return _0x278ab8("Please give me a URL or title.");
    }
    _0x33ebbe = convertYouTubeLink(_0x33ebbe);
    const _0x5c0aec = await yts(_0x33ebbe);
    const _0x5e5f14 = _0x5c0aec.videos[0];
    const _0x5eefc5 = _0x5e5f14.url;
    let _0x21adda = "\n  \n            \n━━━━━━━━━━━━━\n 𝙄𝙎𝙃𝙐 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 *\n━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━\n❍ 🔥*ᴛɪᴛʟᴇ :* " + _0x5e5f14.title + "\n❍ 🔥*ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x5e5f14.timestamp + "\n❍ 🔥*ᴠɪᴇᴡꜱ :* " + _0x5e5f14.views + "\n❍ 🔥*ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x5e5f14.ago + "\n━━━━━━━━━━━━━━━\n\n          \n\n\n🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*💥𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝕍𝕀𝔻𝔼𝕆 🎬🎬*\n\n*1.1*     ┃  *360ᴘ*\n*1.2*     ┃  *480ᴘ*\n*1.3*     ┃  *720ᴘ*\n*1.4*     ┃  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2.1*     ┃  *360ᴘ*\n*2.2*     ┃  *480ᴘ*\n*2.3*     ┃  *720ᴘ*\n*2.4*     ┃  *1080ᴘ*\n\n> Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ✻\n";
    const _0x25b371 = {
      url: _0x5e5f14.thumbnail
    };
    const _0x1783b7 = {
      mentionedJid: ["94703830990@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x1783b7.forwardedNewsletterMessageInfo.newsletterJid = '';
    _0x1783b7.forwardedNewsletterMessageInfo.newsletterName = "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ✻";
    _0x1783b7.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x1783b7.externalAdReply.title = "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ";
    _0x1783b7.externalAdReply.body = "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ";
    _0x1783b7.externalAdReply.mediaType = 0x1;
    _0x1783b7.externalAdReply.sourceUrl = "https://github.com/laksidunimsara1";
    _0x1783b7.externalAdReply.thumbnailUrl = "https://github.com/SACHIYAOFFICIAL/SACHIYA-MD/blob/main/laksidu.jpeg?raw=true";
    _0x1783b7.externalAdReply.renderLargerThumbnail = false;
    _0x1783b7.externalAdReply.showAdAttribution = true;
    const _0xf326e8 = {
      image: _0x25b371,
      caption: _0x21adda,
      contextInfo: _0x1783b7
    };
    const _0x27c7a5 = {
      quoted: _0x1a4c71
    };
    const _0x58ebf1 = await _0x37e6d4.sendMessage(_0x1ffb01, _0xf326e8, _0x27c7a5);
    const _0x45f412 = _0x58ebf1.key.id;
    _0x37e6d4.ev.on("messages.upsert", async _0x3c7b87 => {
      const _0x354e75 = _0x3c7b87.messages[0];
      if (!_0x354e75.message) {
        return;
      }
      const _0x23fcaa = _0x354e75.message.conversation || _0x354e75.message.extendedTextMessage?.["text"];
      const _0x2577fe = _0x354e75.key.remoteJid;
      const _0x147f66 = _0x354e75.message.extendedTextMessage && _0x354e75.message.extendedTextMessage.contextInfo.stanzaId === _0x45f412;
      if (_0x147f66) {
        const _0x2a9582 = {
          text: '⬇️',
          key: _0x354e75.key
        };
        const _0x4908af = {
          react: _0x2a9582
        };
        await _0x37e6d4.sendMessage(_0x2577fe, _0x4908af);
        if (_0x23fcaa === "1.1") {
          const _0x21beaf = await ytmp4('' + _0x5eefc5, "360p");
          const _0x2fb894 = {
            "delete": _0x58ebf1.key
          };
          await _0x37e6d4.sendMessage(_0x2577fe, _0x2fb894);
          const _0x5d25ab = {
            text: '⬆️',
            key: _0x354e75.key
          };
          const _0x11e2e0 = {
            react: _0x5d25ab
          };
          await _0x37e6d4.sendMessage(_0x2577fe, _0x11e2e0);
          const _0x2a58b1 = {
            url: _0x21beaf
          };
          const _0x585ee8 = {
            video: _0x2a58b1,
            caption: "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ· · ·*\n",
            contextInfo: {}
          };
          _0x585ee8.contextInfo.mentionedJid = ["94703830990@s.whatsapp.net"];
          _0x585ee8.contextInfo.groupMentions = [];
          _0x585ee8.contextInfo.forwardingScore = 0x1;
          _0x585ee8.contextInfo.isForwarded = true;
          _0x585ee8.contextInfo.forwardedNewsletterMessageInfo = {};
          _0x585ee8.contextInfo.externalAdReply = {};
          _0x585ee8.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = '';
          _0x585ee8.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ✻";
          _0x585ee8.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x585ee8.contextInfo.externalAdReply.title = "ISHU MD";
          _0x585ee8.contextInfo.externalAdReply.body = "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ";
          _0x585ee8.contextInfo.externalAdReply.mediaType = 0x1;
          _0x585ee8.contextInfo.externalAdReply.sourceUrl = _0x5e5f14.url;
          _0x585ee8.contextInfo.externalAdReply.thumbnailUrl = _0x5e5f14.thumbnail;
          _0x585ee8.contextInfo.externalAdReply.renderLargerThumbnail = false;
          _0x585ee8.contextInfo.externalAdReply.showAdAttribution = true;
          const _0x3eff55 = {
            quoted: _0x354e75
          };
          await _0x37e6d4.sendMessage(_0x2577fe, _0x585ee8, _0x3eff55);
          const _0x2e2c23 = {
            text: '✅',
            key: _0x354e75.key
          };
          const _0x229851 = {
            react: _0x2e2c23
          };
          await _0x37e6d4.sendMessage(_0x2577fe, _0x229851);
        } else {
          if (_0x23fcaa === "1.2") {
            const _0x3846d0 = await ytmp4('' + _0x5eefc5, "480");
            const _0x463cb8 = {
              "delete": _0x58ebf1.key
            };
            await _0x37e6d4.sendMessage(_0x2577fe, _0x463cb8);
            const _0x1704b7 = {
              text: '⬆️',
              key: _0x354e75.key
            };
            const _0x4c43f0 = {
              react: _0x1704b7
            };
            await _0x37e6d4.sendMessage(_0x2577fe, _0x4c43f0);
            const _0x513616 = {
              url: _0x3846d0
            };
            const _0x5061da = {
              video: _0x513616,
              caption: "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ· · ·*\n",
              contextInfo: {}
            };
            _0x5061da.contextInfo.mentionedJid = ["94703830990@s.whatsapp.net"];
            _0x5061da.contextInfo.groupMentions = [];
            _0x5061da.contextInfo.forwardingScore = 0x1;
            _0x5061da.contextInfo.isForwarded = true;
            _0x5061da.contextInfo.forwardedNewsletterMessageInfo = {};
            _0x5061da.contextInfo.externalAdReply = {};
            _0x5061da.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = '';
            _0x5061da.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ✻";
            _0x5061da.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
            _0x5061da.contextInfo.externalAdReply.title = "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ";
            _0x5061da.contextInfo.externalAdReply.body = "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ";
            _0x5061da.contextInfo.externalAdReply.mediaType = 0x1;
            _0x5061da.contextInfo.externalAdReply.sourceUrl = _0x5e5f14.url;
            _0x5061da.contextInfo.externalAdReply.thumbnailUrl = _0x5e5f14.thumbnail;
            _0x5061da.contextInfo.externalAdReply.renderLargerThumbnail = false;
            _0x5061da.contextInfo.externalAdReply.showAdAttribution = true;
            const _0x16717a = {
              quoted: _0x354e75
            };
            await _0x37e6d4.sendMessage(_0x2577fe, _0x5061da, _0x16717a);
            const _0xe1f150 = {
              text: '✅',
              key: _0x354e75.key
            };
            const _0x4febbe = {
              react: _0xe1f150
            };
            await _0x37e6d4.sendMessage(_0x2577fe, _0x4febbe);
          } else {
            if (_0x23fcaa === "1.3") {
              const _0x58dbb6 = await ytmp4('' + _0x5eefc5, "720");
              const _0x369bd9 = {
                "delete": _0x58ebf1.key
              };
              await _0x37e6d4.sendMessage(_0x2577fe, _0x369bd9);
              const _0x4f9b85 = {
                text: '⬆️',
                key: _0x354e75.key
              };
              const _0x5e897e = {
                react: _0x4f9b85
              };
              await _0x37e6d4.sendMessage(_0x2577fe, _0x5e897e);
              const _0x508491 = {
                url: _0x58dbb6
              };
              const _0x28ce3f = {
                video: _0x508491,
                caption: "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ· · ·*\n",
                contextInfo: {}
              };
              _0x28ce3f.contextInfo.mentionedJid = ["94703830990@s.whatsapp.net"];
              _0x28ce3f.contextInfo.groupMentions = [];
              _0x28ce3f.contextInfo.forwardingScore = 0x1;
              _0x28ce3f.contextInfo.isForwarded = true;
              _0x28ce3f.contextInfo.forwardedNewsletterMessageInfo = {};
              _0x28ce3f.contextInfo.externalAdReply = {};
              _0x28ce3f.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = '';
              _0x28ce3f.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ✻";
              _0x28ce3f.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
              _0x28ce3f.contextInfo.externalAdReply.title = "ISHU MD";
              _0x28ce3f.contextInfo.externalAdReply.body = "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ";
              _0x28ce3f.contextInfo.externalAdReply.mediaType = 0x1;
              _0x28ce3f.contextInfo.externalAdReply.sourceUrl = _0x5e5f14.url;
              _0x28ce3f.contextInfo.externalAdReply.thumbnailUrl = _0x5e5f14.thumbnail;
              _0x28ce3f.contextInfo.externalAdReply.renderLargerThumbnail = false;
              _0x28ce3f.contextInfo.externalAdReply.showAdAttribution = true;
              const _0x2e7556 = {
                quoted: _0x354e75
              };
              await _0x37e6d4.sendMessage(_0x2577fe, _0x28ce3f, _0x2e7556);
              const _0x289b6c = {
                text: '✅',
                key: _0x354e75.key
              };
              const _0xa156ff = {
                react: _0x289b6c
              };
              await _0x37e6d4.sendMessage(_0x2577fe, _0xa156ff);
            } else {
              if (_0x23fcaa === "1.4") {
                const _0xf542d9 = await ytmp4('' + _0x5eefc5, "1080");
                const _0x503953 = {
                  "delete": _0x58ebf1.key
                };
                await _0x37e6d4.sendMessage(_0x2577fe, _0x503953);
                const _0x385003 = {
                  text: '⬆️',
                  key: _0x354e75.key
                };
                const _0x4c441b = {
                  react: _0x385003
                };
                await _0x37e6d4.sendMessage(_0x2577fe, _0x4c441b);
                const _0x29c7a5 = {
                  url: _0xf542d9
                };
                const _0x452aa9 = {
                  video: _0x29c7a5,
                  caption: "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ· · ·*\n"
                };
                const _0x26bf33 = {
                  quoted: _0x354e75
                };
                await _0x37e6d4.sendMessage(_0x2577fe, _0x452aa9, _0x26bf33);
                const _0x61e2c3 = {
                  text: '✅',
                  key: _0x354e75.key
                };
                const _0x2c7b76 = {
                  react: _0x61e2c3
                };
                await _0x37e6d4.sendMessage(_0x2577fe, _0x2c7b76);
              } else {
                if (_0x23fcaa === "2.1") {
                  const _0x263954 = await ytmp4('' + _0x5eefc5, "360");
                  const _0x4b9f41 = {
                    "delete": _0x58ebf1.key
                  };
                  await _0x37e6d4.sendMessage(_0x2577fe, _0x4b9f41);
                  const _0x1dab73 = {
                    text: '⬆️',
                    key: _0x354e75.key
                  };
                  const _0x4e21c4 = {
                    react: _0x1dab73
                  };
                  await _0x37e6d4.sendMessage(_0x2577fe, _0x4e21c4);
                  const _0x54c4fc = {
                    url: _0x263954
                  };
                  const _0x1685f9 = {
                    quoted: _0x354e75
                  };
                  await _0x37e6d4.sendMessage(_0x2577fe, {
                    'document': _0x54c4fc,
                    'mimetype': "video/mp4",
                    'fileName': _0x5e5f14.title + ".mp4",
                    'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ· · ·*\n",
                    'contextInfo': {
                      'mentionedJid': ["94703830990@s.whatsapp.net"],
                      'groupMentions': [],
                      'forwardingScore': 0x1,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': '',
                        'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ✻",
                        'serverMessageId': 0x3e7
                      },
                      'externalAdReply': {
                        'title': "ISHU MD",
                        'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                        'mediaType': 0x1,
                        'sourceUrl': _0x5e5f14.url,
                        'thumbnailUrl': _0x5e5f14.thumbnail,
                        'renderLargerThumbnail': false,
                        'showAdAttribution': true
                      }
                    }
                  }, _0x1685f9);
                  const _0x2a964e = {
                    text: '✅',
                    key: _0x354e75.key
                  };
                  const _0x59f23e = {
                    react: _0x2a964e
                  };
                  await _0x37e6d4.sendMessage(_0x2577fe, _0x59f23e);
                } else {
                  if (_0x23fcaa === "2.2") {
                    const _0x5e94c2 = await ytmp4('' + _0x5eefc5, "480");
                    const _0x14ddd2 = {
                      "delete": _0x58ebf1.key
                    };
                    await _0x37e6d4.sendMessage(_0x2577fe, _0x14ddd2);
                    const _0x5e0aaf = {
                      text: '⬆️',
                      key: _0x354e75.key
                    };
                    const _0x354af5 = {
                      react: _0x5e0aaf
                    };
                    await _0x37e6d4.sendMessage(_0x2577fe, _0x354af5);
                    const _0x1ecd8f = {
                      url: _0x5e94c2
                    };
                    const _0x445ff7 = {
                      quoted: _0x354e75
                    };
                    await _0x37e6d4.sendMessage(_0x2577fe, {
                      'document': _0x1ecd8f,
                      'mimetype': "video/mp4",
                      'fileName': _0x5e5f14.title + ".mp4",
                      'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ· · ·*\n",
                      'contextInfo': {
                        'mentionedJid': ["94703830990@s.whatsapp.net"],
                        'groupMentions': [],
                        'forwardingScore': 0x1,
                        'isForwarded': true,
                        'forwardedNewsletterMessageInfo': {
                          'newsletterJid': '',
                          'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ✻",
                          'serverMessageId': 0x3e7
                        },
                        'externalAdReply': {
                          'title': "Qᴜᴇᴇɴ ɪꜱʜᴜ",
                          'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                          'mediaType': 0x1,
                          'sourceUrl': _0x5e5f14.url,
                          'thumbnailUrl': _0x5e5f14.thumbnail,
                          'renderLargerThumbnail': false,
                          'showAdAttribution': true
                        }
                      }
                    }, _0x445ff7);
                    const _0x4e635b = {
                      text: '✅',
                      key: _0x354e75.key
                    };
                    const _0x393ddb = {
                      react: _0x4e635b
                    };
                    await _0x37e6d4.sendMessage(_0x2577fe, _0x393ddb);
                  } else {
                    if (_0x23fcaa === "2.3") {
                      const _0x4009af = await ytmp4('' + _0x5eefc5, "720");
                      const _0x171a64 = {
                        "delete": _0x58ebf1.key
                      };
                      await _0x37e6d4.sendMessage(_0x2577fe, _0x171a64);
                      const _0x29634b = {
                        text: '⬆️',
                        key: _0x354e75.key
                      };
                      const _0x537d17 = {
                        react: _0x29634b
                      };
                      await _0x37e6d4.sendMessage(_0x2577fe, _0x537d17);
                      const _0xa40e56 = {
                        url: _0x4009af
                      };
                      const _0x337ec1 = {
                        quoted: _0x354e75
                      };
                      await _0x37e6d4.sendMessage(_0x2577fe, {
                        'document': _0xa40e56,
                        'mimetype': "video/mp4",
                        'fileName': _0x5e5f14.title + ".mp4",
                        'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ· · ·*\n",
                        'contextInfo': {
                          'mentionedJid': ["94703830990@s.whatsapp.net"],
                          'groupMentions': [],
                          'forwardingScore': 0x1,
                          'isForwarded': true,
                          'forwardedNewsletterMessageInfo': {
                            'newsletterJid': '',
                            'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ✻",
                            'serverMessageId': 0x3e7
                          },
                          'externalAdReply': {
                            'title': "ISHU MD",
                            'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                            'mediaType': 0x1,
                            'sourceUrl': _0x5e5f14.url,
                            'thumbnailUrl': _0x5e5f14.thumbnail,
                            'renderLargerThumbnail': false,
                            'showAdAttribution': true
                          }
                        }
                      }, _0x337ec1);
                      const _0x16b446 = {
                        text: '✅',
                        key: _0x354e75.key
                      };
                      const _0x4a8424 = {
                        react: _0x16b446
                      };
                      await _0x37e6d4.sendMessage(_0x2577fe, _0x4a8424);
                    } else {
                      if (_0x23fcaa === "2.4") {
                        const _0x38d34e = await ytmp4('' + _0x5eefc5, "1080");
                        const _0x85ce4b = {
                          "delete": _0x58ebf1.key
                        };
                        await _0x37e6d4.sendMessage(_0x2577fe, _0x85ce4b);
                        const _0x27a422 = {
                          text: '⬆️',
                          key: _0x354e75.key
                        };
                        const _0x247a28 = {
                          react: _0x27a422
                        };
                        await _0x37e6d4.sendMessage(_0x2577fe, _0x247a28);
                        const _0x1694d8 = {
                          url: _0x38d34e
                        };
                        const _0x2c397b = {
                          quoted: _0x354e75
                        };
                        await _0x37e6d4.sendMessage(_0x2577fe, {
                          'document': _0x1694d8,
                          'mimetype': "video/mp4",
                          'fileName': _0x5e5f14.title + ".mp4",
                          'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ· · ·*\n",
                          'contextInfo': {
                            'mentionedJid': ["94703830990@s.whatsapp.net"],
                            'groupMentions': [],
                            'forwardingScore': 0x1,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': '',
                              'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ✻",
                              'serverMessageId': 0x3e7
                            },
                            'externalAdReply': {
                              'title': "ISHU MD",
                              'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                              'mediaType': 0x1,
                              'sourceUrl': _0x5e5f14.url,
                              'thumbnailUrl': _0x5e5f14.thumbnail,
                              'renderLargerThumbnail': false,
                              'showAdAttribution': true
                            }
                          }
                        }, _0x2c397b);
                        const _0x3f0824 = {
                          text: '✅',
                          key: _0x354e75.key
                        };
                        const _0x3d0c2e = {
                          react: _0x3f0824
                        };
                        await _0x37e6d4.sendMessage(_0x2577fe, _0x3d0c2e);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x11cd4e) {
    console.log(_0x11cd4e);
    _0x278ab8('' + _0x11cd4e);
  }
});
function _0xb6a1(_0x12041e, _0x4af9d5) {
  const _0x2df816 = _0x1606();
  _0xb6a1 = function (_0x5dda60, _0x162f4b) {
    _0x5dda60 = _0x5dda60 - 255;
    let _0x22f1d6 = _0x2df816[_0x5dda60];
    return _0x22f1d6;
  };
  return _0xb6a1(_0x12041e, _0x4af9d5);
}
const _0x2e5956 = {};
function _0x5308a0(_0x289515, _0x52bfe4, _0xd6b5b7, _0x3827d1, _0xc5df5f) {
  return _0xb6a1(_0xd6b5b7 - 0x7f, _0x289515);
}
_0x2e5956.pattern = "yta";
_0x2e5956.alias = "ytmp3";
_0x2e5956.react = '⬇️';
_0x2e5956.dontAddCommandList = true;
_0x2e5956.filename = __filename;
cmd(_0x2e5956, async (_0xa17423, _0x3fe319, _0x4b7f3a, {
  from: _0x5c95a0,
  q: _0x3a1188,
  reply: _0x60e56a
}) => {
  try {
    if (!_0x3a1188) {
      return await _0x60e56a("*Need a YouTube URL!*");
    }
    const _0x51f21c = await fetchJson("https://api.giftedtech.my.id/api/download/ytaud?apikey=gifted&url=" + _0x3a1188);
    const _0x14d050 = _0x51f21c.result.download_url;
    const _0x4d9f54 = {
      url: _0x14d050
    };
    const _0x4d6117 = {
      audio: _0x4d9f54,
      mimetype: "audio/mpeg"
    };
    const _0x12c9e2 = {
      quoted: _0x3fe319
    };
    await _0xa17423.sendMessage(_0x5c95a0, _0x4d6117, _0x12c9e2);
  } catch (_0x148bb4) {
    console.log("First attempt failed:", _0x148bb4);
    try {
      const _0x2cd611 = await dlyta(_0x3a1188);
      const _0x4bf093 = {
        url: _0x2cd611.dl_link
      };
      const _0x579cb3 = {
        audio: _0x4bf093,
        mimetype: "audio/mpeg"
      };
      const _0x2fddb1 = {
        quoted: _0x3fe319
      };
      await _0xa17423.sendMessage(_0x5c95a0, _0x579cb3, _0x2fddb1);
    } catch (_0x20de48) {
      console.log("Second attempt failed:", _0x20de48);
      await _0x60e56a("*Failed to process the request. Please try again later!*");
    }
  }
});
function _0x4af9d5(_0x4cb4b9) {
  function _0x28a66a(_0x478910) {
    if (typeof _0x478910 === "string") {
      return function (_0x13e816) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x478910 / _0x478910).length !== 1 || _0x478910 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x28a66a(++_0x478910);
  }
  try {
    if (_0x4cb4b9) {
      return _0x28a66a;
    } else {
      _0x28a66a(0);
    }
  } catch (_0xd46bac) {}
}
function _0x1e0911(_0x29f794, _0x45bd0f, _0x293cad, _0x3f0d9c, _0x20aa88) {
  return _0xb6a1(_0x45bd0f - 0x1d6, _0x3f0d9c);
}
(function () {
  let _0x134f3c;
  try {
    const _0x127f2d = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x134f3c = _0x127f2d();
  } catch (_0x596294) {
    _0x134f3c = window;
  }
  _0x134f3c.setInterval(_0x4af9d5, 4000);
})();
