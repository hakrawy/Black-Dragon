const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['966596680057'] //ur owner number
global.ownername = "ALI DOHAL" //ur owner name
global.ytname = "YT: MCE6R" //ur yt chanel name
global.socialm = "GitHub: hakrawy" //ur github or insta name
global.location = "Sri Lanka, Colombo, Saudi Arabia, Kiribathgoda" //ur location

//bot bomdy 
global.ownernomer = "966596680057" //ur number
global.premium = ['966596680057'] //ur premium number
global.botname = 'bot ali' //ur bot name
global.linkz = "https://chat.whatsapp.com/JOIx8UQPQOMBN8o9WOb8UF" //your theme url which will be displayed on whatsapp
global.websitex = "https://www.helacloud.ga" //ur website to be displayed
global.botscript = 'https://github.com/hakrawy/Black-Dragon' //script link
global.themeemoji = "❤️" //ur theme emoji
global.packname = "Sticker By ALI DOHAL" //ur sticker watermark packname
global.author = "ALI DOHAL" //ur sticker watermark author
global.wm = "ALI DOHAL" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'ها أنت ذا!',
    admin: 'يمكن استخدام هذه الميزة من قبل المسؤولين فقط!',
    botAdmin: 'يجب أن يكون البوت مسؤولاً أولاً!',
    premime: 'ميزات خاصة متميزة إذا كنت ترغب في تسجيل نوع الإيجار',
    owner: 'يمكن استخدام هذه الميزة من قبل المالك فقط',
    group: 'الميزات المستخدمة فقط للمجموعات!',
    private: 'الميزات المستخدمة فقط للدردشة الخاصة!',
    bot: 'يمكن استخدام هذه الميزة بواسطة الروبوت فقط',
    wait: 'تحت المعالجة...',
    linkm: 'أين الرابط؟',
    endLimit: 'انتهت صلاحية الحد اليومي الخاص بك ، وسيتم إعادة تعيين الحد كل 12 ساعة',
    nsfw: 'لم يتم تنشيط ميزة nsfw ، يرجى الاتصال بالمسؤول للتفعيل',
}

//media target
global.thum = fs.readFileSync("./DragonMedia/theme/cheemspic.png") //ur thumb pic
global.log0 = fs.readFileSync("./DragonMedia/theme/cheemspic.png") //ur logo pic
global.err4r = fs.readFileSync("./DragonMedia/theme/cheemspic.png") //ur error pic
global.thumb = fs.readFileSync("./DragonMedia/theme/cheemspic.png") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
