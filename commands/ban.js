const Discord = require("discord.js");
// Ban Command!

module.exports.run = (bot,msg,args)=>{
    try{
    var nocando = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions")
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
    var cantban = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions To Kick User!")
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
    
    let bUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
        if(!bUser) return msg.channel.send("Can't find user!");
        var bReason = args.join(" ").slice(22);
        if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(nocando);
        if(bUser.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(cantban);
    
        let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#bc0000")
        .addField("Banned User", `${bUser} with ID ${bUser.id}`)
        .addField("Banned By", `<@${msg.author.id}> with ID ${msg.author.id}`)
        .addField("Banned In", msg.channel)
        .addField("Time", msg.createdAt)
        .addField("Reason", bReason);
    
        let incidentchannel = msg.guild.channels.find(`name`, "bot-action-log");
        if(!incidentchannel) return msg.channel.send("Can't find incidents channel.");
    
        msg.guild.member(bUser).ban(bReason);
        incidentchannel.send(banEmbed);
        var checkban = new Discord.RichEmbed()
      .setTitle("Check Incident in actionchannel ")
      .setColor("#0295ca")
      .setTimestamp()
      .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
        
        msg.delete().catch(O_o=>{});
        msg.channel.send(checkban)
    return;
    }
    catch(e){
        msg.channel.send("Error! Not enough arguments to ban (tip:add a reason or mention a user)")
}};

module.exports.help ={
    name:"ban"
}