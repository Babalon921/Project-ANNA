const Discord = require("discord.js");
var fs = require('fs');
module.exports.run = async (bot,msg,args)=>{
    if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send(nocando);

    
    
    if(isNaN(args[0])){
        msg.channel.send("Please Enter a Number from 1-12")
    }
    else if (args[0] >= 1 && args[0] <= 12){
        time = args[0]+":00";
    }
    else{
        msg.channel.send("Error: Invalid Please Select Number Between 1-12!")
        return;
    }
    if(args[1] == "am"){
        ct = "am"
    }
    else if(args[1] == "pm"){
        ct = "pm"
    }
    else{msg.channel.send("Invalid AM/PM!")}

    fs.writeFile('./module/store/clock.txt',time+" "+ct, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

    msg.channel.send("Clock Time Set!")



}

module.exports.help={
    name:"setclock"
}