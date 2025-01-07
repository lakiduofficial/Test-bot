
const { cmd, commands } = require('../command')
const axios = require('axios');

cmd({
    pattern: "ai",
    alias: ["gpt"],
    desc: "Ask GPT AI any question.",
    category: "AI",
    react: "🤖",
    use: '.ai ',
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, args, q, isGroup, sender, reply }) => {
    try {
        if (!q) {
            return reply("Please provide a question for GPT. Example: .ai What is AI?");
        }

        const thinkingTime = Math.floor(Math.random() * 1000) + 1000; 
        await new Promise(resolve => setTimeout(resolve, thinkingTime));

        
        const apiUrl = `https://saviya-kolla-api.koyeb.app/ai/gpt?query=${encodeURIComponent(q)}`;
        
        
        const response = await axios.get(apiUrl);

        if (!response.data.status) {
            return reply("🤖 Sorry, I couldn't fetch a response. Please try again later.");
        }

        
        const gptResponse = response.data.result;

        
        await conn.sendMessage(from, { text: gptResponse });
    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});

        
