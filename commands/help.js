const Discord = require("discord.js");
//Help Command
module.exports.run = (bot,msg,args)=>{

    var pick = new Discord.RichEmbed()
    .setDescription("Pick Between Admin/User! (ex.>help admin) (user lowercaps)")
    .setColor("#0295ca")

    var adminhelp = new Discord.RichEmbed()
    .setAuthor("~~~~~~~~~~~~~HELP~~~~~~~~~~~~~")
    .setThumbnail("https://cdn.discordapp.com/attachments/581163481424986112/612248415262474276/propic.jpg")
    .setDescription("^ = permisson's needed!")
    .addField("Prefix:",">")
    .addField("Ban:","Ban's Member from the server (ex.>ban @banman {reason}) ^msg_management")
    .addField("Kick:","Kick's Member from the server (ex.>kick @kickman {reason}) ^msg_management")
    .addField("UnMute:","Unmutes A Member! (ex.>unmute @unmuteman) ^admin")
    .addField("Entry:","Put data into the database! (ex.>Entry id clearance thumbnail/NA Title) ^admin")
    .addField("Edit:","Edits A Entry! (ex.>edit id feild(id,title,info,thumbnail) content ) ^admin")
    .addField("Say:","Ask's the bot nicely, if it wants to say what you said ^admin")
    .addField("lvlclearall:","Clears All levels ^admin")
    .addField("setclock:","Sets the clock of Oblivion! (ex.>setclock time am/pm) ^admin")
    .addField("Help:","Displays this message!")
    .addBlankField()
    .addBlankField()
    .addField("Database Format:","id:<id>\nTitle:<title>\nInfo:<infomation>\nthum:<thumbnail>(for edit use thumbnail)\nc1<true/false>\nc2<true/false>\nc3<true/false>\nc4<true/false>\n_v(ingnore)")

    .setColor("#ff0000")

    var userhelp = new Discord.RichEmbed()
    .setThumbnail("https://cdn.discordapp.com/attachments/581163481424986112/612248415262474276/propic.jpg")
    .setAuthor("~~~~~~~~~~~~~HELP~~~~~~~~~~~~~")
    .addField("Prefix:",">")
    .addField("Report:","Reports A Player!")
    .addField("Level:","Shows Your Level!")
    .addField("Query:","Allows Users to Gain Codex info!(ex.>query id/title (*Exact title name*)")
    .addField("Clock:","Show The Oblivion Clock ")
    .addField("Help:","Displays this message!")
    .setColor("#0295ca")
    
    if(!args[0]){
    msg.channel.send(pick)
    }
    if(args[0] == "admin"){
        msg.channel.send(adminhelp)
    }
    if(args[0] == "user"){
        msg.channel.send(userhelp)
    }

}

module.exports.help ={
    name:"help"
}