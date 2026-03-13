const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function menuCommand(sock, chatId, message) {

    const userName = message.pushName || "Utilisateur";

    // Animation typing
    try {
        await sock.sendPresenceUpdate('composing', chatId);
        await sock.sendMessage(chatId, { text: "⏳ *∘̥⃟☠️𓊈𝐄𝐌𝐏𝐈𝐑𝐄『𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈』𓊉☠️ ∘̥⃟ THE BEST🏆 Loading menu…*" });
        await new Promise(resolve => setTimeout(resolve, 1800));
        await sock.sendPresenceUpdate('paused', chatId);
    } catch {}
// Détection automatique du mode (PUBLIC / PRIVÉ)
let botMode = settings.self === true ? 'PRIVÉ' : 'PUBLIC';
    // Message du menu
    const helpMessage = `
 ▛▀▜ ✦ 🩸𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈–MD•V3🩸 ✦ ▙▀▟
╔──────────────────╗
│ • BOT ID   : AKATSUKI MD  
│ • VERSION  : 3.0.1  
│ • DEV      : SHADOW TECH™  
│ • USER     : ${userName}  
│ • STATUS   : ACTIVE  
│ • MODE     : ${botMode}  
╚──────────────────╝

彡━━ ࿇ SYSTEM AKATSUKI ━彡
│ • .menu
│ • .ping
│ • .alive
│ • .tts <texte>
│ • .del sudo
│ • .owner
│ • .admins
│ • .weather <ville>
│ • .lyrics <chanson>
│ • .attp <texte>
│ • .groupinfo
│ • .vv
│ • .trt <texte> <lang>
│ • .ss <lien>
│ • .jid 
│ • .url
┗━━━━━━━━━━━━━━━━━━━

彡━━ 🛡️ ADMIN CONTROL ━彡
│ • .kick
│ • .kickall
│ • .promote
│ • .demote
│ • .mute <min>
│ • .unmute
│ • .delete
│ • .warn
│ • .ban @user
│ • .warnings
│ • .antilink
│ • .antibadword
│ • .clear
│ • .tag / .tagall
│ • .tagnotadmin
│ • .hidetag <msg>
│ • .chatbot
│ • .resetlink
│ • .antitag on/off
│ • .welcome on/off
│ • .goodbye on/off
┗━━━━━━━━━━━━━━━━━━━

彡━━ 👑 OWNER MENU ━━━彡
│ • .mode
│ • .autostatus
│ • .autoread
│ • .autotyping
│ • .autoreact
│ • .areact
│ • .del sudo 
│ • .pmblocker
│ • .sudo add 
│ • .update 
│ • .setpp
│ • .setmention 
┗━━━━━━━━━━━━━━━━━━━

彡━ 🖼️ IMAGE & STICKER ━彡
│ • .blur
│ • .simage
│ • .sticker
│ • .remini
│ • .crop
│ • .take <pack>
│ • .emojimix 
┗━━━━━━━━━━━━━━━━━━━

彡━━━ ♟️GAME MENU ━━━彡
│ • .tictactoe
│ • .hangman
│ • .guess <lettre>
│ • .trivia
│ • .answer
│ • .truth 
┗━━━━━━━━━━━━━━━━━━━

彡━━━━ 🔮 AI MENU   ━━━彡
│ • .gpt
│ • .gemini
│ • .imagine
┗━━━━━━━━━━━━━━━━━━━

彡━━━ 🎎 FUN MENU ━━━彡
│ • .compliment
│ • .insult
│ • .flirt
│ • .shayari
│ • .roseday
│ • .character
│ • .wasted
│ • .ship
│ • .simp
│ • .stupid
│ • .triggered
┗━━━━━━━━━━━━━━━━━━━

彡━━━ 📝 TEXTMAKER ━━彡
│ • .metallic
│ • .ice
│ • .snow
│ • .impressive
│ • .matrix
│ • .light
│ • .neon
│ • .devil
│ • .purple
│ • .thunder
│ • .leaves
│ • .1917
│ • .arena
│ • .hacker
│ • .sand
│ • .blackpink
│ • .glitch
│ • .fire
┗━━━━━━━━━━━━━━━━━━━

彡━ ⬇️DOWNLOAD MENU ━彡
│ • .play
│ • .song
│ • .facebook
│ • .ytmp4
┗━━━━━━━━━━━━━━━━━━━

彡━ INSU &COMPL MENU ━彡
│ • .stupid
│ • .comrade
│ • .gay
┗━━━━━━━━━━━━━━━━━━━
│   ࿇ 𝚃𝙷𝙴 𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈 𝙲𝙻𝙰𝙽 ࿇
│      ©  BY SHADOW TECH™  
┗━━━━━━━━━━━━━━━━━━┛
`;

    try {
        // Envoi de l'image si elle existe
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);

            await sock.sendMessage(
                chatId,
                {
                    image: imageBuffer,
                    caption: helpMessage,
                    contextInfo: {
                        forwardingScore: 1,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "120363402057857053@newsletter",
                            newsletterName: "🌹𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈–MD•V3🌹",
                            serverMessageId: -1
                        }
                    }
                },
                { quoted: message }
            );

        } else {
            await sock.sendMessage(chatId, {
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363402057857053@newsletter",
                        newsletterName: "🌹𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈–MD•V3🌹",
                        serverMessageId: -1
                    }
                }
            });
        }

        // AUDIO DU MENU
        const audioPath = path.join(__dirname, '../assets/menu_audio.mp3');
        if (fs.existsSync(audioPath)) {
            const audioBuffer = fs.readFileSync(audioPath);

            await sock.sendMessage(
                chatId,
                {
                    audio: audioBuffer,
                    mimetype: 'audio/mpeg',
                    ptt: false   // 🔥 ENFIN : MUSIQUE NORMALE (barre audio)
                },
                { quoted: message }
            );
        }

    } catch (error) {
        console.error("Erreur MENU:", error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = menuCommand;