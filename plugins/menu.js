const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 හායි ${pushname}ඔයාට කොහමද?😘🥰*

> *╭─「 `🐉𝐇𝐀𝐒𝐇𝐈 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓🐉`」*
> *│ 🔥 ʀᴜɴᴛɪᴍᴇ : 19 minutes, 16 seconds*
> *│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : 68.69MB / 63276MB*
> *│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : bbd0b515-88cc-4f14-939c-88d69537738e*
> *│ 🔥 ᴠᴇʀꜱɪᴏɴ : 2.5.0*
> *╰──────────●●*
*🩸⃟༑⌁𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃梨🐉*
> ╭━━━━━━━━━━━★✼☆
> │➤ `𝟏`    ║  *`𝐎𝐖𝐍𝐄𝐑`*
> │➤ `𝟐`    ║  *`𝐂𝐎𝐍𝐕𝐄𝐑𝐓`*
> │➤ `𝟑`    ║  *`𝐀𝐈`*
> │➤ `𝟒`    ║  *`𝐒𝐄𝐀𝐑𝐂𝐇`*
> │➤ `𝟓`    ║  *`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃`*
> │➤ `𝟔`    ║  *`𝐌𝐀𝐈𝐍`*
> │➤ `𝟕`    ║  *`𝐆𝐑𝐎𝐔𝐏`*
> │➤ `𝟖`    ║  *`𝐅𝐔𝐍`*
> │➤ `𝟗`    ║  *`𝐓𝐎𝐎𝐋𝐒`*
> │➤ `𝟏𝟎`  ║  *`𝐎𝐓𝐇𝐄𝐑`*
> ╰•★★━━━━━━━━★★•╯

*┕ 🔢𝐑𝐞𝐩𝐥𝐲 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭. ʕʘ̅͜ʘ̅ʔ*

> *⚜️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 : ®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.imgur.com/HleJrGN.jpeg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──────OWNER COMMAND LIST──────╼◈*

╭────────●●►
│ • *restart* 
╰────────────────────●●►

⭓ *Total Commands List OWNER: 1*

*©QUEEN SACHIYA MD CREATE BY SACHINTHA PRASHANッ*`);
                        break;
                    case '2':               
                        reply(`*◈╾──────CONVERT COMMAND LIST──────╼◈*

╭────────●●►
│ • *convert* 
╰────────────────────●●►

⭓ *Total Commands List CONVERT: 1*

*©QUEEN SACHIYA MD CREATE BY SACHINTHA PRASHANッ*`);
                        break;
                    case '3':               
                        reply(`*◈╾──────AI COMMAND LIST──────╼◈*

╭────────●●►
│ • *ai* 
╰────────────────────●●►

⭓ *Total Commands List AI: 1*

*©QUEEN SACHIYA MD CREATE BY SACHINTHA PRASHANッ*`);
                        break;
                    case '4':               
                        reply(`*◈╾──────SEARCH COMMAND LIST──────╼◈*

╭────────●●►
│ • *yts* 
╰────────────────────●●►
╭────────●●►
│ • *srepo* 
╰────────────────────●●►

⭓ *Total Commands List SEARCH: 2*

*©QUEEN SACHIYA MD CREATE BY SACHINTHA PRASHANッ*`);
                        break;
                    case '5':               
                        reply(`*◈╾──────DOWNLOAD COMMAND LIST──────╼◈*

╭────────●●►
│ • *apk* 
╰────────────────────●●►
╭────────●●►
│ • *twitter* 
╰────────────────────●●►
╭────────●●►
│ • *gdrive* 
╰────────────────────●●►
╭────────●●►
│ • *mediafire* 
╰────────────────────●●►
╭────────●●►
│ • *fb* 
╰────────────────────●●►
╭────────●●►
│ • *ig* 
╰────────────────────●●►
╭────────●●►
│ • *movie* 
╰────────────────────●●►
╭────────●●►
│ • *song* 
╰────────────────────●●►
╭────────●●►
│ • *video* 
╰────────────────────●●►
╭────────●●►
│ • *play/yt* 
╰────────────────────●●►
╭────────●●►
│ • *song2* 
╰────────────────────●●►
╭────────●●►
│ • *video2* 
╰────────────────────●●►
╭────────●●►
│ • *tiktok* 
╰────────────────────●●►
╭────────●●►
│ • *img* 
╰────────────────────●●►

⭓ *Total Commands List DOWNLOAD: 14*

*©QUEEN SCHIYA MD CREATE BY SACHINTHA PRASHANッ*`);
                        break;
                    case '6':               
                        reply(`*◈╾──────MAIN COMMAND LIST──────╼◈*

╭────────●●►
│ • *alive* 
╰────────────────────●●►
╭────────●●►
│ • *about* 
╰────────────────────●●►
╭────────●●►
│ • *menu* 
╰────────────────────●●►
╭────────●●►
│ • *allmenu* 
╰────────────────────●●►
╭────────●●►
│ • *support* 
╰────────────────────●●►
╭────────●●►
│ • *system* 
╰────────────────────●●►
╭────────●●►
│ • *ping* 
╰────────────────────●●►
╭────────●●►
│ • *runtime* 
╰────────────────────●●►

⭓ *Total Commands List MAIN: 8*

*©QUEEN SCHIYA MD CREATE BY SACHINTHA PRASHANッ*`);
                        break;
                    case '7':               
                        reply(`*◈╾──────GROUP COMMAND LIST──────╼◈*

╭────────●●►
│ • *promote* 
╰────────────────────●●►
╭────────●●►
│ • *demote* 
╰────────────────────●●►
╭────────●●►
│ • *kick* 
╰────────────────────●●►
╭────────●●►
│ • *add* 
╰────────────────────●●►
╭────────●●►
│ • *admins* 
╰────────────────────●●►
╭────────●●►
│ • *tagall* 
╰────────────────────●●►
╭────────●●►
│ • *getpic* 
╰────────────────────●●►
╭────────●●►
│ • *setwelcome* 
╰────────────────────●●►
╭────────●●►
│ • *setgoodbye* 
╰────────────────────●●►
╭────────●●►
│ • *admins* 
╰────────────────────●●►
╭────────●●►
│ • *gname* 
╰────────────────────●●►

⭓ *Total Commands List GROUP: 11*

*©QUEEN SACHIYA MD CREATE BY SACHINTHA PRASHANッ*`);
                       break;
                    case '8':               
                        reply(`*◈╾──────FUN COMMAND LIST──────╼◈*

╭────────●●►
│ • *dog* 
╰────────────────────●●►
╭────────●●►
│ • *fact* 
╰────────────────────●●►
╭────────●●►
│ • *hack* 
╰────────────────────●●►
╭────────●●►
│ • *quote* 
╰────────────────────●●►

⭓ *Total Commands List FUN: 4*

*©QUEEN SACHIYA MD CREATE BY SACHINTHA PRASHANッ*`);

                        break;
                    case '10':               
                        reply(`*◈╾──────OTHER COMMAND LIST──────╼◈*

╭────────●●►
│ • *githubstalk* 
╰────────────────────●●►
╭────────●●►
│ • *trt* 
╰────────────────────●●►
╭────────●●►
│ • *weather* 
╰────────────────────●●►

⭓ *Total Commands List OTHER: 3*

*©QUEEN SACHIYA MD CREATE BY SACHINTHA PRASHANッ*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
