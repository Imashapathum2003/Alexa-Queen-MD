//═════════════════════════════//
//
//             ALEXA QUEEN V6.0.2                 
// 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94778639556'] //Owner Number in alive msg
global.premium = ['94778639556'] //Owner Number in info
global.ownernomer = '94778639556' // Owner Number <<<
global.ownername = '👩‍💻LAKIYA MD👩‍💻' //Owner Name
global.botname = '🧚‍♂️PATHUM MD🧚‍♂️' //Bot Name
global.footer = '©-𝗣𝗔𝗧𝗛𝗨𝗠 𝗠𝗗.' //In List Menu
global.ig = 'https://github.com/Imashapathum2003'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/Imashapathum2003/Alexa-Queen-MD'
global.myweb = 'https://youtube.com/channel/UCgW7PiHeyTmt-CZmZsRyOPg'
global.packname = '🧚‍♂️𝗣𝗔𝗧𝗛𝗨𝗠 𝗠𝗗🧚‍♂️' //Bot Pacage Name
global.author = '👩‍💻PATHUM MD👩‍💻' //Author Name
global.sessionName = 'session' //Session Name!
global.prefa = ['','!','.','👩‍💻','🐰','❤️'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sp = '⭔' //A Charactor
global.mess = {// CUSTOMIZE WITH YOUR LANGUAGE
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Want To Be Admin😭',
    owner: 'This Feature Is Only For Owner!😏',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat🤕!',
    bot: 'This Feature Is Only For Bot🥴',
    wait: '👉👈Please Wait...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
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
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
