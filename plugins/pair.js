const fetch = require("node-fetch");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson} = require('../lib/functions')
const { cmd } = require("../command");

// get pair 2

cmd({
    pattern: "pair",
    alias: ["getpair", "clonebot"],
    react: "✅",
    desc: "Pairing code",
    category: "download",
    use: ".pair +947XXXXXXX",
    filename: __filename
}, 
async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
    try {
        // Helper function for delay
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        // Validate input
        if (!q) {
            return await reply("*Example -* .pair +947xxxxxxx");
        }

        // Fetch pairing code
        const fetch = require("node-fetch");
        const response = await fetch(`https://queen-ishu-md-bac894e0fbb6.herokuapp.com/code?number=${q}`);
        const pair = await response.json();

        // Check for errors in response
        if (!pair || !pair.code) {
            return await reply("Failed to retrieve pairing code. Please check the phone number and try again.");
        }

        // Success response
        const pairingCode = pair.code;
        const doneMessage = "*𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐏𝐀𝐈𝐑 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐄𝐃✅*\n\n> ⚜️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 : ®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛";

        // Send first message
        await reply(`${doneMessage}\n\n*𝗛𝗔𝗦𝗛𝗜 𝗣𝗔𝗜𝗥 𝗖𝗢𝗗𝗘 :* ${pairingCode}`);

        // Add a delay of 2 seconds before sending the second message
        await sleep(2000);

        // Send second message with just the pairing code
        await reply(`Code: ${pairingCode}`);
    } catch (error) {
        console.error(error);
        await reply("𝘼𝙣 𝙚𝙧𝙧𝙤𝙧 𝙤𝙘𝙘𝙪𝙧𝙧𝙚𝙙. 𝙋𝙡𝙚𝙖𝙨𝙚 𝙩𝙧𝙮 𝙖𝙜𝙖𝙞𝙣 𝙡𝙖𝙩𝙚𝙧.");
    }
});
