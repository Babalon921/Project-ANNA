const Discord = require("discord.js");
let mongoose = require("mongoose")
mongoose.connect('mongodb+srv://user:user1242@project-anna-5ycet.mongodb.net/dbdata?retryWrites=true&w=majority/', {useNewUrlParser: true});
const Entry = require("../module/entry.js")
var nocando = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions")
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');

module.exports.run = async (bot,msg,args)=>{
    if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(nocando);
    var done = new Discord.RichEmbed()
    .setTitle("Compleated Edit")
    .setColor("#0295ca")
    .setTimestamp()
    .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');

        try{
        var hold1 = args.join(" ").replace(args[0],"")
        var hold2 = hold1.replace(args[1],"")
        var din = hold2.trim();

        if(args[1] == "uid"){
        Entry.findOneAndUpdate({uid: args[0]}, {$set:{uid:din}}, {new: true}, (err, data) => {
            if (err){console.log(err)}
            msg.channel.send(done);
        })}
        else if(args[1] == "title"){
            Entry.findOneAndUpdate({uid: args[0]}, {$set:{title:din}}, {new: true}, (err, data) => {
                if (err){console.log(err)}
                msg.channel.send(done);
        })}
        else if(args[1] == "info"){
            Entry.findOneAndUpdate({uid: args[0]}, {$set:{info:din}}, {new: true}, (err, data) => {
                if (err){console.log(err)}
                msg.channel.send(done);
        })}
        else if(args[1] == "thumbnail"){
            Entry.findOneAndUpdate({uid: args[0]}, {$set:{thub:din}}, {new: true}, (err, data) => {
                if (err){console.log(err)}
                msg.channel.send(done);
        })}
        else if(args[1] == "clearance"){
            Entry.findOneAndUpdate({uid: args[0]}, {$set:{uid:din}}, {new: true}, (err, data) => {
                if (err){console.log(err)}
                msg.channel.send(done);
        })}
        else{msg.channel.send("Invalid Input!")}


    }finally{
        return;}};




module.exports.help={
    name:"edit",
}
