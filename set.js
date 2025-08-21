
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", // PRINCE-MD~H4sIAAAAAAAAA5VUXa+iSBD9L/2qGQUExeQmix+IIiqoKG72oYUGGqHBpkFw4n/f4L3OnezH7F14ge7KqXOqTtV3QFKcIx3VYPgdZBSXkKHmk9UZAkMwKnwfUdAGHmQQDIGzdt35YeqHZ6jO1fJ6iqFgLxitlNOtk/rhdZ/IBkuPLWK+gUcbZMU5xu4vAK/3zq6nk+w2lVWrNqugy11SstSs8rDY1cycHEhGsFB0o+ANPBpEiCkmwTQLUYIojHVUbyCmX6MvqWv34I/DvZnBMBhd1GhsdoVxLx74Ip9qE0to7SN3Int892v0rVYs6LfbtXtZKnMjlNPVpuSn0S4pq+sg1jqDVmDXfb2ajox3+jkOCPLmHiIMs/rLdddnqO5g/piFjmUcqnF1tsi1hQiX3JaCWWxPq6PVmrUEm5t+jXjBFPXUk08jnNVTRzkUoq/cy0IZXEhREGnn9FHc4vsrT9v/THxDX165/J+6zw2oF3NBLpcTazFb5QQRvqa6PdDQnUiqow2qyEnrMyPpF22DXE1tHZylX587nrQmvMGpM9ZjC9WcHKLTdsJDx6UdTcg/6UNW0F+xzKWTlhb+jd9zUnXB9xlvs33HquWN2F3Zkx0+7paTXbayr5so9a2QnRJ+vjjMOqqSuUdxpZ1Pt1GwEEt9f5j21cnMCbsT8+2p6ILquQeG3KMNKApwzihkOCXNmdBvA+iVW+RSxJ7VBeFkbcQrUS304zoiir2++qJ5WJhbvLj5O79yOOt6EZJoUzlvoA0ymrooz5Gn4ZyltDZQnsMA5WD4+7NRjWaKkpShBfbAEHCDnixyoixK0m/5t1sIWQ6z7BtBDLSBT9PEQGDIaIHa4Bkvd/kup4wkVR4Lk9FAHkldXlUEQZWkXvM2ApP3nDucoJzBJANDri+KfZkThP7jjzYgqGLv7nlq5trAxzRne1JkcQq9l7Vel9B104KwbU3ccfOBKBh2P48RY5gEeSOsIJC6IS7RuNEBhj6Mc/SjzIgi76XlY3WMU6/p/nw33WmO0QUN9wbor6UZCvzfqxM/o3ihK/I9QZIGssDxvSayuXj8INjgeYhBHOdgCMb6srzkpjpddTrE2M9mShoo40ABn4Je9nzvP6wWtdy6cjZDY7pkk23HVnmX288cb+5eUqpa55bBAtXeTt/+AaRZ1DdGrJGWnu7n3DFicrtSZh6jG+nxtOOGYn4u6WA3xfOJNrPDvsdtvcPyomycenGxp2k/nUYn4bykJ81dSzrUeoOBqChvTTYPldhFPydTQmxI6nhe6do9UY86G9/PnjWTk6tpJI6yvE1n54q35GhtWkTi6F3xomrgodRUrIHcGi3tSrPvKIoEwTHZeLWDi9FrcJ6DG38sTPzhafz89TF67h8Cmwb+Z+veeTcG6z7aP0F8LLR/WQqjQ751S//K7PMxuNZ9s1tylkdW9ijRttpC16v9oRMtnZG9D8GjcXoWQ+anNGn6SDyaYg+0AU2LxrFz4qe/SDZWgvlLeAxzpnxOwT8NVu89akPTTIN52BjT7vev+8bStZJlWwbZa6iA0jwGvoDHn+Y8NOH1BwAA  .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "18495159566", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "꧁༒☬𝐂𝐇𝐄𝐋𝐒𝐎𝐍☬༒꧂", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
