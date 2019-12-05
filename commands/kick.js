
const Discord = require("discord.js");
// Kick Command
module.exports.run = (bot,msg,args)=>{
try{
    var nocando = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions")
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
    var cantkick = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions To Kick User!")
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
    
let kUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
      if(!kUser) return msg.channel.send("Can't find user!");
      let kReason = args.join(" ").slice(22);
      if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(nocando);
      if(kUser.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(cantkick);
  
      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${msg.author.id}> with ID ${msg.author.id}`)
      .addField("Kicked In", msg.channel)
      .addField("Time", msg.createdAt)
      .addField("Reason", kReason);
  
      let kickChannel = msg.guild.channels.find(`name`, "bot-action-log");
      if(!kickChannel) return msg.channel.send("Can't find incidents channel.");
  
      msg.guild.member(kUser).kick(kReason);
      kickChannel.send(kickEmbed);
      var checkkick = new Discord.RichEmbed()
      .setTitle("Check Incident in actionchannel ")
      .setColor("#0295ca")
      .setTimestamp()
      .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
        msg.delete().catch(O_o=>{});
        msg.channel.send(checkkick)

        return;
    }
    catch(e){
        console.log(e)
        msg.channel.send("Error! Not enought arguments to kick or(tip:add a reason or mention a user)")
}};

module.exports.help ={
    name:"kick"
}