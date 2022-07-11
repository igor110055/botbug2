const { modul } = require('../Edit/module');
const { chalk, fs, proces } = modul;

global.ownerNumber = ["6285791677204@s.whatsapp.net"]
global.namabotnya = 'FauzyBOT - MD'
global.namaownernya = 'FαυȥყRêålz`𐁘'
global.packname = '\n\n\n\n\n\n\n\n\n\n© FαυȥყRêålz`𐁘||+62🇲🇨\nI`m From Indonesia\n\n\n\n\n\n\n\n\n\n'
global.author = '\n\n\n\n\n\n\n\n\n\nWa : 0857-9167-7204\nYT : FαυȥყRêålz`𐁘\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'session'
global.lolkey = 'Atakbotz'
global.dapkey = 'Kirbotz123'
global.kirkey = 'KirBotz'
global.email = 'bnialida@gmail.com'
global.group = 'https://chat.whatsapp.com/FRAGlSbHZul5n3gBHjdz8g'
global.youtube = 'https://youtube.com/channel/UCFnVU49rj4ld8V7eFoCk-Gw'
global.website = 'https://www.instagram.com/fauzitio_91/'
global.github = 'https://github.com/FauziTioX'
global.noown = 'https://wa.me/6285791677204'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.api = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '```Waittt...```',
    ban: '_Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya_',
    verif: '_Maaf Kak Kakak Belum Jadi User FauzyBOTZ - MD Silahkan Register Terlebih Dahulu Click Di Bawah_'
}

global.thumb = fs.readFileSync('./command/Image/thumb.jpg')
global.vidkir = { url: 'https://i.top4top.io/m_20346wtuk5.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
proces.on('uncaughtException', console.error);