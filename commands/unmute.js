const Discord = require("discord.js");

module.exports.run = (bot,msg,args)=>{
    var nomen = new Discord.RichEmbed()
    .setTitle("You Didnt Give A User To Unmute")
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');

    var nocando = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions")
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');

    
    if(!msg.member.hasPermission("MANAGE_ROLES") || !msg.guild.owner) return msg.channel.send(nocando);
    var mutemem = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if(!mutemem) return msg.channel.send(nomen);
    
    let muterole = msg.guild.roles.find(r => r.name === "Temporarily Discorporated");
    if(!muterole) return msg.channel.send("The is no mute role to remove!")
    mutemem.removeRole(muterole.id).then(()=>{
        msg.delete()
        msg.channel.send(`Your Have Been Unmuted ${mutemem.user.username}`).catch(e => console.log(e));

    })



    
}

module.exports.help={
    name:"unmute"
}
