const { modul } = require('../Edit/module');
const { chalk, fs, proces } = modul;

global.ownerNumber = ["62881036690566@s.whatsapp.net"]
global.namabotnya = 'BloodSword'
global.namaownernya = 'BloodSword'
global.packname = '\n\n\n\n\n\n\n\n\n\n© BloodSword||+62🇲🇨\nI`m From Indonesia\n\n\n\n\n\n\n\n\n\n'
global.author = '\n\n\n\n\n\n\n\n\n\nWa : 0881-0366-90566\nIG : demo_ngki\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'kirbotz'
global.lolkey = 'Atakbotz'
global.dapkey = 'Kirbotz123'
global.kirkey = 'KirBotz'
global.email = 'xnxx@gmail.com'
global.group = 'https://bit.ly/kepoanjing'
global.youtube = 'https://bit.ly/kepoanjing'
global.website = 'https://bit.ly/kepoanjing'
global.github = 'https://bit.ly/kepoanjing'
global.noown = 'https://wa.me/62881036690566'
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
    verif: '_Maaf Kak Kakak Belum Jadi User BloodSword Silahkan Register Terlebih Dahulu Click Di Bawah_'
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