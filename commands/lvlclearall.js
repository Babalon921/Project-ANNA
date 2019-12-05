const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = (bot,msg,args)=>{
    if(!msg.member.hasPermission("ADMINISTRATOR")){

    var nocando = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions")
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
    msg.channel.send(nocando)
    return;
    }

    fs.truncate('./module/store/xp.json', 0, function(){console.log('Somebody Cleared The Lvls!')})
    var content = "{}"
    fs.writeFile('./module/store/xp.json', content, (err) => {
        
        if (err) throw err;
    
        
        console.log('Data Saved!');
        var clearall = new Discord.RichEmbed()
        .setTitle(":shield: Cleared All The Levels! :shield: ")
        .setColor("#0295ca")
        .setTimestamp()
        .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
    msg.channel.send(clearall)
    return;
    });

    
};

module.exports.help={
    name:"lvlclearall"
}
