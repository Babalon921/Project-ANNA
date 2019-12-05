const Discord = require("discord.js");
// Say command
module.exports.run = (bot,msg,args)=>{

    var nocando = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions")
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
    if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(nocando);
    var what_to_say = args.join(" ");
    msg.channel.send(what_to_say)
   
}
module.exports.help={
    name:"say"
}
