const Discord = require("discord.js");
let xp = require("../module/store/xp.json")

module.exports.run = (bot,msg,args)=>{

    if(!xp[msg.author.id]){
        xp[msg.author.id]={
            xp: 0,
            level: 1
        
        };
    }
    let curxp = xp[msg.author.id].xp;
    let curlvl = xp[msg.author.id].level;
    let nxtLvlXp = curlvl * 400;
    let diffrence = nxtLvlXp - curxp;
    
    var lvlembed = new Discord.RichEmbed()
    .setTitle("Your stat's!")
    .setColor("#0295ca")
    .addField("Level", curlvl,true)
    .addField("XP",curxp,true)
    .addField("Until Lvl Up!",`${diffrence}`,true)
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
    msg.channel.send(lvlembed);

}

module.exports.help={
    name:"level"
}
