const Discord = require("discord.js");
var fs = require('fs');
module.exports.run = (bot,msg,args)=>{
    img12="https://cdn.discordapp.com/attachments/604535911237156879/614955410402836490/12.png"
    img1="https://cdn.discordapp.com/attachments/604535911237156879/615187146386571274/1.png"
    img2="https://cdn.discordapp.com/attachments/604535911237156879/615187146910728192/2.png"
    img3="https://cdn.discordapp.com/attachments/604535911237156879/615187148945227777/3.png"
    img4="https://cdn.discordapp.com/attachments/604535911237156879/615187149054279680/4.png"
    img5="https://cdn.discordapp.com/attachments/604535911237156879/615187151021408276/5.png"
    img6="https://cdn.discordapp.com/attachments/604535911237156879/615187152082436147/6.png"
    img7="https://cdn.discordapp.com/attachments/604535911237156879/615187153919410176/7.png"
    img8="https://cdn.discordapp.com/attachments/604535911237156879/615187154661801996/8.png"
    img9="https://cdn.discordapp.com/attachments/604535911237156879/615187156318683216/9.png"
    img10="https://cdn.discordapp.com/attachments/604535911237156879/615187157199355914/10.png"
    img11="https://cdn.discordapp.com/attachments/604535911237156879/615187708326707213/11.png"

    fs.readFile('./module/store/clock.txt','utf8', function(err, time) {
        if(err)return console.log("error in clock.js");
        console.log(time)

        var ctime = time.charAt(0);
        var atime = time.charAt(1);
        if(ctime == "1"){
            if(atime == "0"){
            var clockface = new Discord.RichEmbed()
            .setTitle("The Oblivion Clock >> Time: "+time)
            .setImage(img10)
            .setColor("#21f500")
            .setTimestamp()
            .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
            msg.channel.send(clockface) 
            }
            else if(atime == "1"){
                var clockface = new Discord.RichEmbed()
                .setTitle("The Oblivion Clock >> Time: "+time)
                .setImage(img11)
                .setColor("#21f500")
                .setTimestamp()
                .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
                msg.channel.send(clockface)
                return;
            }
            else if(atime == "2"){
                var clockface = new Discord.RichEmbed()
                .setTitle("The Oblivion Clock >> Time: "+time)
                .setImage(img12)
                .setColor("#21f500")
                .setTimestamp()
                .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
                msg.channel.send(clockface)
                return;
            }
            var clockface = new Discord.RichEmbed()
            .setTitle("The Oblivion Clock >> Time: "+time)
            .setImage(img1)
            .setColor("#21f500")
            .setTimestamp()
            .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
            msg.channel.send(clockface)
            return;
        }
        else if(ctime == "3"){
            var clockface = new Discord.RichEmbed()
            .setTitle("The Oblivion Clock >> Time: "+time)
            .setImage(img3)
            .setColor("#21f500")
            .setTimestamp()
            .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
            msg.channel.send(clockface)
            return;
        }
        else if(ctime == "4"){
            var clockface = new Discord.RichEmbed()
            .setTitle("The Oblivion Clock >> Time: "+time)
            .setImage(img4)
            .setColor("#21f500")
            .setTimestamp()
            .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
            msg.channel.send(clockface)
            return;
        }
        else if(ctime == "5"){
            var clockface = new Discord.RichEmbed()
            .setTitle("The Oblivion Clock >> Time: "+time)
            .setImage(img6)
            .setColor("#21f500")
            .setTimestamp()
            .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
            msg.channel.send(clockface)
            return;
        }
        else if(ctime == "6"){
            var clockface = new Discord.RichEmbed()
            .setTitle("The Oblivion Clock >> Time: "+time)
            .setImage(img6)
            .setColor("#21f500")
            .setTimestamp()
            .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
            msg.channel.send(clockface)
            return;
        }
        else if(ctime == "7"){
            var clockface = new Discord.RichEmbed()
            .setTitle("The Oblivion Clock >> Time: "+time)
            .setImage(img7)
            .setColor("#21f500")
            .setTimestamp()
            .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
            msg.channel.send(clockface)
            return;
        }
        else if(ctime == "8"){
            var clockface = new Discord.RichEmbed()
            .setTitle("The Oblivion Clock >> Time: "+time)
            .setImage(img8)
            .setColor("#21f500")
            .setTimestamp()
            .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
            msg.channel.send(clockface)
            return;
        }
        else if(ctime == "9"){
            var clockface = new Discord.RichEmbed()
            .setTitle("The Oblivion Clock >> Time: "+time)
            .setImage(img9)
            .setColor("#21f500")
            .setTimestamp()
            .setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');
            msg.channel.send(clockface)
            return;
        }
        else(msg.channel.send("Error:No Time Recorded!"))


        
    });

    

    
}

module.exports.help={
    name:"clock"
}