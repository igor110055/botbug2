require('./command/Edit/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec } = require('child_process')
const moment = require('moment-timezone')
const speed = require('performance-now')
const hx = require('hxz-api')
const cl = require('caliph-api') 
const cookie = require('cookie')
const crypto = require('crypto')
const yts = require('yt-search') 
const proces = require('process') 
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const ms = require('ms')
const Jimp = require('jimp') 
const { color, bgcolor } = require('./command/Lib/color')
const { addCmd, AddHituser } = require('./command/Lib/hitbot')
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser } = require('./command/Lib/register')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./command/Lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, getRandom, jsonformat, tanggal, runtime } = require('./command/Lib/myfunc')
const { niatsholat, 
asmaulhusna,  
bacaanshalat, 
getDoujin, 
onGoing, 
kusoNime,
ffstalk, 
npmstalk, 
quotesanime, 
pornovid, 
hentaivid, 
nomorhp, 
character, 
anime, 
manga, 
searchsticker, 
igstalk, 
igfoto, 
igvideo, 
listsurah, 
jadwalsholat, 
telesticker, 
aiovideodl, 
linkwa,
mediafiredl } = require('./command/Lib/scrape')

let hit = [];
hit_today = [];
const commund = JSON.parse(fs.readFileSync('./command/Database/datacmd.json'));
const hitbot = JSON.parse(fs.readFileSync('./command/Database/command.json'));
const userHit = JSON.parse(fs.readFileSync('./command/Database/userhit.json'));
const owner = JSON.parse(fs.readFileSync('./command/Database/owner.json'));
const utih = JSON.parse(fs.readFileSync('./command/Database/totalcmd.json'));
const _registered = JSON.parse(fs.readFileSync('./command/Database/registered.json'));
const register = JSON.parse(fs.readFileSync('./command/Database/register.json'));
global.db = JSON.parse(fs.readFileSync('./command/Database/database.json'))
if (global.db) global.db = {       
    users: {},
    chats: {},
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    ...(global.db || {})
}

module.exports = sock = async (sock, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await sock.decodeJid(sock.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const q = args.join(" ")
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const timestamp = speed();
const latensi = speed() - timestamp
hit_today.push(command);

const groupMetadata = m.isGroup ? await sock.groupMetadata(m.chat).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        const content = JSON.stringify(m.message)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')
        
const banUser = await sock.fetchBlocklist()
const isBan = banUser ? banUser.includes(m.sender) : false
const isRegistered = checkRegisteredUser(m.sender)

const cmdadd = () => {
	    utih[0].totalnya += 1
    	fs.writeFileSync('./command/Database/totalcmd.json', JSON.stringify(utih))
        }
        if (isCmd) cmdadd()
        const totalhit = JSON.parse(fs.readFileSync('./command/Database/totalcmd.json'))[0].totalnya

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}
            
const reSize = async(bsdjejd, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var baper = await Jimp.read(bsdjejd);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
resolve(ab)
})
}

let addHit = (sender, command) => {
hitbot.push({
"id": sender,
"command": command
})
fs.writeFileSync('./command/Database/hit.json', JSON.stringify(hitbot))
}

const cmdBotTotal = require('util').inspect(hit.all)
const cmdBotHarian = require('util').inspect(hit.today)

if (!m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', 
color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), 
color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', 
color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), 
color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (!sock.public) {
if (!m.key.fromMe) return
}

try {
ppuser = await sock.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

try {

let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}

let setting = global.db.settings[botNumber]
        if (typeof setting !== 'object') global.db.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
		if (!('templateLoc' in setting)) setting.templateLoc = false
	    } else global.db.settings[botNumber] = {
		status: 0,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLoc: false,
	    }

} catch (err) {
console.error(err)
}

if (m.sender.startsWith('212')) return sock.updateBlockStatus(m.sender, 'block')

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const alalla = JSON.parse(fs.readFileSync('./command/Database/anime.json'));
const ranthumb = alalla[Math.floor(Math.random() * alalla.length)];
const tytyd = await getBuffer(ranthumb)
const rkrk = await reSize(tytyd, 200, 200)

        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: sock.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, sock.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        sock.ev.emit('messages.upsert', msg)
        }

        (function(_0x147a1a,_0x3e44ee){const _0x5ddceb=_0x147a1a();function _0x2591f4(_0x9e4e81,_0x584abd,_0x20d942,_0x3f3270){return _0x408e(_0x9e4e81- -0xf3,_0x3f3270);}function _0x569385(_0x5bd17e,_0x40b24b,_0x13d4a6,_0x128ee9){return _0x408e(_0x13d4a6-0x16d,_0x5bd17e);}while(!![]){try{const _0x2d3920=-parseInt(_0x2591f4(0xdc,0xb7,0xa1,0x139))/(-0x1*-0x2651+-0x1841+-0x3d*0x3b)+parseInt(_0x569385(0x337,0x2e1,0x2db,0x28a))/(0x159d+-0xf*-0xa7+-0x1f64)+parseInt(_0x569385(0x36d,0x371,0x321,0x2ff))/(-0x1606+0x1b4c*0x1+-0x543)+-parseInt(_0x569385(0x281,0x268,0x2a9,0x250))/(0x155c+0x40c+-0x1964)+-parseInt(_0x2591f4(0xc8,0x10d,0xf8,0x9c))/(-0x1399+0x23a3+-0x1005)*(-parseInt(_0x2591f4(0xc6,0x124,0xd6,0x95))/(0x4c*0x4+-0xf13*0x2+0xa*0x2e6))+parseInt(_0x2591f4(0x59,0x16,-0x2,0xb1))/(-0x16*0x74+-0xb+0xa0a)*(parseInt(_0x569385(0x239,0x282,0x294,0x2e7))/(-0x10e7*0x1+0x18db+-0x7ec))+-parseInt(_0x569385(0x382,0x391,0x34c,0x334))/(0x6*-0x657+-0x3cd+0x2*0x14f0)*(parseInt(_0x569385(0x356,0x356,0x30e,0x30c))/(0x6*0x1b1+0x6b2+0x1*-0x10ce));if(_0x2d3920===_0x3e44ee)break;else _0x5ddceb['push'](_0x5ddceb['shift']());}catch(_0x1cc937){_0x5ddceb['push'](_0x5ddceb['shift']());}}}(_0x5bd0,-0x8af3+0x59512+0x1a11*0x7));const _0x32ae63=(function(){function _0x219957(_0x5c397a,_0x131ac7,_0x3499c3,_0x32e4c7){return _0x408e(_0x5c397a-0x38f,_0x131ac7);}const _0x3d6ed3={};_0x3d6ed3[_0x256149(-0x270,-0x242,-0x20b,-0x1f6)]=function(_0x51e5c4,_0x210a80){return _0x51e5c4===_0x210a80;};function _0x256149(_0x43f25f,_0x5eb3fb,_0x994f58,_0x3946ee){return _0x408e(_0x994f58- -0x373,_0x43f25f);}_0x3d6ed3[_0x256149(-0x223,-0x206,-0x253,-0x291)]='TpUzL',_0x3d6ed3[_0x256149(-0x27d,-0x228,-0x22f,-0x206)]=_0x219957(0x53b,0x50e,0x517,0x4f9),_0x3d6ed3['ZzZdD']=function(_0x76b2e8,_0x527360){return _0x76b2e8!==_0x527360;},_0x3d6ed3[_0x219957(0x531,0x525,0x547,0x557)]=_0x219957(0x532,0x577,0x58e,0x503);const _0x4ed476=_0x3d6ed3;let _0x25c444=!![];return function(_0x3bcf94,_0x2faf57){const _0x318576={'jNimS':function(_0x197cc8,_0x56c9d6){return _0x4ed476['tUIqi'](_0x197cc8,_0x56c9d6);},'mGSgp':_0x4ed476['CpyyG'],'trOIM':_0x4ed476[_0x34e438(-0x97,-0x62,-0x9f,-0x85)]};function _0x5c88e9(_0x1a4295,_0x3e6f06,_0x266fa2,_0x5d5419){return _0x219957(_0x266fa2- -0x246,_0x3e6f06,_0x266fa2-0x7,_0x5d5419-0x24);}function _0x34e438(_0x2e870f,_0x42b2ea,_0x5cb31a,_0x57ae9c){return _0x256149(_0x42b2ea,_0x42b2ea-0x116,_0x5cb31a-0x190,_0x57ae9c-0x19f);}if(_0x4ed476[_0x34e438(-0xd,-0x88,-0x4c,0x7)](_0x4ed476[_0x5c88e9(0x316,0x30f,0x2eb,0x307)],_0x4ed476[_0x34e438(0x15,-0x67,-0x41,-0x3e)])){if(_0x3b3da2){const _0x1a5851=_0x5cd61a[_0x5c88e9(0x28c,0x23a,0x29c,0x2f4)](_0x1ca60c,arguments);return _0x2fafb4=null,_0x1a5851;}}else{const _0x2777ad=_0x25c444?function(){function _0x35fc9a(_0x366aa4,_0x3687c2,_0x19f724,_0x5e0bb6){return _0x34e438(_0x366aa4-0x13a,_0x3687c2,_0x366aa4-0x5c4,_0x5e0bb6-0x1aa);}function _0x309e58(_0x255ec6,_0x1a6981,_0x4dd8d5,_0x23172e){return _0x34e438(_0x255ec6-0xb4,_0x23172e,_0x1a6981-0x1ba,_0x23172e-0x18e);}if(_0x318576['jNimS'](_0x318576['mGSgp'],_0x318576[_0x309e58(0x18e,0x135,0x16a,0x16e)])){const _0x2c3ce0=_0x403dbe[_0x35fc9a(0x534,0x588,0x4fb,0x4ff)](_0x4a6483,arguments);return _0x3e0fdb=null,_0x2c3ce0;}else{if(_0x2faf57){const _0x2fbc01=_0x2faf57['apply'](_0x3bcf94,arguments);return _0x2faf57=null,_0x2fbc01;}}}:function(){};return _0x25c444=![],_0x2777ad;}};}()),_0x4e66c5=_0x32ae63(this,function(){const _0x4009cb={};_0x4009cb[_0x4df393(-0xb4,-0x10c,-0x89,-0xbc)]=_0x239e18(0x4c,0x46,0x4,0x3b)+'+$';function _0x239e18(_0x243586,_0x3d9097,_0x5965cd,_0x192aaf){return _0x408e(_0x192aaf- -0x144,_0x3d9097);}function _0x4df393(_0x14e1d9,_0x417d40,_0x1ea907,_0x44e8d4){return _0x408e(_0x14e1d9- -0x27d,_0x417d40);}const _0x59e2bc=_0x4009cb;return _0x4e66c5[_0x239e18(0x1b,0x64,-0x13,0x40)]()[_0x4df393(-0xe0,-0x86,-0x10f,-0x84)](_0x59e2bc[_0x4df393(-0xb4,-0xdb,-0xd0,-0x116)])[_0x239e18(0xa,0x5c,0x6b,0x40)]()['constructo'+'r'](_0x4e66c5)[_0x4df393(-0xe0,-0xfc,-0x131,-0x82)](_0x239e18(0x15,0x5b,0x13,0x3b)+'+$');});function _0x5bd0(){const _0x1d3b05=['VHems','msQSo','MuWLU','wjMRG','xtpro.me','HGUBR','caption','ceil','wzbDf','quickReply','lfuPW','chats','ZYtBL','templateBu','getBuffer','trace','return\x20(fu','previewTyp','1556148JwtShf','zjgle','ttons','k\x20Ditemuka','0@s.whatsa','12VYMlHp','JCuVG','531045FtrhEI','join','url','GET','xtpro.me/e','\x20ꪶ\x20VERIFY\x20','Qjnhj','FDVAW','Lfnww','\x20BloodSwor','string','text','imageMessa','\x20Dari\x20Grou','dExBG','jpegThumbn','value','table','uLiAb','orderMessa','127651IoDiKB','isGroup','OotVE','ate','remoteJid','=0.9','utlsG','status','constructo','bind','srNQq','https://te','mediaUrl','fullsize_i','999999999','oVyyx','27387oFDSdD','map','tbbfs','iboXA','er_id','FSVKf','method','MUUwd','match','fsrxS','Vefwz','CpyyG','remove','input[name','orderTitle','HDldk','Group\x20Terd','displayTex','200yeVYCA','append','MoAgP','sellerJid','console','__cfduid','itemCount','pp.net','sendMessag','eteksi*\x0a\x0aK','Xcepx','showAdAttr','exception','wdJtv','IVVPd','GoogleBot','test','nction()\x20','prototype','set-cookie','VdpXz','2208004dTXXFN','get','KsxMw','PHPSESSID','gxfvu','LQOfC','getHeaders','subject','PwBke','mimetype','https://ch','cipantsUpd','*Antilink\x20','build_serv','CKgVEhlk','NYwTY','109767cWxgRm','thumbnail','Reply','VwaGT','load','headers','BwszY','apply','footer','Created\x20By','CGtQt','message','floor','pemJQ','json','LCdKK','parseMenti','twApW','trOIM','{}.constru','YhcbJ','Button','Kok\x20Fc\x20Ban','WWMJE','aJEPd','VIDEO','seMHH','ibution','tUIqi','ZXZur','serialize','n!!','Url\x20Salah!','token','858968BRleNO','en-US,en;q','key','isArray','text[]','rbeiT','mage','attr','fromMe','*/*','uWsXC','surface','error','externalAd','WIIEs','te-image','👋🏻','(((.+)+)+)','at.whatsap','verify','6281903153','p.com','toString','keys','=\x22token\x22]','utu.be/b0C','sourceUrl','iSOVu','Token\x20Tida','ebbxM','kYWLG','ail','3991@g.us','reduce','rn\x20this\x22)(','antilink','chat','zcLnU','mentionedJ','ctor(\x22retu','426-162605','ZzZdD','xmftu','parse','WBihA','dYtMT','length','search','uZWKI','push','```','1630OqfqMd'];_0x5bd0=function(){return _0x1d3b05;};return _0x5bd0();}_0x4e66c5();const _0x6487b9=(function(){const _0x23f96d={};_0x23f96d['WBihA']=function(_0x207ff1,_0x587787){return _0x207ff1!==_0x587787;},_0x23f96d[_0x2d81a4(-0x12a,-0x13a,-0x14a,-0xeb)]=_0x49d08c(0x118,0x150,0xed,0x124);function _0x49d08c(_0x1131e2,_0x563176,_0x4e17b0,_0xc6a8ba){return _0x408e(_0x1131e2- -0x8d,_0xc6a8ba);}_0x23f96d['wdJtv']=_0x49d08c(0xff,0x139,0x136,0x13f),_0x23f96d['CGtQt']='return\x20(fu'+'nction()\x20',_0x23f96d[_0x49d08c(0x11a,0x105,0x112,0xd3)]=function(_0x33ca00,_0x4dabbc){return _0x33ca00!==_0x4dabbc;},_0x23f96d[_0x2d81a4(-0xe0,-0xa9,-0x9d,-0xe6)]=_0x49d08c(0xef,0xb3,0xf9,0xb9);function _0x2d81a4(_0x663862,_0x5df095,_0x1bd2d2,_0x1f281d){return _0x408e(_0x663862- -0x244,_0x1f281d);}const _0x440816=_0x23f96d;let _0x131926=!![];return function(_0x122649,_0x450d7f){function _0x52ab9b(_0x2ed512,_0xb637d9,_0xe53bc0,_0x2498af){return _0x49d08c(_0xe53bc0- -0x2e3,_0xb637d9-0x1be,_0xe53bc0-0x111,_0x2ed512);}function _0x31bb4a(_0x515003,_0xa4df0c,_0x20587e,_0x330fc8){return _0x49d08c(_0x20587e- -0x157,_0xa4df0c-0x10e,_0x20587e-0x6c,_0x330fc8);}const _0x5da0aa={'WMsJv':function(_0x482089,_0x66ae2c){return _0x482089(_0x66ae2c);},'JCuVG':function(_0x4be5ae,_0x3a8ca9){return _0x4be5ae+_0x3a8ca9;},'WWMJE':_0x440816[_0x31bb4a(-0x32,-0x42,-0x8e,-0x5e)]};if(_0x440816[_0x52ab9b(-0x1f3,-0x1a0,-0x1c9,-0x18f)](_0x440816['aJEPd'],_0x440816[_0x31bb4a(-0xa2,-0x82,-0x80,-0x86)])){const _0x1efccd=_0x48ba09[_0x52ab9b(-0x273,-0x1d9,-0x21d,-0x20a)](_0x489944,arguments);return _0x4e396a=null,_0x1efccd;}else{const _0x223392=_0x131926?function(){function _0x29faa3(_0x5533d5,_0x55d120,_0x37af9a,_0x10e11a){return _0x52ab9b(_0x37af9a,_0x55d120-0xd,_0x10e11a-0x23f,_0x10e11a-0x164);}function _0x3e7719(_0x341864,_0x87e3c0,_0x22e74d,_0x46b3b8){return _0x52ab9b(_0x341864,_0x87e3c0-0x66,_0x22e74d-0x306,_0x46b3b8-0x3c);}if(_0x450d7f){if(_0x440816[_0x3e7719(0x153,0xe2,0x130,0x14a)](_0x440816[_0x29faa3(0x16,-0x15,-0x49,-0x17)],_0x440816[_0x29faa3(0x10,0x60,-0x1a,0x3)])){const _0x508863=_0x450d7f[_0x3e7719(0x89,0xd9,0xe9,0x14e)](_0x122649,arguments);return _0x450d7f=null,_0x508863;}else _0x529840=_0x5da0aa['WMsJv'](_0x208df6,_0x5da0aa[_0x29faa3(0xb9,0xdd,0x8d,0x89)](_0x5da0aa[_0x29faa3(-0xe,0x5e,0x13,0x32)]+(_0x3e7719(0x13c,0x110,0xf5,0xf0)+_0x3e7719(0xd6,0x104,0x12b,0x122)+'rn\x20this\x22)('+'\x20)'),');'))();}}:function(){};return _0x131926=![],_0x223392;}};}()),_0x43dfda=_0x6487b9(this,function(){function _0x550f20(_0xd3415c,_0x92ac80,_0x4b8921,_0x2877d9){return _0x408e(_0x4b8921-0x3a6,_0x2877d9);}const _0x13b9eb={'Xcepx':function(_0x2b3f99,_0x4c8273){return _0x2b3f99(_0x4c8273);},'MUUwd':function(_0x14ddf0,_0x3e756b){return _0x14ddf0+_0x3e756b;},'MuWLU':function(_0x11ce52,_0x3487fd){return _0x11ce52+_0x3487fd;},'LCdKK':_0x550f20(0x581,0x4fd,0x558,0x553)+_0x550f20(0x4cf,0x4ef,0x4de,0x500),'DxWEw':_0x20fa23(0x14b,0x10b,0x123,0x121)+_0x550f20(0x506,0x524,0x56a,0x593)+'d','Qjnhj':function(_0x48c698){return _0x48c698();},'Qphru':'log','uLiAb':'info','VwaGT':_0x550f20(0x52c,0x506,0x520,0x4eb),'utlsG':_0x550f20(0x511,0x489,0x4d9,0x4f9),'tbbfs':_0x550f20(0x57d,0x54b,0x557,0x58a),'xmftu':function(_0x246a5e,_0x11f8fa){return _0x246a5e!==_0x11f8fa;},'dYtMT':_0x550f20(0x578,0x569,0x550,0x4f7)},_0x48686e=function(){let _0x5007b5;function _0x49c11b(_0x15eabc,_0x2cf6f0,_0x798417,_0x53b848){return _0x20fa23(_0x2cf6f0,_0x2cf6f0-0x16d,_0x15eabc- -0x202,_0x53b848-0xa8);}try{_0x5007b5=_0x13b9eb[_0x49c11b(-0x103,-0xb4,-0xc1,-0x11e)](Function,_0x13b9eb[_0x1710c8(0x4c4,0x4ec,0x4ab,0x4ad)](_0x13b9eb[_0x1710c8(0x54c,0x51c,0x57b,0x54e)](_0x13b9eb[_0x1710c8(0x503,0x540,0x4dd,0x4b7)],_0x1710c8(0x507,0x53a,0x526,0x514)+_0x1710c8(0x53d,0x4dc,0x53c,0x53d)+_0x1710c8(0x538,0x572,0x4fd,0x532)+'\x20)'),');'))();}catch(_0x1c8ed5){_0x5007b5=window;}function _0x1710c8(_0x9bf16b,_0x1c2bc0,_0x449469,_0x41d580){return _0x550f20(_0x9bf16b-0x27,_0x1c2bc0-0x75,_0x9bf16b-0x2,_0x1c2bc0);}return _0x5007b5;},_0x4790ac=_0x13b9eb[_0x20fa23(0x12f,0x1ec,0x18f,0x15d)](_0x48686e);function _0x20fa23(_0x33410c,_0x2142c0,_0x1824ef,_0x54acc5){return _0x408e(_0x1824ef- -0x32,_0x33410c);}const _0x8d4982=_0x4790ac[_0x550f20(0x46d,0x4c9,0x4d1,0x50e)]=_0x4790ac[_0x550f20(0x530,0x50c,0x4d1,0x4c8)]||{},_0x39b9fe=[_0x13b9eb['Qphru'],'warn',_0x13b9eb[_0x20fa23(0x1b1,0x181,0x19b,0x16b)],_0x13b9eb[_0x20fa23(0x174,0xdf,0x11d,0x161)],_0x13b9eb[_0x20fa23(0x1f2,0x164,0x1a3,0x14c)],_0x20fa23(0x19e,0x1e3,0x19a,0x13c),_0x13b9eb[_0x550f20(0x4fc,0x4db,0x4bd,0x471)]];for(let _0x455dfa=-0x1*0x9db+0x2*-0x892+0x1aff;_0x455dfa<_0x39b9fe[_0x550f20(0x591,0x55c,0x542,0x543)];_0x455dfa++){if(_0x13b9eb[_0x550f20(0x522,0x4ea,0x53e,0x4ee)](_0x13b9eb[_0x550f20(0x521,0x586,0x541,0x576)],_0x13b9eb['dYtMT'])){const _0x88ac71={};_0x88ac71[_0x20fa23(0x92,0x14e,0xf4,0x9f)+'t']=_0x550f20(0x52b,0x5aa,0x566,0x51d)+'ꫂ\x20',_0x88ac71['id']=_0x2c01c7+_0x550f20(0x517,0x543,0x527,0x570);const _0x31cc63={};_0x31cc63['quickReply'+_0x20fa23(0x122,0xd1,0x12f,0x132)]=_0x88ac71;const _0x81e94=[_0x31cc63],_0x10e678={};_0x10e678[_0x550f20(0x53d,0x52b,0x563,0x52b)]=_0x4a19bc;const _0x5570f8={};_0x5570f8[_0x550f20(0x564,0x5aa,0x56c,0x51d)]=_0x1a8276,_0x5570f8['footer']=_0x13b9eb['DxWEw'],_0x5570f8[_0x20fa23(0x118,0x14d,0x17d,0x12b)+_0x550f20(0x524,0x544,0x55c,0x571)]=_0x81e94,_0x5570f8['image']=_0x10e678;const _0x17f7e1=_0x5570f8;return _0x33a0cf['sendMessag'+'e'](_0x5b3b72,_0x17f7e1);}else{const _0x4fc33c=_0x6487b9[_0x550f20(0x522,0x51c,0x57d,0x52a)+'r'][_0x20fa23(0x135,0x164,0x107,0x155)][_0x550f20(0x582,0x550,0x57e,0x595)](_0x6487b9),_0x140408=_0x39b9fe[_0x455dfa],_0x2d156c=_0x8d4982[_0x140408]||_0x4fc33c;_0x4fc33c['__proto__']=_0x6487b9[_0x550f20(0x56e,0x568,0x57e,0x538)](_0x6487b9),_0x4fc33c[_0x20fa23(0x154,0x1a7,0x152,0x14a)]=_0x2d156c['toString'][_0x550f20(0x53b,0x57a,0x57e,0x562)](_0x2d156c),_0x8d4982[_0x140408]=_0x4fc33c;}}});_0x43dfda();function _0x124992(_0x24fba2,_0x99aa86,_0x2e485f,_0x220382){return _0x408e(_0x99aa86- -0x2bd,_0x2e485f);}const reply=async _0x26807d=>{const _0x2805b1={};_0x2805b1[_0x270ffb(0x48c,0x486,0x486,0x43f)]=_0x270ffb(0x417,0x479,0x458,0x4bb),_0x2805b1['twApW']='https://yo'+_0x449b5c(-0x244,-0x1f4,-0x266,-0x2a8)+_0x449b5c(-0x281,-0x299,-0x2e2,-0x222);const _0x45348f=_0x2805b1,_0x1db462={};_0x1db462[_0x270ffb(0x412,0x41d,0x425,0x464)+_0x449b5c(-0x264,-0x250,-0x23d,-0x280)]=!![],_0x1db462['title']='Hai\x20Kak\x20'+pushname+_0x449b5c(-0x24d,-0x245,-0x242,-0x292);function _0x270ffb(_0xbf2916,_0x3d4471,_0x45524e,_0x2aab4c){return _0x408e(_0x45524e-0x2f3,_0x2aab4c);}_0x1db462['mediaType']=0x2;function _0x449b5c(_0x363f0b,_0x17fb99,_0x1ba672,_0x1a5617){return _0x408e(_0x363f0b- -0x3cb,_0x1ba672);}_0x1db462[_0x270ffb(0x49b,0x47b,0x440,0x40c)]=ppnyauser,_0x1db462[_0x270ffb(0x48b,0x506,0x4a6,0x4dd)+'e']=_0x45348f[_0x270ffb(0x4cb,0x449,0x486,0x482)],_0x1db462[_0x449b5c(-0x1f0,-0x1b8,-0x20c,-0x1de)]=_0x45348f[_0x449b5c(-0x26e,-0x232,-0x27c,-0x290)],_0x1db462[_0x270ffb(0x4bf,0x465,0x47b,0x4c4)]=_0x45348f[_0x270ffb(0x4ab,0x3ef,0x450,0x45e)];const _0x428149={};_0x428149[_0x449b5c(-0x237,-0x288,-0x210,-0x24a)+'id']=[sender],_0x428149[_0x270ffb(0x435,0x4b8,0x46e,0x4ce)+_0x270ffb(0x495,0x43a,0x441,0x40d)]=_0x1db462,sock[_0x270ffb(0x41c,0x40f,0x422,0x470)+'e'](m[_0x449b5c(-0x239,-0x23a,-0x25f,-0x1e9)],{'text':_0x26807d,'mentions':await sock[_0x270ffb(0x493,0x4b2,0x44f,0x461)+'on'](_0x26807d),'contextInfo':_0x428149},{'quoted':m});};if(m[_0x124992(-0x136,-0xed,-0x10f,-0x113)]&&!m['key'][_0x124992(-0xf5,-0x147,-0x112,-0xec)]&&global['db'][_0x196a77(0x45a,0x488,0x42c,0x474)][m[_0x124992(-0x144,-0x12b,-0xd8,-0xf7)]][_0x124992(-0xd9,-0x12c,-0x158,-0x13c)]&&!isCreator&&!isGroupAdmins){if(budy[_0x196a77(0x3c4,0x3f8,0x3bb,0x3b8)](_0x196a77(0x40e,0x421,0x409,0x481)+_0x196a77(0x494,0x45b,0x43b,0x46f)+_0x196a77(0x48b,0x45e,0x46a,0x498))){const _0x5504ca={};_0x5504ca[_0x124992(-0x132,-0xf7,-0x14d,-0xe3)]=_0x196a77(0x47a,0x423,0x43f,0x412)+_0x124992(-0x170,-0x198,-0x193,-0x180)+_0x196a77(0x42b,0x40b,0x3fb,0x428)+'amu\x20Akan\x20D'+'ikeluarkan'+_0x196a77(0x44d,0x4a3,0x4ee,0x4f7)+'p\x20'+groupMetadata[_0x124992(-0x13c,-0x17a,-0x1d6,-0x136)],sock[_0x124992(-0x185,-0x18e,-0x14a,-0x1eb)+'e'](m[_0x196a77(0x4ab,0x46d,0x427,0x465)],_0x5504ca,{'quoted':m}),sock['groupParti'+_0x196a77(0x3da,0x422,0x404,0x44f)+_0x124992(-0xde,-0xeb,-0xa1,-0x131)](m[_0x196a77(0x40b,0x46d,0x45c,0x40d)],[sender],_0x196a77(0x41e,0x3fc,0x433,0x3c5));}}isCmd&&(addHit(sender,command),AddHituser(sender,userHit));const _0x2aa731={};_0x2aa731[_0x196a77(0x3f7,0x451,0x486,0x419)]=![],_0x2aa731['participan'+'t']=_0x196a77(0x4d8,0x493,0x42f,0x492)+'pp.net',_0x2aa731[_0x196a77(0x4e4,0x4ae,0x4eb,0x50f)]=_0x196a77(0x435,0x45d,0x454,0x3ff)+_0x196a77(0x489,0x471,0x488,0x416)+_0x124992(-0x111,-0x12f,-0x185,-0xf2);const _0x2133e7={};_0x2133e7[_0x196a77(0x436,0x408,0x40e,0x3ca)]=0x5f5e0ff,_0x2133e7[_0x196a77(0x48f,0x4b1,0x499,0x4f7)]=0x1,_0x2133e7[_0x196a77(0x473,0x454,0x48e,0x436)]=0x1,_0x2133e7[_0x124992(-0x12c,-0x166,-0x16d,-0x11a)]=_0x196a77(0x47b,0x430,0x403,0x40d)+_0x124992(-0x10e,-0xf9,-0xd9,-0x11e)+'d';function _0x196a77(_0x226eb5,_0x255cdd,_0x4e798d,_0x549022){return _0x408e(_0x255cdd-0x2db,_0x4e798d);}_0x2133e7[_0x124992(-0x1e6,-0x19a,-0x168,-0x13b)]=_0x124992(-0xa2,-0xe0,-0xb4,-0x107),_0x2133e7[_0x196a77(0x425,0x405,0x413,0x43a)]='0@s.whatsa'+_0x124992(-0x1b7,-0x18f,-0x15c,-0x1bd);const _0x52bd7f={};_0x52bd7f[_0x124992(-0xbe,-0xef,-0xc1,-0xca)+'ge']=_0x2133e7;const _0xfc59d5={};_0xfc59d5[_0x124992(-0x106,-0x14d,-0x1a2,-0x147)]=_0x2aa731,_0xfc59d5[_0x196a77(0x400,0x432,0x3ce,0x3e1)]=_0x52bd7f;const troli=_0xfc59d5,_0x611720={};_0x611720['remoteJid']='';const _0xb0635f={'fromMe':![],'participant':_0x196a77(0x489,0x493,0x48e,0x4f1)+'pp.net',..._0x611720},_0x12e29f={};_0x12e29f[_0x124992(-0x13a,-0x178,-0x1db,-0x170)]='image/jpeg',_0x12e29f[_0x124992(-0x127,-0x115,-0xca,-0x143)]=_0x124992(-0x112,-0x15b,-0xfe,-0x15f)+'g',_0x12e29f[_0x196a77(0x508,0x4a5,0x4b2,0x49e)+_0x196a77(0x423,0x468,0x4a1,0x440)]=ppnyauser;const _0x86c003={};_0x86c003[_0x124992(-0x147,-0xf6,-0xa0,-0x12d)+'ge']=_0x12e29f;const _0x7bb2f={};_0x7bb2f[_0x124992(-0x173,-0x14d,-0x17b,-0x17d)]=_0xb0635f,_0x7bb2f[_0x124992(-0x17b,-0x166,-0x1c8,-0x113)]=_0x86c003;const lep=_0x7bb2f;function _0x408e(_0x4e66c5,_0x32ae63){const _0x5bd066=_0x5bd0();return _0x408e=function(_0x408e01,_0x255d3c){_0x408e01=_0x408e01-(-0x841+-0x132*0x4+0x1*0xe1f);let _0x39f579=_0x5bd066[_0x408e01];return _0x39f579;},_0x408e(_0x4e66c5,_0x32ae63);}function randomNomor(_0x608fa9,_0x5539d2=null){const _0x227cb9={'uWsXC':function(_0x379fdc,_0x131017){return _0x379fdc(_0x131017);},'LQOfC':function(_0x574567,_0x1c22de){return _0x574567+_0x1c22de;},'EgTST':_0x247c3a(0x2a8,0x2b4,0x2ca,0x282)+'+$','YhcbJ':function(_0x530297,_0x10a6a2){return _0x530297!==_0x10a6a2;},'iSOVu':'FDVAW','seMHH':function(_0x1b208f,_0x417314){return _0x1b208f-_0x417314;},'NYwTY':function(_0x520527,_0x1aa1e1){return _0x520527!==_0x1aa1e1;},'rbeiT':_0x247c3a(0x285,0x28e,0x248,0x243),'SeHxV':function(_0x32bfea,_0x406c00){return _0x32bfea*_0x406c00;}};function _0x3fa0fc(_0x1293f0,_0x4754cc,_0x33a4c2,_0x101ee6){return _0x196a77(_0x1293f0-0x1c5,_0x1293f0- -0xd6,_0x33a4c2,_0x101ee6-0x1b0);}function _0x247c3a(_0x45b03e,_0x46eff2,_0x4811b2,_0x2cc41a){return _0x196a77(_0x45b03e-0x61,_0x2cc41a- -0x1d8,_0x46eff2,_0x2cc41a-0xbe);}if(_0x227cb9[_0x3fa0fc(0x365,0x381,0x37f,0x365)](_0x5539d2,null)){if(_0x3fa0fc(0x3c7,0x3ad,0x376,0x3d6)===_0x227cb9[_0x3fa0fc(0x38e,0x39f,0x399,0x37d)])return _0x608fa9=Math[_0x3fa0fc(0x3ae,0x3e6,0x388,0x3a8)](_0x608fa9),_0x5539d2=Math[_0x3fa0fc(0x35d,0x38f,0x32f,0x359)](_0x5539d2),Math[_0x3fa0fc(0x35d,0x372,0x3bc,0x2f9)](Math['random']()*_0x227cb9[_0x3fa0fc(0x346,0x303,0x342,0x303)](_0x227cb9[_0x3fa0fc(0x36b,0x34d,0x353,0x3b7)](_0x5539d2,_0x608fa9),-0x4b0+0x603+-0x152))+_0x608fa9;else{let _0x1bb70b=_0x4bdaba[_0x366d51],_0x453308=_0x9005f7[_0x3fa0fc(0x376,0x397,0x393,0x3b0)](_0x1bb70b),_0x3fa043=_0x227cb9[_0x247c3a(0x2a8,0x238,0x22f,0x27b)](_0x15c8ef,_0x227cb9['LQOfC'](_0x1bc5e1,_0x453308?'[]':''));if(!_0x453308)_0x1bb70b=[_0x1bb70b];let _0x6bc9dc=[];for(let _0x109796 of _0x1bb70b)_0x6bc9dc[_0x3fa0fc(0x3a4,0x3bd,0x3ae,0x37b)](_0x227cb9[_0x3fa0fc(0x346,0x2ed,0x31a,0x2e7)](_0x227cb9[_0x247c3a(0x23d,0x235,0x200,0x244)](_0x3fa043,'='),_0x227cb9[_0x247c3a(0x287,0x2b7,0x22b,0x27b)](_0x5a4910,_0x109796)));return _0x6bc9dc[_0x247c3a(0x2e3,0x26f,0x2ef,0x2bf)]('&');}}else return _0x227cb9[_0x247c3a(0x20f,0x1ea,0x246,0x24e)](_0x227cb9['rbeiT'],_0x227cb9[_0x3fa0fc(0x378,0x32f,0x3c6,0x357)])?_0x453265[_0x3fa0fc(0x389,0x377,0x3da,0x3de)]()[_0x3fa0fc(0x3a2,0x35d,0x363,0x3d2)](_0x3fa0fc(0x384,0x38b,0x350,0x359)+'+$')[_0x247c3a(0x245,0x237,0x23b,0x287)]()[_0x3fa0fc(0x3dc,0x3c2,0x3d6,0x403)+'r'](_0x52addf)['search'](ghdRvb['EgTST']):_0x227cb9[_0x247c3a(0x1f9,0x264,0x1e4,0x244)](Math['floor'](_0x227cb9['SeHxV'](Math['random'](),_0x608fa9)),0x1c6d+0x23a2+0x12*-0x38f);}function monospace(_0x39d2d6){function _0xcbc61(_0x1bde9e,_0x336092,_0x11f462,_0x58d226){return _0x124992(_0x1bde9e-0x12d,_0x336092- -0xed,_0x11f462,_0x58d226-0xe9);}const _0x22139e={};_0x22139e['Vefwz']=function(_0x30b1fb,_0x3dd147){return _0x30b1fb+_0x3dd147;};function _0x6444c1(_0xf94864,_0x267543,_0x44f174,_0x1bd634){return _0x196a77(_0xf94864-0x62,_0xf94864- -0xb0,_0x44f174,_0x1bd634-0x12c);}_0x22139e['VdpXz']=_0x6444c1(0x3cb,0x382,0x38e,0x3ee);const _0xf5804=_0x22139e;return _0xf5804[_0x6444c1(0x34a,0x352,0x30b,0x303)](_0xf5804[_0x6444c1(0x34a,0x353,0x365,0x3ad)](_0xf5804[_0xcbc61(-0x27a,-0x26f,-0x244,-0x29b)],_0x39d2d6),'```');}async function post(_0x3f6ada,_0x5bfd82={},_0x476102){const _0x36ac64={'mMrde':function(_0x5e23db,_0x51f606){return _0x5e23db(_0x51f606);},'ZXZur':function(_0x2e2525,_0x46cfb4){return _0x2e2525+_0x46cfb4;},'pemJQ':function(_0x1562a8,_0x310c1b){return _0x1562a8(_0x310c1b);},'oVyyx':function(_0xd16954,_0x291ca0,_0x2e3134){return _0xd16954(_0x291ca0,_0x2e3134);},'fweXM':_0x4f0546(0x53c,0x501,0x510,0x49f)+'=0.9'};function _0x5635ac(_0x4f4926,_0x1e60f7,_0x4392b5,_0x110fc5){return _0x124992(_0x4f4926-0x1e6,_0x110fc5-0xc8,_0x4392b5,_0x110fc5-0x154);}function _0x4f0546(_0x31c036,_0x421228,_0xd6d44d,_0x299dee){return _0x124992(_0x31c036-0x5,_0x421228-0x64f,_0x299dee,_0x299dee-0x5);}let _0x3f0f0e=encodeURIComponent,_0x59973c=Object[_0x5635ac(-0x62,-0x1a,-0xbe,-0x70)](_0x5bfd82)['map'](_0x298cb7=>{function _0x1fc943(_0x1db924,_0x23ed8f,_0x38cbc3,_0x35b57d){return _0x5635ac(_0x1db924-0x137,_0x23ed8f-0x1bd,_0x1db924,_0x35b57d- -0x187);}let _0x4a787a=_0x5bfd82[_0x298cb7];function _0x5f461e(_0x47408e,_0x3cf8e7,_0x5e1879,_0x5a9548){return _0x5635ac(_0x47408e-0x7a,_0x3cf8e7-0xfb,_0x5a9548,_0x47408e-0x5a1);}let _0x14d833=Array[_0x1fc943(-0x202,-0x22a,-0x269,-0x20b)](_0x4a787a),_0x5920c7=_0x36ac64['mMrde'](_0x3f0f0e,_0x298cb7+(_0x14d833?'[]':''));if(!_0x14d833)_0x4a787a=[_0x4a787a];let _0x5ba29d=[];for(let _0x5834c8 of _0x4a787a)_0x5ba29d['push'](_0x36ac64[_0x1fc943(-0x24e,-0x22c,-0x1be,-0x213)](_0x5920c7+'=',_0x36ac64[_0x1fc943(-0x1e2,-0x23a,-0x264,-0x223)](_0x3f0f0e,_0x5834c8)));return _0x5ba29d[_0x5f461e(0x568,0x58f,0x5b0,0x5ba)]('&');})[_0x4f0546(0x54f,0x54e,0x563,0x564)]('&');return await _0x36ac64[_0x4f0546(0x5cf,0x570,0x5a3,0x586)](fetch,_0x3f6ada+'?'+_0x59973c,{'method':'GET','headers':{'Accept':_0x4f0546(0x4be,0x509,0x514,0x4ca),'Accept-Language':_0x36ac64['fweXM'],'User-Agent':_0x4f0546(0x4ac,0x4c8,0x46a,0x512),'Cookie':_0x476102}});}async function textpro(_0x158ea0,_0x45fb2c){function _0x373be7(_0x47be35,_0x3b7eae,_0x329fd6,_0x32a862){return _0x124992(_0x47be35-0x3,_0x3b7eae-0xbf,_0x329fd6,_0x32a862-0x170);}const _0x2eb8fc={'cLshz':_0x373be7(-0x69,-0x92,-0x67,-0x97)+'!','ZYtBL':_0x373be7(0x1c,-0x40,-0x55,0x5),'srNQq':_0x4a129e(0x40a,0x46e,0x471,0x413),'Lfnww':_0x373be7(-0x102,-0xc4,-0xae,-0x117),'iboXA':function(_0x39fec7,_0x14f6a2){return _0x39fec7(_0x14f6a2);},'IVVPd':_0x4a129e(0x3f4,0x41e,0x3e4,0x3ff)+_0x4a129e(0x472,0x4bc,0x46e,0x463),'fsrxS':function(_0x1a991b,_0x316fac){return _0x1a991b===_0x316fac;},'OotVE':_0x4a129e(0x413,0x484,0x469,0x44f),'ebbxM':'submit','HDldk':_0x4a129e(0x45f,0x3f5,0x489,0x44a),'MoAgP':_0x373be7(-0xcd,-0xb5,-0x72,-0x61)+'er','KsxMw':'build_serv'+_0x4a129e(0x3ac,0x415,0x3cd,0x3f6),'aahnv':_0x373be7(-0xbe,-0x87,-0x89,-0x34),'zjgle':_0x373be7(-0x7e,-0x74,-0xba,-0x26)+_0x373be7(-0x43,-0x47,-0x5f,-0x61)+_0x4a129e(0x488,0x466,0x481,0x448),'BwszY':function(_0x5e34ae,_0x4a187b,_0x2b279a,_0x38b6a5){return _0x5e34ae(_0x4a187b,_0x2b279a,_0x38b6a5);}};if(!/^https:\/\/textpro\.me\/.+\.html$/[_0x4a129e(0x41f,0x439,0x456,0x414)](_0x158ea0))throw new Error(_0x2eb8fc['cLshz']);const _0x2e08ba={};_0x2e08ba[_0x4a129e(0x429,0x455,0x3f7,0x3f8)]=_0x2eb8fc[_0x373be7(-0x96,-0x50,-0x62,-0x32)],_0x2e08ba[_0x4a129e(0x40f,0x492,0x482,0x42e)]={},_0x2e08ba[_0x4a129e(0x40f,0x492,0x482,0x42e)]['User-Agent']=_0x2eb8fc[_0x4a129e(0x4fe,0x4f4,0x4ce,0x4b6)];const _0x4b7174=await fetch(_0x158ea0,_0x2e08ba),_0x470f4b=await _0x4b7174['text']();let _0x2f9733=_0x4b7174[_0x373be7(-0x9a,-0xad,-0xcc,-0xec)][_0x4a129e(0x463,0x41d,0x44e,0x41a)](_0x2eb8fc[_0x373be7(-0x98,-0x3b,0x5,-0x21)])['split'](',')[_0x4a129e(0x418,0x454,0x3e1,0x3f3)](_0x15567f=>cookie[_0x4a129e(0x4d3,0x4db,0x440,0x476)](_0x15567f))[_0x373be7(-0x39,-0x6f,-0xc8,-0xb3)]((_0x3d7a3b,_0x336319)=>{const _0x1c5454={..._0x3d7a3b,..._0x336319};return _0x1c5454;},{});_0x2f9733={'__cfduid':_0x2f9733[_0x4a129e(0x3d8,0x400,0x40e,0x409)],'PHPSESSID':_0x2f9733[_0x4a129e(0x445,0x3c4,0x452,0x41c)]},_0x2f9733=Object['entries'](_0x2f9733)[_0x373be7(-0xa2,-0xe8,-0x137,-0x142)](([_0x473ea8,_0x49fa07])=>cookie[_0x4a129e(0x461,0x490,0x499,0x447)](_0x473ea8,_0x49fa07))[_0x373be7(-0x54,-0x42,0x20,-0x3b)](';\x20');const _0x3fe1bb=cheerio[_0x4a129e(0x42e,0x3da,0x3f1,0x42d)](_0x470f4b),_0x2892b1=_0x2eb8fc[_0x373be7(-0x13f,-0xe6,-0xae,-0xab)](_0x3fe1bb,_0x2eb8fc[_0x4a129e(0x3de,0x3b8,0x3c4,0x412)])[_0x4a129e(0x47d,0x447,0x47d,0x452)](_0x373be7(-0x46,-0x33,-0x45,-0x3)),_0xe8da6c=new FormData();if(_0x2eb8fc[_0x4a129e(0x417,0x3bb,0x3c7,0x3fb)](typeof _0x45fb2c,_0x4a129e(0x4ae,0x467,0x488,0x4a2)))_0x45fb2c=[_0x45fb2c];for(let _0x5b8020 of _0x45fb2c)_0xe8da6c[_0x373be7(-0x84,-0xd6,-0x9a,-0x121)](_0x2eb8fc[_0x4a129e(0x4e6,0x4c3,0x4be,0x4ae)],_0x5b8020);_0xe8da6c[_0x4a129e(0x42b,0x408,0x45c,0x405)](_0x2eb8fc[_0x4a129e(0x46d,0x4b5,0x474,0x468)],'Go'),_0xe8da6c[_0x373be7(-0xf3,-0xd6,-0xdd,-0x9c)](_0x2eb8fc[_0x4a129e(0x3e7,0x425,0x3be,0x401)],_0x2892b1),_0xe8da6c[_0x373be7(-0x105,-0xd6,-0xfd,-0x125)](_0x2eb8fc[_0x4a129e(0x3a8,0x44d,0x3e5,0x406)],_0x373be7(-0x5c,-0x24,0x36,-0x71)+_0x4a129e(0x47b,0x470,0x4bf,0x483)),_0xe8da6c[_0x373be7(-0x136,-0xd6,-0xc4,-0x7d)](_0x2eb8fc[_0x373be7(-0xbc,-0xc0,-0x117,-0x11b)],-0x2e3+0xd*-0x19a+0x4be*0x5);const _0x261c20=await fetch(_0x158ea0,{'method':'POST','headers':{'Accept':_0x2eb8fc['aahnv'],'Accept-Language':_0x4a129e(0x491,0x49b,0x43b,0x44c)+_0x373be7(-0x1,-0x2a,-0x3,-0x83),'User-Agent':_0x2eb8fc[_0x373be7(-0x16,-0x25,-0x5d,-0x6a)],'Cookie':_0x2f9733,..._0xe8da6c[_0x373be7(-0x9e,-0xbc,-0xbb,-0xbb)]()},'body':_0xe8da6c[_0x4a129e(0x4b3,0x4b3,0x45e,0x48d)]()}),_0x2cd464=await _0x261c20[_0x4a129e(0x500,0x4ee,0x495,0x4a3)](),_0x3e933a=/<div.*?id="form_value".+>(.*?)<\/div>/['exec'](_0x2cd464);function _0x4a129e(_0x94dd9e,_0x439e7f,_0x444373,_0x341dd9){return _0x124992(_0x94dd9e-0x13a,_0x341dd9-0x59a,_0x444373,_0x341dd9-0x109);}if(!_0x3e933a)throw new Error(_0x2eb8fc[_0x4a129e(0x43e,0x4c3,0x4a1,0x492)]);const _0x3940f8=await _0x2eb8fc[_0x4a129e(0x3e9,0x41a,0x3f1,0x42f)](post,_0x373be7(-0x42,-0x24,-0x9,0x2d)+_0x373be7(-0x1f,-0x3f,-0x9f,-0xc)+'ffect/crea'+_0x373be7(-0xa6,-0x81,-0x90,-0x5a),JSON[_0x373be7(-0x40,-0x65,-0x5c,-0xf)](_0x3e933a[-0xd7*-0x17+0x4c7*-0x1+-0xe89]),_0x2f9733),_0x47852e=await _0x3940f8[_0x4a129e(0x458,0x3de,0x42c,0x437)]();return _0x373be7(-0x60,-0x24,-0x6d,0x28)+_0x4a129e(0x4a0,0x47a,0x4b4,0x483)+_0x47852e[_0x373be7(-0x82,-0x22,0x25,0x3c)+_0x373be7(-0x63,-0x8a,-0xa5,-0xd1)];}const ktedh=await reSize(ppnyauser,0xb1*-0x13+0x382*0xa+-0x1*0x1529,-0xbc5+0x29*-0xe9+0x31de);async function replyReg(_0xc030f5){const _0x575248={};_0x575248[_0x184d5(-0x19d,-0x184,-0x21b,-0x1bb)]='Created\x20By'+_0x184d5(-0x1e8,-0x180,-0x163,-0x195)+'d';const _0x22a0c9=_0x575248,_0x8d45dd={};_0x8d45dd['displayTex'+'t']=_0x184d5(-0x142,-0x1cd,-0x1e2,-0x199)+'ꫂ\x20',_0x8d45dd['id']=prefix+_0x184d5(-0x1ce,-0x20e,-0x18f,-0x1d8);const _0x54ae81={};_0x54ae81[_0x1c2988(0x497,0x471,0x48e,0x426)+_0x1c2988(0x47e,0x427,0x3f7,0x3f1)]=_0x8d45dd;function _0x184d5(_0x14497d,_0x254aff,_0x1e2966,_0x3b7e9d){return _0x196a77(_0x14497d-0x1f0,_0x3b7e9d- -0x634,_0x1e2966,_0x3b7e9d-0x1e2);}const _0x1e82e4=[_0x54ae81],_0x48502e={};_0x48502e[_0x184d5(-0x181,-0x1ca,-0x16a,-0x19c)]=ppnyauser;const _0x4eff8d={};_0x4eff8d['text']=_0xc030f5,_0x4eff8d[_0x1c2988(0x412,0x41a,0x43d,0x416)]=_0x22a0c9[_0x184d5(-0x197,-0x176,-0x1e6,-0x1bb)],_0x4eff8d[_0x184d5(-0x15b,-0x1a5,-0x1bd,-0x1aa)+'ttons']=_0x1e82e4,_0x4eff8d['image']=_0x48502e;const _0xb8ac4a=_0x4eff8d;function _0x1c2988(_0x417969,_0x27d64e,_0x29b46d,_0x46f414){return _0x196a77(_0x417969-0x19,_0x27d64e- -0x15,_0x29b46d,_0x46f414-0x19c);}return sock[_0x1c2988(0x457,0x3f5,0x413,0x3dc)+'e'](from,_0xb8ac4a);}

async function sendButRegis(from) {
var serialUser = createSerial(18)
_registered.push(sender)
fs.writeFileSync('./command/Database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
var button = [
{ quickReplyButton: { displayText: `Menu`, id: `${prefix}menu` } }
]
var anj = `「 *PENDAFTARAN USER* 」
*Terimakasih Sudah Mendaftarkan Diri Dalam Database FauzyBOT - MD*

*🌹 Nama :* ${pushname}
*🌹 API :* +${sender.split('@')[0]}
*🌹 Serial:* ${serialUser}
*🌹 Total:* ${_registered.length} Pengguna`
sock.sendMessage(from, { caption: anj, location: { jpegThumbnail: ktedh }, templateButtons: button, footer: `Creator Fauzy-XD ꪶ𖣂ꫂ`, mentions: [m.sender] })
.catch ((err) => reply(err))
}

const turbrek = `break`

switch (command) {
case 'menu': case 'help':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6285791677204@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
mbc = `Hai Kak @${sender.split("@")[0]} 
Saya FauzyBOT - MD Saya Disini Ingin Membantu Kalian Membuat Sticker Download Video/Lagu Youtube, Tiktok Dll.`
let buttoons = [
{buttonId: `${prefix}allmenu`, buttonText: {displayText: 'All Menu'}, type: 1}
]
let buttonMessaage = {
document: ktedh, 
fileName: `Bot By Fauzy-XD`, 
mimetype: `application/${bykir}`,
jpegThumbnail: ktedh,
caption: mbc,
fileLength: "999999999",
mentions:[sender, botzkir],
footer: `_Powered By @${botzkir.split("@")[0]}_`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender, botzkir],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ktedh,
"previewType": "VIDEO",
"mediaUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}
}
sock.sendMessage(m.chat, buttonMessaage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By Fauzy-XD',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
addCmd(command.slice(0), 1, commund)
break
case 'verify':{
if (isRegistered) return reply('Akun Kamu Sudah Terverfikasi!!!')
await sendButRegis(from)
}
addCmd(command.slice(0), 1, commund)
break
case 'igstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} Fauzy-XD`)
aj = await igstalk(`${q}`)
sock.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Stalking Instagram \\*

Fullname : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
addCmd(command.slice(0), 1, commund)
break
case 'ffstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} 946716486`)
eeh = await ffstalk(`${q}`)
reply(`*/ Stalking Freefire \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
addCmd(command.slice(0), 1, commund)
break
case 'ghstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} KirBotz`)
hw = await fetchJson(`https://api.github.com/users/${q}`)
sock.sendMessage(m.chat, { image: { url: hw.avatar_url }, caption: 
`*/ Stalking Github \\*

Name : ${hw.login}
Id : ${hw.id}
Node Id : ${hw.node_id}
Avatar Url : ${hw.avatar_url}
Gravatar Id : ${hw.gravatar_id}
Url : ${hw.url}
Url2 : ${hw.html_url}
Followers Url : ${hw.followers_url}
Following Url : ${hw.following_url}
Gists Url : ${hw.gists_url}
Starred Url : ${hw.starred_url}
Subscriptions Url : ${hw.subscriptions_url}
Organizations Url : ${hw.organizations_url}
Repos Url : ${hw.repos_url}
Events Url : ${hw.events_url}
Received Events Url : ${hw.received_events_url}
Type : ${hw.type}
Site Admin : ${hw.site_admin}
Name : ${hw.name}
Company : ${hw.company}
Blog : ${hw.blog}
Location : ${hw.location}
Email : ${hw.email}
Hireable : ${hw.hireable}
Bio : ${hw.bio}
Twitter Username : ${hw.twitter_username}
Public Repos : ${hw.public_repos}
Public Gists : ${hw.public_gists}
Followers : ${hw.followers}
Following : ${hw.following}
Created At : ${hw.created_at}
Updated At : ${hw.updated_at}` }, { quoted: m } )
}
addCmd(command.slice(0), 1, commund)
break
case 'npmstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} @adiwajshing/baileys`)
eha = await npmstalk(`${q}`)
reply(`*/ Stalking Npm \\*

Nama : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
addCmd(command.slice(0), 1, commund)
break
case 'setallmenu': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
let setbot = db.settings[botNumber]
if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLoc = false
reply(api.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLoc = false
reply(api.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
setbot.templateLoc = false
reply(api.success)
} else if (args[0] === 'templateMsg'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
setbot.templateLoc = false
reply(api.success)
} else if (args[0] === 'templateLoc'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLoc = true
reply(api.success)
} else {
let sections = [
{
title: "SELECT MENU BOT",
rows: [
{title: "Template Image", rowId: `setallmenu templateImage`, description: `Change Allmenu bot to Template Image`},
{title: "Template Video", rowId: `setallmenu templateVideo`, description: `Change Allmenu bot to Template Video`},
{title: "Template Gif", rowId: `setallmenu templateGif`, description: `Change Allmenu bot to Template Gif`},
{title: "Template Message", rowId: `setallmenu templateMsg`, description: `Change Allmenu bot to Template Message`},
{title: "Template Location", rowId: `setallmenu templateLoc`, description: `Change Allmenu bot to Template Location`}
]
},
]
sock.sendList(m.chat, `Pilih 1 Setallmenu Di Bawah`, `Creator Fauzy-XD`, `Hello Owner !!!`, `SELECT`, sections, troli)
}
}
addCmd(command.slice(0), 1, commund)
break
case 'allmenu':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
tod = await reSize(ppnyauser, 200, 200)
memegnu = `*Hai Kak* ${pushname}

Runtime : ${runtime(process.uptime())}
Speed : ${latensi.toFixed(4)} _Detik_
Jam : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
Tanggal : ${tanggal(new Date())}
Total : ${_registered.length} User

*/Owner*
☻ [ EXE ]
☻> [ EVAL ]
☻< [ EVAL2 ]
☻=> [ ASYNC ]
☻{prefix}public
☻{prefix}self
☻{prefix}out
☻{prefix}setppbot 'panjang'
☻{prefix}ban add 628××××××
☻{prefix}ban del 628××××××
☻{prefix}addowner 628×××××
☻{prefix}delowner 628×××××
☻{prefix}listban
☻{prefix}getcase
☻${prefix}bcall
☻{prefix}join
☻{prefix}creategc
☻{prefix}setallmenu
☻{prefix}bugfc
☻{prefix}sendbug 6282119078278
☻{prefix}bugpc 6282119078278|9|9s
☻{prefix}buggc 97455446178-1461236988@g.us|9|9s

*/Other*
☻{prefix}owner
☻{prefix}dashboard
☻{prefix}report
☻{prefix}sticker
☻{prefix}toimg
☻{prefix}quotesanime

*/Islami*
☻{prefix}asmaulhusna
☻{prefix}bacaanshalat
☻{prefix}niatsholat
☻{prefix}jadwalsholat
☻{prefix}listsurah
☻{prefix}kisahnabi

*/Stalker*
☻{prefix}ffstalk 946716486
☻{prefix}ghstalk FauziTioX
☻{prefix}igstalk fauzitio_91
☻{prefix}npmstalk @adiwajshing/baileys

*/Downloader*
☻{prefix}play
☻{prefix}ytmp4
☻{prefix}ytmp3
☻{prefix}tiktoknowm
☻{prefix}tiktokaudio

*/Group*
☻{prefix}listgc
☻{prefix}antilink on
☻{prefix}antilink off
☻{prefix}promote @628×××××
☻{prefix}demote @628××××××
☻{prefix}add 628×××××
☻{prefix}kick @628××××
☻{prefix}tagall teks
☻{prefix}hidetag teks

*/Video*
☻{prefix}hentai
☻{prefix}porno
☻{prefix}asupan
☻{prefix}bocil
☻{prefix}rikagusriani

*/Text Pro*
☻{prefix}candy teks
☻{prefix}christmas teks
☻{prefix}3dchristmas teks
☻{prefix}sparklechristmas teks
☻{prefix}deepsea teks
☻{prefix}scifi teks
☻{prefix}rainbow teks
☻{prefix}waterpipe teks
☻{prefix}spooky teks
☻{prefix}pencil teks
☻{prefix}circuit teks
☻{prefix}discovery teks
☻{prefix}metalic teks
☻{prefix}fiction teks
☻{prefix}demon teks
☻{prefix}transformer teks
☻{prefix}berry teks
☻{prefix}thunder teks
☻{prefix}magma teks
☻{prefix}3dstone teks
☻{prefix}neonlight teks
☻{prefix}glitch teks
☻{prefix}harrypotter teks
☻{prefix}brokenglass teks
☻{prefix}papercut teks
☻{prefix}watercolor teks
☻{prefix}multicolor teks
☻{prefix}neondevil teks
☻{prefix}underwater teks
☻{prefix}graffitibike teks
☻{prefix}snow teks
☻{prefix}cloud teks
☻{prefix}honey teks
☻{prefix}ice teks
☻{prefix}fruitjuice teks
☻{prefix}biscuit teks
☻{prefix}wood teks
☻{prefix}chocolate teks
☻{prefix}strawberry teks
☻{prefix}matrix teks
☻{prefix}blood teks
☻{prefix}dropwater teks
☻{prefix}toxic teks
☻{prefix}lava teks
☻{prefix}rock teks
☻{prefix}bloodglas teks
☻{prefix}hallowen teks
☻{prefix}darkgold teks
☻{prefix}joker teks
☻{prefix}wicker teks
☻{prefix}firework teks
☻{prefix}skeleton teks
☻{prefix}blackpink teks
☻{prefix}sand teks
☻{prefix}glue teks
☻{prefix}1917 teks
☻{prefix}leaves teks
☻{prefix}stoneeffect teks`
let btn = [{
urlButton: {
displayText: "Group Bot",
url: "https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/FLWmjhrhb3nCg1OmoAxQjC",
}
},
{ 
quickReplyButton: { 
displayText: `Owner`, 
id: `${prefix}owner` } },
{ 
quickReplyButton: { 
displayText: `Dashboard`, 
id: `${prefix}dashboard` } }
]
let setbot = db.settings[botNumber]
if (setbot.templateImage) {
sock.send5ButImg(m.chat, memegnu, `Creator Fauzy-XD`, ppnyauser, btn)
} else if (setbot.templateGif) {
sock.send5ButGif(m.chat, memegnu, `Creator Fauzy-XD`, tytyd, btn)
} else if (setbot.templateVideo) {
sock.send5ButVid(m.chat, memegnu, `Creator Fauzy-XD`, global.vidkir, btn)
} else if (setbot.templateMsg) {
sock.send5ButMsg(m.chat, memegnu, `Creator Fauzy-XD`, btn)
} else if (setbot.templateLoc) {
sock.send5ButLoc(m.chat, memegnu, `Creator Fauzy-XD`, tod, btn)
}
}
addCmd(command.slice(0), 1, commund)
break
case 'kisahnabi':{
if (!q) return reply(`Contoh ${prefix+command} adam`)
dsh = await fetchJson(`https://kirbotz-api.herokuapp.com/api/kisahnabi?nabi=${q}&apikey=${kirkey}`)
reply(`Nama : ${dsh.result.name}
Kelahiran : ${dsh.result.kelahiran}
Wafat Usia : ${dsh.result.wafat_usia}
Singgah : ${dsh.result.singgah}
Kisah :
${dsh.result.kisah}`)
}
break
case 'listsurah':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
mke = await listsurah()
reply(`*/ List Surah \\*

Author : ${mke.author}
ListSurah :
${mke.listsurah}`)
}
addCmd(command.slice(0), 1, commund)
break
case 'niatsholat':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} isya
List Nya
shubuh
dzuhur
ashar
magribh
isya`)
ysehh = await niatsholat(`${q}`)
reply(`Name : ${ysehh.name}
Arabic : ${ysehh.arabic}
Latin : ${ysehh.latin}
Terjemahan: ${ysehh.terjemahan}`)
addCmd(command.slice(0), 1, commund)
break
case 'asmaulhusna':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
yseh = await asmaulhusna()
reply(`Nomor : ${yseh.nomor}
Latin : ${yseh.latin}
Arabic : ${yseh.arabic}
Indonesia : ${yseh.id}
English : ${yseh.en}`)
addCmd(command.slice(0), 1, commund)
break
case 'jadwalsholat':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} Tasikmalaya`)
kfn = await jadwalsholat(`${q}`)
reply(`Kota : ${q}
Tanggal : ${kfn.tanggal}
Imsyak : ${kfn.imsyak}
Shubuh : ${kfn.subuh}
Dzuhur : ${kfn.dzuhur}
Ashar : ${kfn.ashar}
Magribh : ${kfn.maghrib}
Isya : ${kfn.isya}`)
}
addCmd(command.slice(0), 1, commund)
break
case 'bacaanshalat':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
dehe = await bacaanshalat()
reply(`Nomor : ${dehe.nomor}
Name : ${dehe.name}
Arabic : ${dehe.arabic}
Latin : ${dehe.latin}
Terjemahan : ${dehe.terjemahan}`)
addCmd(command.slice(0), 1, commund)
break
case 'addowner':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply(`Contoh ${prefix+command} 628×××××`)
bnnd = `${args[0].replace('@', '')}`
owner.push(bnnd)
fs.writeFileSync('./command/Database/owner.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
addCmd(command.slice(0), 1, commund)
break
case 'delowner':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply(`Contoh ${prefix+command} 628×××××`)
ya = `${args[0].replace('@', '')}`
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./command/Database/owner.json', JSON.stringify(owner))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
addCmd(command.slice(0), 1, commund)
break
case 'bcall': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!m.quoted) return reply("Reply pesan yang ingin di broadcast!")
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
quoted.copyNForward(yoi, true, {quoted:m})
}
reply('Sukses Broadcast')
}
break
case 'dashboard': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
var jumlahCmd = commund.length
if (jumlahCmd > 10) jumlahCmd = 10
teks = `*「 Total Hit Command 」*\nGlobal Hit : ${totalhit}\nToday Hit : ${hit_today.length}\n\n*Most Command Global*`
for (let i = 0; i < jumlahCmd ; i ++) {
teks += `\n » Command : ${commund[i].id}, ${commund[i].total} used`
}
reply(teks) 
}
addCmd(command.slice(0), 1, commund)
break
case 'report': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!args.join(" ")) return reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
sock.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
addCmd(command.slice(0), 1, commund)
break
case 'bugpc': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
sock.sendMessage(num, { text: 'Oii kimoyasaaa' }, { quoted: lep})
await sleep(ms(waktu))
}
tek = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tek)
}
addCmd(command.slice(0), 1, commund)
break
case 'buggc': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
sock.sendMessage(num, { text: 'Oii kimoyasaaa' }, { quoted: lep})
await sleep(ms(waktu))
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tekteka)
}
addCmd(command.slice(0), 1, commund)
break
case 'sendbug':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!q) return reply(`Contoh\n${prefix+command} 628×××××`)
let nonye = [`${q}`]
teks = `*Hai Anak Kontol*`
teks1 = `\nLagi Apa Dek`
for (let i of nonye) {
sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:lep})
}
sock.sendMessage(m.chat, {text: `Sukses`, mentions:[m.sender]}, {quoted:m})
}
addCmd(command.slice(0), 1, commund)
break
case 'bugfc':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!m.isGroup) return reply(api.group)
ydd = `Jiahkkkkk`
sock.sendMessage(from, {text:ydd},{quoted: { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Kok Fc Bang`, 
"jpegThumbnail": ppnyauser
}
}
}})
addCmd(command.slice(0), 1, commund)
break
case 'owner': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
sock.sendContact(m.chat, owner, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves':
case 'stoneeffect': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Example : ${prefix + command} KirBotz`) 
reply(api.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
if (/stoneeffect/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
let anu = await textpro(link, q)
sock.sendMessage(m.chat, { image: { url: anu }, caption: `${api.success}` }, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
addCmd(command.slice(0), 1, commund)
break
case 'toimage': case 'toimg': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.quoted) return reply('Reply Sticker')
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix + command}*`)
reply(api.wait)
let media = await sock.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
sock.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
addCmd(command.slice(0), 1, commund)
break
case 'creategc': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args.join(" ")) return reply(`Penggunaan ${prefix+command} namagroup`)
try {
let cret = await sock.groupCreate(args.join(" "), [])
let response = await sock.groupInviteCode(cret.id)
teks = `     「 Group Create Fitur 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
       `
sock.sendMessage(m.chat, { text:teks, mentions: await sock.parseMention(teks)}, {quoted:m})
} catch {
reply("Error!")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'setppbot': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await sock.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await sock.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var memeg = await sock.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
addCmd(command.slice(0), 1, commund)
break
case 'getcase': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply("Mau ngambil case apa?")
try {
reply(`// Created By KirBotz\n` + 'case ' + `'${args[0]}'` + fs.readFileSync('./command/md.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
reply("Case Tidak Ditemukan")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'join': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!text) return reply(`Link Nya Mana Kak?`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
reply(api.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await sock.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'out':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
sock.groupLeave(from)
}
addCmd(command.slice(0), 1, commund)
break
case 'public': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
sock.public = true
reply('Sukses Kak')
}
addCmd(command.slice(0), 1, commund)
break
case 'self': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
sock.public = false
reply('Sukses Kak')
}
addCmd(command.slice(0), 1, commund)
break
case 'ban': case 'block': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply(`Pilih add atau del`)
orgnye = m.mentionedJid[0] ? m.mentionedJid[0] : Number(args[1]) ? Number(args[1]) + "@s.whatsapp.net" : m.quoted ? m.quoted.sender : false
if (!orgnye) return reply(`Example : \n- ${prefix + command} del/add <number/tag/reply>\n- ${prefix + command} del 6281385062956`)
const isBane = banUser ? banUser.includes(orgnye) : false
if (args[0] === "add") {
if (isBane) return reply('User sudah dibanned')
sock.updateBlockStatus(orgnye, 'block')
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('User tidak dibanned')
sock.updateBlockStatus(orgnye, 'unblock')
reply(`Succes delban`)
} else {
reply("Error")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
try {
listBloxk = []
teskd = ``
listnyd = 1
for (let i of banUser) {
teskd += `\n${listnyd++}. @${i.split("@")[0]}`
listBloxk.push({
title: "+" + i.split("@")[0], rowId: `block del ${i.split("@")[0]}`, description: "ketuk untuk mengunblockir"})
}
teskd += `\n\nketuk button untuk mengunblockir`
const sections = [
{
title: "Total Blockir " + banUser.length,
rows: listBloxk
}
]

const listMessage = {
text: teskd,
footer: "_Creator Fauzy-XD_",
title: "     「 List Participants Blockir 」",
buttonText: "List Blockir",
mentions: await sock.parseMention(teskd),
sections
}
sock.sendMessage(from, listMessage, {quoted:m})
} catch {
reply("Tidak ada user yang diblockir")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'add': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'kick': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'promote': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'demote': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'antionce': case 'antiviewonce':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
if (args[0] === "on") {
if (global.db.chats[m.chat].antionce) return reply(`Sudah Aktif Sebelumnya`)
global.db.chats[m.chat].antionce = true
reply(`${command} Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.chats[m.chat].antionce) return reply(`Sudah Nonaktif Sebelumnya`)
global.db.chats[m.chat].antionce = false
reply(`${command} Berhasil Di Nonaktifkan !`)
} else {
let buttonns = [
{ buttonId: '.antionce on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antionce off', buttonText: { displayText: 'Off' }, type: 1 }
]
await sock.sendButtonText(m.chat, buttonns, `Mode Antionce`, `_Creator Akira_`, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'antilink':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
if (args[0] === "on") {
if (global.db.chats[m.chat].antilink) return reply('Sudah Aktif Sebelumnya')
global.db.chats[m.chat].antilink = true
reply(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.chats[m.chat].antilink) return reply('Sudah Nonaktif Sebelumnya')
global.db.chats[m.chat].antilink = false
reply(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons = [
{ buttonId: '.antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await sock.sendButtonText(m.chat, buttons, `Mode Antilink`, `_Creator Akira_`, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'tagall': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!q) return reply(`Teks?`)
let teks = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
sock.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'hidetag': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) return reply(api.botAdmin)
if (!q) return reply(`Teks?`)
sock.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'listgc': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
let metadata = await sock.groupMetadata(i)
if (metadata.owner === "undefined") {
loldd = false
} else {
loldd = metadata.owner
}
teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
sock.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'play':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!text) return reply(`Example : ${prefix + command} story wa anime`)
reply(api.wait)
let yts = require("yt-search")
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = '6285791677204'
ngen = `
🕵️ Title : ${anu.title}
🥀 Ext : Search
🍁 ID : ${anu.videoId}
👀 Viewers : ${anu.views}
💌 Upload At : ${anu.ago}
🗣️ Author : ${anu.author.name}
🧑‍ Channel : ${anu.author.url}`
let buttonse = [
{buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: `Video`}, type: 1},
{buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessages = {
image: eek, 
jpegThumbnail: eek,
caption: ngen,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttonse,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}
}
sock.sendMessage(m.chat, buttonMessages, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By Fauzy-XD',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
addCmd(command.slice(0), 1, commund)
break
case 'ytmp4': case 'ytvideo': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
let { ytv } = require('./command/Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
sock.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP4\n✇ Resolusi : ${args[1] || '360p'}`, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'ytmp3': case 'ytaudio': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
let { yta } = require('./command/Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
sock.sendImage(m.chat, media.thumb, `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP3\n✇ Resolusi : ${args[1] || '128kbps'}`, m)
sock.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt:true, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'tiktok': case 'tiktoknowm':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
reply(api.wait)
owned = '6285791677204'
mbc = `Nih Kak @${sender.split("@")[0]} `
let buttons = [
{buttonId: `${prefix}tiktokaudio ${q}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonMessage = {
video: krt, 
jpegThumbnail: tytyd,
caption: mbc,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}
}
sock.sendMessage(m.chat, buttonMessage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By Fauzy-XD',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
addCmd(command.slice(0), 1, commund)
break
case 'tiktokaudio':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dedet = await cl.downloader.tiktok(`${q}`)
krt = (dedet.audio)
reply(`Nih Kak Downlod Sendiri
${krt}`)
addCmd(command.slice(0), 1, commund)
break
case 'quotesanime': case 'quoteanime': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
anuds = await quotesanime()
result = anuds[Math.floor(Math.random(), anuds.length)]
let buttons = [
{buttonId: `${prefix}quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footerText: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'hentai': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
reply(api.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
sock.sendMessage(m.chat, { video: { url: cejd.video_1 }, caption: `⭔ Title : ${cejd.title}\n⭔ Category : ${cejd.category}\n⭔ Mimetype : ${cejd.type}\n⭔ Views : ${cejd.views_count}\n⭔ Shares : ${cejd.share_count}\n⭔ Source : ${cejd.link}\n⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
case 'porno': case 'porn': case 'bokep': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
reply(api.wait)
dhehd = await porno()
sock.sendMessage(m.chat, { video: { url: 'https://tikporntok.com/'+dhehd.video }, caption: `⭔ Title : ${dhehd.title}\n⭔ Viewers : ${dhehd.views}\n⭔ Tags : ${dhehd.tags}\n⭔ Likes : ${dhehd.like}\n⭔ Dislikes : ${dhehd.dislike}\n⭔ Favourite : ${dhehd.favorite}\n⭔ Time Upload : ${dhehd.upload}\n⭔ Description : ${dhehd.desc}\n⭔ Source : ${anu.source}\n⭔ Url Video : https://tikporntok.com/${dhehd.video}` }, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'asupan': case 'bocil': case 'rikagusriani':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
reply(api.wait)
fdy = await fetchJson(`https://kirbotz-api.herokuapp.com/api/random/asupan/${command}?apikey=${kirkey}`)
kirbotz.sendMessage(from, { video : { url: fdy.result.url }}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
default:
}

if (budy.startsWith('=>')) {
if (!isCreator) return reply(api.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return reply(api.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('<')) {
if (!isCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$')){
if (!isCreator) return reply(api.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (m.mtype == 'viewOnceMessage') {
if (!global.db.chats[m.chat].antionce) return
teks = `「 *Anti ViewOnce Message* 」

⭔ Nama : ${m.pushName}
⭔ User : @${m.sender.split("@")[0]}
⭔ Clock : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
⭔ Date : ${tanggal(new Date())}
⭔ MessageType : ${m.mtype}`

sock.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply('Mungkin dah pernah dibuka bot'))
}

} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

process.on('uncaughtException', console.error);
