/*
███████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗       ███   █████████    ███     ███    ███     ███
██╔═══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║       ███   ███          ███     ███    ███     ███
██║   ██║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║       ███   █████████    ███████████    ███     ███
██║▄▄ ██║ ██║   ██║ ██╔══╝   ██╔══╝   ██║╚██╗██        ███         ███    ███     ███    ███████████
╚██████╔╝ ╚██████╔╝ ███████╗ ███████╗ ██║ ╚████║       ███   █████████    ███     ███      ███████
created by laksidu
 DONT COPY
*/

const _0x74849=_0x52ea;(function(_0x2af2ed,_0x21497c){const _0x1f605a=_0x52ea,_0x401f3f=_0x2af2ed();while(!![]){try{const _0x4056c5=-parseInt(_0x1f605a(0xb1))/0x1+parseInt(_0x1f605a(0xbb))/0x2*(parseInt(_0x1f605a(0xca))/0x3)+parseInt(_0x1f605a(0xa3))/0x4+parseInt(_0x1f605a(0xaa))/0x5*(parseInt(_0x1f605a(0xa7))/0x6)+-parseInt(_0x1f605a(0xb6))/0x7+-parseInt(_0x1f605a(0xa2))/0x8+-parseInt(_0x1f605a(0xbc))/0x9*(parseInt(_0x1f605a(0xae))/0xa);if(_0x4056c5===_0x21497c)break;else _0x401f3f['push'](_0x401f3f['shift']());}catch(_0xbe91ca){_0x401f3f['push'](_0x401f3f['shift']());}}}(_0xc7e5,0x3943b));function _0x52ea(_0x5e70f6,_0x43eaa4){const _0xc7e57e=_0xc7e5();return _0x52ea=function(_0x52eac5,_0x2896ea){_0x52eac5=_0x52eac5-0x9a;let _0x1a4e06=_0xc7e57e[_0x52eac5];return _0x1a4e06;},_0x52ea(_0x5e70f6,_0x43eaa4);}function _0xc7e5(){const _0x4d55b5=['groupFetchAllParticipating','downloadMediaMessage','1230390lSdpuh','\x20unblocked\x20successfully.','gjid','jid','🖼️\x20Profile\x20picture\x20updated\x20successfully!','95792nMWZea','2189061ZiGNVu','Unblock\x20a\x20user.','../command','message','block','keys','❌\x20You\x20are\x20not\x20the\x20owner!','all','Block\x20a\x20user.','🤖\x20*Bot\x20JID:*\x20','🧹\x20All\x20chats\x20cleared\x20successfully!','owner','delete','../config','21hBNeux','length','modifyChat','sendMessage','updateBlockStatus','❌\x20Please\x20reply\x20to\x20the\x20user\x20you\x20want\x20to\x20block.','\x20blocked\x20successfully.','user','sender','❌\x20Error\x20blocking\x20user:\x20','child_process','663848XVJFQP','937008opVMpa','../lib/functions','join','📝\x20*Group\x20JIDs:*\x0a\x0a','112626AAElzO','clearchats','❌\x20Please\x20reply\x20to\x20an\x20image.','100fnweoJ','Clear\x20all\x20chats\x20from\x20the\x20bot.','❌\x20Please\x20reply\x20to\x20the\x20user\x20you\x20want\x20to\x20unblock.','🚫\x20User\x20','10BkOutv','❌\x20Error\x20updating\x20profile\x20picture:\x20','❌\x20Error\x20clearing\x20chats:\x20','208409ZvDPgv','📢\x20Please\x20provide\x20a\x20message\x20to\x20broadcast.','📢\x20Message\x20broadcasted\x20to\x20all\x20groups.'];_0xc7e5=function(){return _0x4d55b5;};return _0xc7e5();}const {cmd,commands}=require(_0x74849(0xbe)),{exec}=require(_0x74849(0xa1)),config=require(_0x74849(0xc9)),{sleep}=require(_0x74849(0xa4));cmd({'pattern':'shutdown','desc':'Shutdown\x20the\x20bot.','category':_0x74849(0xc7),'react':'🛑','filename':__filename},async(_0x17557d,_0x2a3177,_0x530e18,{from:_0x417f11,isOwner:_0x1d540b,reply:_0xf1bb9e})=>{const _0x471cad=_0x74849;if(!_0x1d540b)return _0xf1bb9e(_0x471cad(0xc2));_0xf1bb9e('🛑\x20Shutting\x20down...')['then'](()=>process['exit']());}),cmd({'pattern':'broadcast','desc':'Broadcast\x20a\x20message\x20to\x20all\x20groups.','category':_0x74849(0xc7),'react':'📢','filename':__filename},async(_0x16e87c,_0x2b1e3f,_0x89ea3f,{from:_0x5ac5b7,isOwner:_0x4f8ce5,args:_0x335cc,reply:_0x5af1ec})=>{const _0x115f3a=_0x74849;if(!_0x4f8ce5)return _0x5af1ec(_0x115f3a(0xc2));if(_0x335cc[_0x115f3a(0xcb)]===0x0)return _0x5af1ec(_0x115f3a(0xb2));const _0x18b972=_0x335cc[_0x115f3a(0xa5)]('\x20'),_0x2a96f8=Object[_0x115f3a(0xc1)](await _0x16e87c[_0x115f3a(0xb4)]());for(const _0x2bbaf4 of _0x2a96f8){await _0x16e87c[_0x115f3a(0x9a)](_0x2bbaf4,{'text':_0x18b972},{'quoted':_0x2b1e3f});}_0x5af1ec(_0x115f3a(0xb3));}),cmd({'pattern':'setpp','desc':'Set\x20bot\x20profile\x20picture.','category':_0x74849(0xc7),'react':'🖼️','filename':__filename},async(_0x284683,_0x20efbc,_0x13231a,{from:_0x57c029,isOwner:_0x4813ed,quoted:_0x2f7712,reply:_0x1eb7c9})=>{const _0x369f74=_0x74849;if(!_0x4813ed)return _0x1eb7c9(_0x369f74(0xc2));if(!_0x2f7712||!_0x2f7712['message']['imageMessage'])return _0x1eb7c9(_0x369f74(0xa9));try{const _0x4454ba=await _0x284683[_0x369f74(0xb5)](_0x2f7712);await _0x284683['updateProfilePicture'](_0x284683['user']['jid'],{'url':_0x4454ba}),_0x1eb7c9(_0x369f74(0xba));}catch(_0x33be67){_0x1eb7c9(_0x369f74(0xaf)+_0x33be67['message']);}}),cmd({'pattern':_0x74849(0xc0),'desc':_0x74849(0xc4),'category':_0x74849(0xc7),'react':'🚫','filename':__filename},async(_0x141489,_0x4b95c7,_0x4c33ce,{from:_0x4d3a62,isOwner:_0xf0f5f2,quoted:_0x542144,reply:_0x53acd0})=>{const _0x470fd3=_0x74849;if(!_0xf0f5f2)return _0x53acd0('❌\x20You\x20are\x20not\x20the\x20owner!');if(!_0x542144)return _0x53acd0(_0x470fd3(0x9c));const _0x4becdd=_0x542144[_0x470fd3(0x9f)];try{await _0x141489[_0x470fd3(0x9b)](_0x4becdd,_0x470fd3(0xc0)),_0x53acd0(_0x470fd3(0xad)+_0x4becdd+_0x470fd3(0x9d));}catch(_0x35db7e){_0x53acd0(_0x470fd3(0xa0)+_0x35db7e[_0x470fd3(0xbf)]);}}),cmd({'pattern':'unblock','desc':_0x74849(0xbd),'category':_0x74849(0xc7),'react':'✅','filename':__filename},async(_0x1cc316,_0x735189,_0x178e9d,{from:_0x348936,isOwner:_0x4fe5d1,quoted:_0x168b4a,reply:_0x3e600a})=>{const _0x4b39c5=_0x74849;if(!_0x4fe5d1)return _0x3e600a(_0x4b39c5(0xc2));if(!_0x168b4a)return _0x3e600a(_0x4b39c5(0xac));const _0x9cf308=_0x168b4a[_0x4b39c5(0x9f)];try{await _0x1cc316[_0x4b39c5(0x9b)](_0x9cf308,'unblock'),_0x3e600a('✅\x20User\x20'+_0x9cf308+_0x4b39c5(0xb7));}catch(_0x19842d){_0x3e600a('❌\x20Error\x20unblocking\x20user:\x20'+_0x19842d[_0x4b39c5(0xbf)]);}}),cmd({'pattern':_0x74849(0xa8),'desc':_0x74849(0xab),'category':_0x74849(0xc7),'react':'🧹','filename':__filename},async(_0x50e928,_0x9a135e,_0x20fe44,{from:_0x491e0b,isOwner:_0x387366,reply:_0x22f4d3})=>{const _0x57dc17=_0x74849;if(!_0x387366)return _0x22f4d3(_0x57dc17(0xc2));try{const _0x19a096=_0x50e928['chats'][_0x57dc17(0xc3)]();for(const _0x2bb709 of _0x19a096){await _0x50e928[_0x57dc17(0xcc)](_0x2bb709[_0x57dc17(0xb9)],_0x57dc17(0xc8));}_0x22f4d3(_0x57dc17(0xc6));}catch(_0x150d7f){_0x22f4d3(_0x57dc17(0xb0)+_0x150d7f[_0x57dc17(0xbf)]);}}),cmd({'pattern':'jid','desc':'Get\x20the\x20bot\x27s\x20JID.','category':_0x74849(0xc7),'react':'🤖','filename':__filename},async(_0x1bd597,_0x5a492e,_0x14b4b6,{from:_0x2023e0,isOwner:_0x3a46a9,reply:_0x4fe44c})=>{const _0x55a8a5=_0x74849;if(!_0x3a46a9)return _0x4fe44c(_0x55a8a5(0xc2));_0x4fe44c(_0x55a8a5(0xc5)+_0x1bd597[_0x55a8a5(0x9e)][_0x55a8a5(0xb9)]);}),cmd({'pattern':_0x74849(0xb8),'desc':'Get\x20the\x20list\x20of\x20JIDs\x20for\x20all\x20groups\x20the\x20bot\x20is\x20part\x20of.','category':'owner','react':'📝','filename':__filename},async(_0x5aa339,_0x2e2a70,_0x3752ed,{from:_0x341e37,isOwner:_0x1cb0b6,reply:_0x42c779})=>{const _0x1a13df=_0x74849;if(!_0x1cb0b6)return _0x42c779(_0x1a13df(0xc2));const _0x15daef=await _0x5aa339[_0x1a13df(0xb4)](),_0x282013=Object[_0x1a13df(0xc1)](_0x15daef)[_0x1a13df(0xa5)]('\x0a');_0x42c779(_0x1a13df(0xa6)+_0x282013);});
