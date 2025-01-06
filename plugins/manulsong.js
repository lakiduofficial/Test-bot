const {cmd , commands} = require('../command')
const fetch = require('node-fetch')
const { Buffer } = require('buffer');
const { sizeFormatter} = require('human-readable');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios');
const yts = require("ytsearch-venom")
cmd({
    pattern: "song",
    alias: ["audio"],
    desc: 'Download Song / Video',
    use: '.play Title',
    react: "🎧",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
     
  
        if (!q) return reply('Please provide a title.');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `💚🎵 𝐘𝐓 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 🎵💚
        
> \➤ Title\ : ${data.title}

> \➤ Views\ : ${data.views}

> \➤ DESCRIPTION\: ${data.description}

> \➤ TIME\: ${data.timestamp}

> \➤ AGO\: ${data.ago}

> ⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚`;
await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });
    const response = (await axios.get("https://raw.githubusercontent.com/Manul-Ofcx/DB/refs/heads/main/url.json")).data;

    const  YTMP3_LINK  = response.YTMP3;
    // Ensure the plugins directory exists
    const res = await fetchJson(${YTMP3_LINK}${data.url});
    
    const downloadUrl = res.result.dl_link;

await conn.sendMessage(from,{audio:{url: downloadUrl },mimetype:"audio/mpeg",caption :"> ⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚"},{quoted:mek})

await conn.sendMessage(from,{document:{url: downloadUrl },mimetype:"audio/mpeg",fileName: data.title + ".mp3" ,caption :"> ⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚"},{quoted:mek})
} catch (e) {
console.log(e)
reply(${e})
}
})