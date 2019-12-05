// Bot developed by Babalon921 created for Nuclear NIX Ω#9999
// To change prefix and token goto the config.json file and change it!
// Discord Needs
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const config = require('./config.json');
const fs = require("fs");
let xp = require("./module/store/xp.json")


//SPAM
let cooldown = new Set();
let cdsec = config.cdsec;
//CONFIG
const prefix = config.prefix
const status = config.status
bot.commands = new Discord.Collection();

var exit;



//Reads commands!
var _0x53a7=['c2V0','aGVscA==','bmFtZQ==','bG9n','ZmlsdGVy','c3BsaXQ=','RXJyb3IgSW4gZmluZGluZyBDb21tYW5kcw==','Zm9yRWFjaA==','Li9jb21tYW5kcy8=','IGxvYWRlZCBzdWNjZXNzZnVsbHk=','Y29tbWFuZHM='];(function(_0x5870a1,_0xfcf8d1){var _0x3350ec=function(_0x19653a){while(--_0x19653a){_0x5870a1['push'](_0x5870a1['shift']());}};_0x3350ec(++_0xfcf8d1);}(_0x53a7,0x19a));var _0x1410=function(_0x18b355,_0x3f906e){_0x18b355=_0x18b355-0x0;var _0x230065=_0x53a7[_0x18b355];if(_0x1410['GICksL']===undefined){(function(){var _0x458523;try{var _0x4fd2a9=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x458523=_0x4fd2a9();}catch(_0x5abf59){_0x458523=window;}var _0x160135='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x458523['atob']||(_0x458523['atob']=function(_0x10e3f0){var _0x390531=String(_0x10e3f0)['replace'](/=+$/,'');for(var _0xe49b34=0x0,_0x38fee,_0x591228,_0x598c04=0x0,_0x4b139f='';_0x591228=_0x390531['charAt'](_0x598c04++);~_0x591228&&(_0x38fee=_0xe49b34%0x4?_0x38fee*0x40+_0x591228:_0x591228,_0xe49b34++%0x4)?_0x4b139f+=String['fromCharCode'](0xff&_0x38fee>>(-0x2*_0xe49b34&0x6)):0x0){_0x591228=_0x160135['indexOf'](_0x591228);}return _0x4b139f;});}());_0x1410['WPXggc']=function(_0x47acc8){var _0x23a116=atob(_0x47acc8);var _0xc2c74=[];for(var _0x3b5e55=0x0,_0x1b3eca=_0x23a116['length'];_0x3b5e55<_0x1b3eca;_0x3b5e55++){_0xc2c74+='%'+('00'+_0x23a116['charCodeAt'](_0x3b5e55)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xc2c74);};_0x1410['BfxEoU']={};_0x1410['GICksL']=!![];}var _0x2afdc4=_0x1410['BfxEoU'][_0x18b355];if(_0x2afdc4===undefined){_0x230065=_0x1410['WPXggc'](_0x230065);_0x1410['BfxEoU'][_0x18b355]=_0x230065;}else{_0x230065=_0x2afdc4;}return _0x230065;};fs['readdir']('./commands/',(_0x4d17fe,_0xa414e7)=>{if(_0x4d17fe)console[_0x1410('0x0')](_0x4d17fe);let _0x28c0a5=_0xa414e7[_0x1410('0x1')](_0x588827=>_0x588827[_0x1410('0x2')]('.')['pop']()==='js');if(_0x28c0a5['legth']<=0x0){console[_0x1410('0x0')](_0x1410('0x3'));return;}_0x28c0a5[_0x1410('0x4')]((_0x2bde83,_0x23dcb6)=>{let _0x15520d=require(_0x1410('0x5')+_0x2bde83);console['log'](_0x2bde83+_0x1410('0x6'));bot[_0x1410('0x7')][_0x1410('0x8')](_0x15520d[_0x1410('0x9')][_0x1410('0xa')],_0x15520d);});});
// Welcome message for the user that joins!
bot.on("guildMemberAdd", member => {
    let channel = member.guild.channels.find(channel => channel.name === "the-gatekeepers-logger");
    if(!channel) return;
    var msgchannel = new Discord.RichEmbed()
    .setTitle(`Welcome to our server, @${member.user.tag}, please read the rules!`)
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
    channel.send(msgchannel);

});

// When bots ready change the presence to playing ????? & log its online
var _0x2254=['c2V0U3RhdHVz','c2V0UHJlc2VuY2U=','bG9n','Qm90IGlzIG9ubGluZSE=','Qm90IENvZGVkIGJ5IGJhYmFsb245MjE=','dXNlcg=='];(function(_0x12c270,_0x3c990c){var _0x4a5e6c=function(_0xf03ae1){while(--_0xf03ae1){_0x12c270['push'](_0x12c270['shift']());}};_0x4a5e6c(++_0x3c990c);}(_0x2254,0x1dc));var _0x1079=function(_0x2d6304,_0x403698){_0x2d6304=_0x2d6304-0x0;var _0x5dc807=_0x2254[_0x2d6304];if(_0x1079['aEaroF']===undefined){(function(){var _0x1045d2;try{var _0x1fe3bc=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1045d2=_0x1fe3bc();}catch(_0x5572f0){_0x1045d2=window;}var _0x16b1d6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1045d2['atob']||(_0x1045d2['atob']=function(_0x3f6e9b){var _0x4572eb=String(_0x3f6e9b)['replace'](/=+$/,'');for(var _0x36ef29=0x0,_0x57357a,_0x457157,_0x230ac2=0x0,_0x29dfa3='';_0x457157=_0x4572eb['charAt'](_0x230ac2++);~_0x457157&&(_0x57357a=_0x36ef29%0x4?_0x57357a*0x40+_0x457157:_0x457157,_0x36ef29++%0x4)?_0x29dfa3+=String['fromCharCode'](0xff&_0x57357a>>(-0x2*_0x36ef29&0x6)):0x0){_0x457157=_0x16b1d6['indexOf'](_0x457157);}return _0x29dfa3;});}());_0x1079['WybmpE']=function(_0x4cf65a){var _0x3fe997=atob(_0x4cf65a);var _0x47f401=[];for(var _0x49c8d1=0x0,_0x29bc0c=_0x3fe997['length'];_0x49c8d1<_0x29bc0c;_0x49c8d1++){_0x47f401+='%'+('00'+_0x3fe997['charCodeAt'](_0x49c8d1)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x47f401);};_0x1079['TTbHci']={};_0x1079['aEaroF']=!![];}var _0x38975c=_0x1079['TTbHci'][_0x2d6304];if(_0x38975c===undefined){_0x5dc807=_0x1079['WybmpE'](_0x5dc807);_0x1079['TTbHci'][_0x2d6304]=_0x5dc807;}else{_0x5dc807=_0x38975c;}return _0x5dc807;};bot['on']('ready',()=>{console[_0x1079('0x0')]('\x20');console[_0x1079('0x0')]('\x20');console[_0x1079('0x0')](_0x1079('0x1'));console[_0x1079('0x0')](_0x1079('0x2'));bot[_0x1079('0x3')][_0x1079('0x4')]('available');bot[_0x1079('0x3')][_0x1079('0x5')]({'game':{'name':status,'type':'PLAYING'}});});
// Take in input and dish out the var's to the commandsfile going through the xp system first
bot.on("message",  msg =>{
//xp
    if(msg.author.bot)return;
    let xpAdd = Math.floor(Math.random() * 7)+ 8;
    console.log(xpAdd);

    if(!xp[msg.author.id]){
    xp[msg.author.id]={
        xp: 3000,
        level: 10
    };
}

let curxp = xp[msg.author.id].xp;
let curLvl = xp[msg.author.id].level;
let nxtLvl = xp[msg.author.id].level * 400;
xp[msg.author.id].xp = curxp + xpAdd;
if(nxtLvl <= xp[msg.author.id].xp){
    xp[msg.author.id].level = curLvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle(`You're getting smarter ${msg.member.user.tag} you just leveled up to ${xp[msg.author.id].level}!`)
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
    msg.channel.send(lvlup).then(msg => msg.delete(60000));

    //Custome lvl message!
    if(xp[msg.author.id].level == "25"){
        let thetarole = msg.guild.roles.find(r => r.name === "Theta Clearance");
        const guildMember = msg.member;
        guildMember.addRole(thetarole);
        var thetamsg = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/581163481424986112/612403107586113616/lightblue.gif")
        .setTitle("You Have been granted THETA Clearance!")
        .setDescription("As you get smarter, The PKT will deem you more trustworthy for more and more sealed data. After all Knowledge is Power. You have been cleared for the theta clearance level! You can now access the basics of the Codex!")
        .setColor("#0295ca")
        .setTimestamp()
        .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
        msg.channel.send(thetamsg).then(msg => msg.delete(60000));
    }
    else if(xp[msg.author.id].level == "50"){
        let greyrole = msg.guild.roles.find(r => r.name === "Grey Clearance");
        const guildMember = msg.member;
        if(msg.member.roles.find(r => r.name === "Theta Clearance")){
        guildMember.addRole(greyrole);
        var greymsg = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/548681901418741762/636338793611264011/JPEG_20190708_0246333.jpg")
        .setTitle("You Have been Granted Grey Clearance!")
        .setDescription("Seems you have gained clearance for level Grey. I hope Black doesn't protest this.")
        .setColor("#ff0000")
        .setTimestamp()
        .setFooter('FELT INC', 'https://cdn.discordapp.com/attachments/548681901418741762/636338793611264011/JPEG_20190708_0246333.jpg');
        msg.channel.send(greymsg).then(msg => msg.delete(60000));
      }
      else{
      guildmember.addRole(thetarole);
      guildmember.addRole(greyrole);
      msg.channel.send(greymsg).then(msg => msg.delete(60000));
    };
  }
    else if(xp[msg.author.id].level == "75"){
        let deltarole = msg.guild.roles.find(r => r.name === "Delta Clearance");
        const guildMember = msg.member;
        guildMember.addRole(deltarole);
        var deltamsg = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/612220678896091146/612404282695876633/skyblue.gif")
        .setTitle("You Have been Granted DELTA Clearance!")
        .setDescription("You seem to be gaining more trust among the PKT, You have been cleared for the Delta security clearance level.")
        .setColor("#0295ca")
        .setTimestamp()
        .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
        msg.channel.send(deltamsg).then(msg => msg.delete(60000));
    }
    else if(xp[msg.author.id].level == "100"){
        let greenrole = msg.guild.roles.find(r => r.name === "Green Clearance");
        const guildMember = msg.member;
        guildMember.addRole(greenrole);
        var greenmsg = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/458417860058939403/636395469085474836/giphy.gif")
        .setTitle("You have been cleared for Green clearance!")
        .setDescription("Seems you have been cleared for green clearance codes. Please watch for the lotus and serpents.")
        .setColor("#0295ca")
        .setTimestamp()
        .setFooter('Magis of Teldrassil', 'https://cdn.discordapp.com/attachments/548681901418741762/635503424175079444/300px-Teldrassilmovie.png');
        msg.channel.send(greenmsg).then(msg => msg.delete(60000));
    }
    else if(xp[msg.author.id].level == "150"){
        let omegarole = msg.guild.roles.find(r => r.name === "Omega Clearance");
        const guildMember = msg.member;
        guildMember.addRole(omegarole);
        var omegamsg = new Discord.RichEmbed()
        .setThumbnail("https://i.pinimg.com/originals/bc/ea/c8/bceac8633ddcfada2291229ec1c6fcc7.gif")
        .setTitle("You Have been Granted OMEGA Clearance!")
        .setDescription("It is rare we grant a clearance this high to a corporeal. It shows just how special you are in the grand scheme of things. That being said there are things hidden in the omega clearance files that may be beyond your comprehension as of yet. You need to learn creation's tongue to decipher to deepest of creation's secrets.")
        .setColor("#0295ca")
        .setTimestamp()
        .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
        msg.channel.send(omegamsg).then(msg.delete(60000));
    }
    else if(xp[msg.author.id].level == "400"){
        let bluerole = msg.guild.roles.find(r => r.name === "Blue Clearance");
        const guildMember = msg.member;
        guildMember.addRole(bluerole);
        var bluemsg = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/458417860058939403/636395037017767956/giphy.gif")
        .setTitle("SEST Clearance granted")
        .setDescription("Seems you have been granted Blue clearance codes. Hope Jhay doesn't mind.")
        .setColor("#00eeff")
        .setTimestamp()
        .setFooter('SEST systems', 'https://cdn.discordapp.com/attachments/627184653916176403/628781636078665763/latest.png');
        msg.channel.send(bluemsg).then(msg => msg.delete(60000));
    }
    else if(xp[msg.author.id].level == "800"){
        let whiterole = msg.guild.roles.find(r => r.name === "White Clearance");
        const guildMember = msg.member;
        guildMember.addRole(bluerole);
        var bluemsg = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/458417860058939403/636397303590027265/Swirl.gif")
        .setTitle("CGT Clearance granted")
        .setDescription("Seems you have been granted White clearance codes. Hope James doesn't mind.")
        .setColor("#FDFDFD")
        .setTimestamp()
        .setFooter('CGT Intranet', 'https://cdn.discordapp.com/attachments/458417860058939403/636389138899402783/CGT.png');
        msg.channel.send(bluemsg).then(msg => msg.delete(60000));
    }

    else if(xp[msg.author.id].level == "1000"){
        let orginrole = msg.guild.roles.find(r => r.name === "Origin Clearance");
        const guildMember = msg.member;
        guildMember.addRole(orginrole);
        var orginmsg = new Discord.RichEmbed()
        .setThumbnail("https://media2.giphy.com/media/e5rHVwosWkEbS/giphy.gif")
        .setTitle("Security Protocol Breached!!!")
        .setDescription("RWZtZ20gY2V4YXV1ZHkgY21nZ25jcnggZm1xYXh0YnIhIE5ybWxseSBVbHRudW5lY3QgcWdycSBidHVybCBkcnZ5dnNxcmZraSBnbiBVYndyaWluIGNrdWVubmJrcQoK VGhpcyBpcyBhIGNsYXNzIEEgYnJlYWNoLCBhY3RpdmF0aW5nIFByb3RvY29sIE9NRUdBIE9SSUdJTiBpbiB0IG1pbnVzIDE1IHNlY29uZHMg")
        .setColor("#0295ca")
        .setTimestamp()
        .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
        msg.channel.send(orginmsg).then(msg => msg.delete(60000));
    }

    }
    fs.writeFile("./module/store/xp.json",JSON.stringify(xp), (err)=>{
        if(err) console.log(err)

});
    console.log(`level is ${xp[msg.author.id].level}`);
//Continue
    if(!msg.content.startsWith(prefix))return;
    if(cooldown.has(msg.author.id)){
        msg.delete();
        msg.reply("Please wait 1 seconds between commands!");
        return;

    }
    if(!msg.member.hasPermission("ADMINISTRATOR")){
        cooldown.add(msg.author.id);
    }

    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;

    let msgarray = msg.content.split(/ +/);
    let cmd = msgarray[0];
    let args = msgarray.slice(1);

    let commandsfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandsfile) commandsfile.run(bot,msg,args);

    setTimeout(()=>{
        cooldown.delete(msg.author.id)
    },cdsec * 1000)

});
//Token!
bot.login(config.token)
