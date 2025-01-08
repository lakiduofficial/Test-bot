const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `*╔═════ °❀•°✮°•❀°═════╗*

*👋 HELLO ${pushname}*\n\n *𝐈 𝐀𝐌 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 𝐍𝐈𝐌𝐒𝐀𝐑𝐀*\n\n *𝐈 𝐀𝐌 𝐅𝐑𝐎𝐌 𝐒𝐑𝐈 𝐋𝐀𝐍𝐊𝐀😁*\n\n *𝐈 𝐀𝐌 𝐅𝐑𝐎𝐌 𝐒𝐑𝐈 𝐋𝐀𝐍𝐊𝐀😁*\n\n*♜ൠ  𝐈 𝐀𝐌 𝐅𝐑𝐎𝐌 𝐒𝐑𝐈 𝐋𝐀𝐍𝐊𝐀😁  🐨♔*\n\n *♬🐝  𝐓𝔥Δｎ𝐊 𝕪𝓸𝓊.  💢🎈*

*┈━═☆  𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 ☆═━┈*

> ⚜️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 : ®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛

*╚══════✮❁•°❀°•❁✮══════╝*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
