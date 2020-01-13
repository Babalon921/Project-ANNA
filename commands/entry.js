const Discord = require("discord.js");
let mongoose = require("mongoose")
mongoose.connect('mongodb+srv://user:user1242@project-anna-5ycet.mongodb.net/dbdata?retryWrites=true&w=majority/', {useNewUrlParser: true});
const Entry = require("../module/entry.js")


//Start Embed
var idmen = new Discord.RichEmbed()
.setAuthor("Enter CODEX Infomation")
.setColor("#0295ca")
.setTimestamp()
.setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
var emb = new Discord.RichEmbed()
.setTitle("CODEX Stored!")
.setColor("#0295ca")
.setTimestamp()
.setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');


// End of embed
module.exports.run = async (bot,msg,args)=>{
    if(msg.author.bot) return;
    if(!msg.member.hasPermission("ADMINISTRATOR")){
        return;
    }


    clearance = args[1];
    id = args[0];
    thubn = args[2]
    var hold1 = args.join(" ").replace(args[0],"");
    var hold2 = hold1.replace(args[1],"");
    var hold3 = hold2.replace(args[2],"");
    var tinf = hold3.trim();

    if(!thubn.startsWith("http")){
        var thubn  = "https://i.imgur.com/ZpijZpg.png"
    }

    if(isNaN(args[0])){return msg.channel.send("Invalid Input! >Entry id | c1/c2/c3/c4 | thumbnail/type anything to not enter | title")}
    if(clearance == "c1"){
        var c1 = true
    }
    else if(clearance == "c2"){
        var c2 = true
    }
    else if(clearance == "c3"){
        var c3 = true
    }
    else if(clearance == "c4"){
        var c4 = true
    }
    else if(clearance == "c5"){
      var c5 = true
    }
    else if(clearance == "c6"){
      var c6 = true
    }
    else if(clearance == "c7"){
      var c7 = true
    }
    else if(clearance == "c8"){
      var c8 = true
    }
    else if(clearance == "c9"){
      var c9 = true
    }
    else if(clearance == "c10"){
      var c10 = true
    }
    else{return msg.channel.send("Invalid Input!")}

    const filter = m => m.author.id === msg.author.id;
    msg.reply(idmen).then(r => r.delete(10000));
    msg.channel.awaitMessages(filter, {max:1, time:60000}).then(collected =>{
    if(collected.first().content === "cancel"){
        return msg.channel.send("Canceled!")
    }





    const inf = collected.first().content;


    const entry = new Entry({
    uid: id,
    title:  tinf,
    info: inf,
    thub: thubn,
    c1:c1,
    c2:c2,
    c3:c3,
    c4:c4,
    c5:c5,
    c6:c6,
    c7:c7,
    c8:c8
  ,


    });
    entry.save()
    msg.channel.send(emb).then(msg.delete(10000))
    .catch()




    }).catch(err =>{
        console.log(err)
    });


}



module.exports.help={
    name:"entry",
}
