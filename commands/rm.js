const Discord = require("discord.js");
let mongoose = require("mongoose")
mongoose.connect('mongodb+srv://user:user1242@project-anna-5ycet.mongodb.net/dbdata?retryWrites=true&w=majority/', {useNewUrlParser: true});
const Entry = require("../module/entry.js")

var compleate = new Discord.RichEmbed()
.setTitle("Removed Entry!")
.setColor("#0295ca")
.setTimestamp()
.setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
var nocando = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions")
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');

module.exports.run = async (bot,msg,args)=>{
if(!msg.member.hasPermission("ADMINISTRATOR")){return msg.channel.send(nocando)}
    
Entry.findOneAndDelete({ 'uid': args[0] }, function (err) {
msg.channel.send(compleate);
if(err) return;
}).catch(err => console.log("Removed A Entry"));

}

module.exports.help={
    name:"remove",
    aliases:["rm"]
}