const Discord = require("discord.js");

let mongoose = require("mongoose")
mongoose.connect('mongodb+srv://user:user1242@project-anna-5ycet.mongodb.net/dbdata?retryWrites=true&w=majority/', {useNewUrlParser: true});
const Entry = require("../module/entry.js")

var gettinginfo = new Discord.RichEmbed()
.setTitle("Decrypting Infomation")
.setThumbnail("https://media.giphy.com/media/3o7WTB4o4D0O9IQVQ4/giphy.gif")
.setColor("#0295ca")
.setTimestamp()
.setFooter('Project ANNA', 'https://cdn.discordapp.com/attachments/665367731578601511/666129331231391755/PKTT.png');
/// embed

module.exports.run = async(_bot,msg,args)=>{
  if(!isNaN(args.join(" "))){
    Entry.findOne({ 'uid': args.join(" ") }, 'info title thub c1 c2 c3 c4 c5 c6 c7 c8 c9 c10', function (err, data){

        if(err){return;}

        try{
        var fot1 = "This eternal codex entry is brought to you by the PKT. This entry has been authorized to "
        var fot2 = " level personnel and up only"


        if(data.c1 == true){
            if(msg.member.roles.find(r => r.name === "Theta Clearance")){
              var rank = "Theta"
              var out = new Discord.RichEmbed()
              .setTitle(data.title)
              .setDescription(data.info)
              .setAuthor("Eternal Codex ID "+args.join(" "))
              .setThumbnail(data.thub)
              .setColor("#00eeff")
              .setTimestamp()
              .setFooter(fot1+rank+fot2, 'https://cdn.discordapp.com/attachments/665367731578601511/666129331231391755/PKTT.png');

                msg.channel.send(gettinginfo)

                setTimeout(function() {
                msg.channel.send(out)
                  }, 10000);

            }
            else{
                msg.channel.send(gettinginfo)

                setTimeout(function() {
                msg.channel.send("Error: Missing required Theta clearance code. Access Denied!!")
                  }, 10000);
                };
        }
        else if(data.c2 == true){
            if(msg.member.roles.find(r => r.name === "Delta Clearance")){
              var rank = "Delta"
              var out = new Discord.RichEmbed()
              .setTitle(data.title)
              .setDescription(data.info)
              .setAuthor("Eternal Codex ID "+args.join(" "))
              .setThumbnail(data.thub)
              .setColor("#00eeff")
              .setTimestamp()
              .setFooter(fot1+rank+fot2, 'https://cdn.discordapp.com/attachments/665367731578601511/666129331231391755/PKTT.png');

                msg.channel.send(gettinginfo)
                setTimeout(function() {
                msg.channel.send(out)
                  }, 20000);

            }
            else{
                msg.channel.send(gettinginfo)

                setTimeout(function() {
                msg.channel.send("Error: Missing required Delta clearance code. Access Denied!!")
                  }, 10000);
                };
        }
        else if(data.c3 == true){
            if(msg.member.roles.find(r => r.name === "Omega Clearance")){
              var rank = "Omega"
              var out = new Discord.RichEmbed()
              .setTitle(data.title)
              .setDescription(data.info)
              .setAuthor("Eternal Codex ID "+args.join(" "))
              .setThumbnail(data.thub)
              .setColor("#00eeff")
              .setTimestamp()
              .setFooter(fot1+rank+fot2, 'https://cdn.discordapp.com/attachments/665367731578601511/666129331231391755/PKTT.png');

                msg.channel.send(gettinginfo)
                setTimeout(function() {
                msg.channel.send(out)
                  }, 30000);
                }
                else{
                    msg.channel.send(gettinginfo)

                setTimeout(function() {
                msg.channel.send("Error: Missing required Omega clearance code. Access Denied!!")
                  }, 10000);

                    };
            }
        else if(data.c4 == true){
            if(msg.member.roles.find(r => r.name === "Origin Clearance")){
              var rank = "Origin"
              var out = new Discord.RichEmbed()
              .setTitle(data.title)
              .setDescription(data.info)
              .setAuthor("Eternal Codex ID "+args.join(" "))
              .setThumbnail(data.thub)
              .setColor("#b200ff")
              .setTimestamp()
              .setFooter(fot1+rank+fot2, 'https://cdn.discordapp.com/attachments/665367731578601511/666129331231391755/PKTT.png');

                msg.channel.send(gettinginfo)
                setTimeout(function() {
                msg.channel.send(out)
                  }, 40000);
                }
                else{
                    msg.channel.send(gettinginfo)

                setTimeout(function() {
                msg.channel.send("Efmgm Pihelyr ofucue ltbbx ultnunect! Nhqqsh rbyyey!")
                  }, 10000);

            };
         }
         else if (data.c5 == true){
           if(msg.member.roles.find(r => r.name === "Grey Clearance")){
             var rank = "Grey"
             var out = new Discord.RichEmbed()
             .setTitle(data.title)
             .setDescription(data.info)
             .setAuthor("FELT Codex ID "+args.join(" "))
             .setThumbnail(data.thub)
             .setColor("#ff0000")
             .setTimestamp()
             .setFooter("This Codex entry is the property of FELT Inc. and was compiled by the PKT, It is authorizd to Grey clearance members only.", 'https://cdn.discordapp.com/attachments/548681901418741762/636338793611264011/JPEG_20190708_0246333.jpg');

               msg.channel.send(gettinginfo)
               setTimeout(function() {
               msg.channel.send(out)
                 }, 40000);
               }
               else{
                   msg.channel.send(gettinginfo)

               setTimeout(function() {
               msg.channel.send("I am afraid you are missing Grey clearance required for FELT codex entries!")
                 }, 10000);

           };
        }
        else if (data.c6 == true){
          if(msg.member.roles.find(r => r.name === "Blue Clearance")){
            var rank = "Blue"
            var out = new Discord.RichEmbed()
            .setTitle(data.title)
            .setDescription(data.info)
            .setAuthor("SEST Codex ID "+args.join(" "))
            .setThumbnail(data.thub)
            .setColor("#00eeff")
            .setTimestamp()
            .setFooter("This Codex entry is the property of SEST. and was compiled by the PKT, It is authorizd to Blue clearance members only.", 'https://cdn.discordapp.com/attachments/627184653916176403/628781636078665763/latest.png');

              msg.channel.send(gettinginfo)
              setTimeout(function() {
              msg.channel.send(out)
                }, 40000);
              }
              else{
                  msg.channel.send(gettinginfo)

              setTimeout(function() {
              msg.channel.send("I am afraid you are missing Blue clearance required for SEST codex entries!")
                }, 10000);

          };
       }
       else if (data.c7 == true){
         if(msg.member.roles.find(r => r.name === "Green Clearance")){
           var rank = "Green"
           var out = new Discord.RichEmbed()
           .setTitle(data.title)
           .setDescription(data.info)
           .setAuthor("MT Codex ID "+args.join(" "))
           .setThumbnail(data.thub)
           .setColor("#0295ca")
           .setTimestamp()
           .setFooter("This Codex entry is the property of the Magis of Teldrassil. and was compiled by the PKT, It is authorizd to Green clearance members only.", 'https://cdn.discordapp.com/attachments/458417860058939403/636389138899402783/CGT.png');

             msg.channel.send(gettinginfo)
             setTimeout(function() {
             msg.channel.send(out)
               }, 40000);
             }
             else{
                 msg.channel.send(gettinginfo)

             setTimeout(function() {
             msg.channel.send("I am afraid you are missing Green clearance required for codex entries by the Magis of Teldrassil.")
               }, 10000);

         };
      }
      else if (data.c8 == true){
        if(msg.member.roles.find(r => r.name === "White Clearance")){
          var rank = "White"
          var out = new Discord.RichEmbed()
          .setTitle(data.title)
          .setDescription(data.info)
          .setAuthor("CGT Codex ID "+args.join(" "))
          .setThumbnail(data.thub)
          .setColor("#FDFDFD")
          .setTimestamp()
          .setFooter("This Codex entry is the property of the CGT. and was compiled by the PKT, It is authorizd to White clearance members only.", 'https://cdn.discordapp.com/attachments/458417860058939403/636389138899402783/CGT.png');

            msg.channel.send(gettinginfo)
            setTimeout(function() {
            msg.channel.send(out)
              }, 40000);
            }
            else{
                msg.channel.send(gettinginfo)

            setTimeout(function() {
            msg.channel.send("I am afraid you are missing White clearance required for CGT codex entries")
              }, 10000);

        };
     }
     else if (data.c9 == true){
       if(msg.member.roles.find(r => r.name === "Dark Clearance")){
         var rank = "Dark"
         var out = new Discord.RichEmbed()
         .setTitle(data.title)
         .setDescription(data.info)
         .setAuthor("PKT Codex ID "+args.join(" "))
         .setThumbnail(data.thub)
         .setColor("#FDFDFD")
         .setTimestamp()
         .setFooter("This Codex entry is the property of the PKT. It is authorizd to Dark clearance members only.", 'https://cdn.discordapp.com/attachments/665367731578601511/666129331231391755/PKTT.png');

           msg.channel.send(gettinginfo)
           setTimeout(function() {
           msg.channel.send(out)
             }, 40000);
           }
           else{
               msg.channel.send(gettinginfo)

           setTimeout(function() {
           msg.channel.send("I am afraid you are missing Dark clearance required for this codex entry.")
             }, 10000);

       };
    }
    else if (data.c10 == true){
      if(msg.member.roles.find(r => r.name === "Celestial Clearance")){
        var rank = "Celestial"
        var out = new Discord.RichEmbed()
        .setTitle(data.title)
        .setDescription(data.info)
        .setAuthor("PKT Codex ID "+args.join(" "))
        .setThumbnail(data.thub)
        .setColor("#FDFDFD")
        .setTimestamp()
        .setFooter("This Codex entry is the property of the PKT. It is authorizd to Celestial clearance members only.", 'https://cdn.discordapp.com/attachments/665367731578601511/666129331231391755/PKTT.png');

          msg.channel.send(gettinginfo)
          setTimeout(function() {
          msg.channel.send(out)
            }, 40000);
          }
          else{
              msg.channel.send(gettinginfo)

          setTimeout(function() {
          msg.channel.send("I am afraid you are missing Celestial clearance required for this codex entry.")
            }, 10000);

      };
   }



        else(msg.channel.send("I am afraid you haven't gained the clearance codes to access the Codex yet!"));


        }catch(e){
          msg.channel.send(gettinginfo)
                console.log(e)
                setTimeout(function() {
                msg.channel.send("Error! CODEX ID Invalid!")
                  }, 10000);
        }

    }).catch(err => console.log(err));
  }
  ///Num End /// start title /// endpoint
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else {
    Entry.findOne({ 'title': args.join(" ") }, 'info title thub c1 c2 c3 c4 c5 c6 c7 c8 c9 c10', function (err, data){

        if(err){return;}

        try{
        var fot1 = "This eternal codex entry is brought to you by the PKT. This entry has been authorized to "
        var fot2 = " level personnel and up only"


        if(data.c1 == true){
            if(msg.member.roles.find(r => r.name === "Theta Clearance")){
              var rank = "Theta"
              var out = new Discord.RichEmbed()
              .setTitle(data.title)
              .setDescription(data.info)
              .setAuthor("Eternal Codex ID "+args.join(" "))
              .setThumbnail(data.thub)
              .setColor("#00eeff")
              .setTimestamp()
              .setFooter(fot1+rank+fot2, 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');

                msg.channel.send(gettinginfo)

                setTimeout(function() {
                msg.channel.send(out)
                  }, 10000);

            }
            else{
                msg.channel.send(gettinginfo)

                setTimeout(function() {
                msg.channel.send("Error: Missing required Theta clearance code. Access Denied!!")
                  }, 10000);
                };
        }
        else if(data.c2 == true){
            if(msg.member.roles.find(r => r.name === "Delta Clearance")){
              var rank = "Delta"
              var out = new Discord.RichEmbed()
              .setTitle(data.title)
              .setDescription(data.info)
              .setAuthor("Eternal Codex ID "+args.join(" "))
              .setThumbnail(data.thub)
              .setColor("#00eeff")
              .setTimestamp()
              .setFooter(fot1+rank+fot2, 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');

                msg.channel.send(gettinginfo)
                setTimeout(function() {
                msg.channel.send(out)
                  }, 20000);

            }
            else{
                msg.channel.send(gettinginfo)

                setTimeout(function() {
                msg.channel.send("Error: Missing required Delta clearance code. Access Denied!!")
                  }, 10000);
                };
        }
        else if(data.c3 == true){
            if(msg.member.roles.find(r => r.name === "Omega Clearance")){
              var rank = "Omega"
              var out = new Discord.RichEmbed()
              .setTitle(data.title)
              .setDescription(data.info)
              .setAuthor("Eternal Codex ID "+args.join(" "))
              .setThumbnail(data.thub)
              .setColor("#00eeff")
              .setTimestamp()
              .setFooter(fot1+rank+fot2, 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');

                msg.channel.send(gettinginfo)
                setTimeout(function() {
                msg.channel.send(out)
                  }, 30000);
                }
                else{
                    msg.channel.send(gettinginfo)

                setTimeout(function() {
                msg.channel.send("Error: Missing required Omega clearance code. Access Denied!!")
                  }, 10000);

                    };
            }
        else if(data.c4 == true){
            if(msg.member.roles.find(r => r.name === "Origin Clearance")){
              var rank = "Origin"
              var out = new Discord.RichEmbed()
              .setTitle(data.title)
              .setDescription(data.info)
              .setAuthor("Eternal Codex ID "+args.join(" "))
              .setThumbnail(data.thub)
              .setColor("#b200ff")
              .setTimestamp()
              .setFooter(fot1+rank+fot2, 'https://cdn.discordapp.com/attachments/581163481424986112/612235645145841664/hologram-1140x641.png');

                msg.channel.send(gettinginfo)
                setTimeout(function() {
                msg.channel.send(out)
                  }, 40000);
                }
                else{
                    msg.channel.send(gettinginfo)

                setTimeout(function() {
                msg.channel.send("Efmgm Pihelyr ofucue ltbbx ultnunect! Nhqqsh rbyyey!")
                  }, 10000);

            };
         }
         else if (data.c5 == true){
           if(msg.member.roles.find(r => r.name === "Grey Clearance")){
             var rank = "Grey"
             var out = new Discord.RichEmbed()
             .setTitle(data.title)
             .setDescription(data.info)
             .setAuthor("FELT Codex ID "+args.join(" "))
             .setThumbnail(data.thub)
             .setColor("#ff0000")
             .setTimestamp()
             .setFooter("This Codex entry is the property of FELT Inc. and was compiled by the PKT, It is authorizd to Grey clearance members only.", 'https://cdn.discordapp.com/attachments/548681901418741762/636338793611264011/JPEG_20190708_0246333.jpg');

               msg.channel.send(gettinginfo)
               setTimeout(function() {
               msg.channel.send(out)
                 }, 40000);
               }
               else{
                   msg.channel.send(gettinginfo)

               setTimeout(function() {
               msg.channel.send("I am afraid you are missing Grey clearance required for FELT codex entries!")
                 }, 10000);

           };
        }
        else if (data.c6 == true){
          if(msg.member.roles.find(r => r.name === "Blue Clearance")){
            var rank = "Blue"
            var out = new Discord.RichEmbed()
            .setTitle(data.title)
            .setDescription(data.info)
            .setAuthor("SEST Codex ID "+args.join(" "))
            .setThumbnail(data.thub)
            .setColor("#00eeff")
            .setTimestamp()
            .setFooter("This Codex entry is the property of SEST. and was compiled by the PKT, It is authorizd to Blue clearance members only.", 'https://cdn.discordapp.com/attachments/627184653916176403/628781636078665763/latest.png');

              msg.channel.send(gettinginfo)
              setTimeout(function() {
              msg.channel.send(out)
                }, 40000);
              }
              else{
                  msg.channel.send(gettinginfo)

              setTimeout(function() {
              msg.channel.send("I am afraid you are missing Blue clearance required for SEST codex entries!")
                }, 10000);

          };
       }
       else if (data.c7 == true){
         if(msg.member.roles.find(r => r.name === "Green Clearance")){
           var rank = "Green"
           var out = new Discord.RichEmbed()
           .setTitle(data.title)
           .setDescription(data.info)
           .setAuthor("MT Codex ID "+args.join(" "))
           .setThumbnail(data.thub)
           .setColor("#0295ca")
           .setTimestamp()
           .setFooter("This Codex entry is the property of the Magis of Teldrassil. and was compiled by the PKT, It is authorizd to Green clearance members only.", 'https://cdn.discordapp.com/attachments/458417860058939403/636389138899402783/CGT.png');

             msg.channel.send(gettinginfo)
             setTimeout(function() {
             msg.channel.send(out)
               }, 40000);
             }
             else{
                 msg.channel.send(gettinginfo)

             setTimeout(function() {
             msg.channel.send("I am afraid you are missing Green clearance required for codex entries by the Magis of Teldrassil.")
               }, 10000);

         };
      }
      else if (data.c8 == true){
        if(msg.member.roles.find(r => r.name === "White Clearance")){
          var rank = "White"
          var out = new Discord.RichEmbed()
          .setTitle(data.title)
          .setDescription(data.info)
          .setAuthor("CGT Codex ID "+args.join(" "))
          .setThumbnail(data.thub)
          .setColor("#FDFDFD")
          .setTimestamp()
          .setFooter("This Codex entry is the property of the CGT. and was compiled by the PKT, It is authorizd to White clearance members only.", 'https://cdn.discordapp.com/attachments/458417860058939403/636389138899402783/CGT.png');

            msg.channel.send(gettinginfo)
            setTimeout(function() {
            msg.channel.send(out)
              }, 40000);
            }
            else{
                msg.channel.send(gettinginfo)

            setTimeout(function() {
            msg.channel.send("I am afraid you are missing White clearance required for CGT codex entries")
              }, 10000);

        };
     }
     else if (data.c9 == true){
       if(msg.member.roles.find(r => r.name === "Dark Clearance")){
         var rank = "Dark"
         var out = new Discord.RichEmbed()
         .setTitle(data.title)
         .setDescription(data.info)
         .setAuthor("PKT Codex ID "+args.join(" "))
         .setThumbnail(data.thub)
         .setColor("#FDFDFD")
         .setTimestamp()
         .setFooter("This Codex entry is the property of the PKT. It is authorizd to Dark clearance members only.", 'https://cdn.discordapp.com/attachments/665367731578601511/666129331231391755/PKTT.png');

           msg.channel.send(gettinginfo)
           setTimeout(function() {
           msg.channel.send(out)
             }, 40000);
           }
           else{
               msg.channel.send(gettinginfo)

           setTimeout(function() {
           msg.channel.send("I am afraid you are missing Dark Clearance required for this codex entry")
             }, 10000);

       };
    }
    else if (data.c10 == true){
      if(msg.member.roles.find(r => r.name === "Celestial Clearance")){
        var rank = "Celestial"
        var out = new Discord.RichEmbed()
        .setTitle(data.title)
        .setDescription(data.info)
        .setAuthor("PKT Codex ID "+args.join(" "))
        .setThumbnail(data.thub)
        .setColor("#FDFDFD")
        .setTimestamp()
        .setFooter("This Codex entry is the property of the PKT. It is authorizd to Celestial clearance members only.", 'https://cdn.discordapp.com/attachments/665367731578601511/666129331231391755/PKTT.png');

          msg.channel.send(gettinginfo)
          setTimeout(function() {
          msg.channel.send(out)
            }, 40000);
          }
          else{
              msg.channel.send(gettinginfo)

          setTimeout(function() {
          msg.channel.send("I am afraid you are missing Celestial Clearance required for this codex entry")
            }, 10000);

      };
   }


        else(msg.channel.send("I am afraid you haven't gained the clearance codes to access the Codex yet!"));


        }catch(e){
          msg.channel.send(gettinginfo)
                console.log(e)
                setTimeout(function() {
                msg.channel.send("Error! CODEX ID Invalid!")
                  }, 10000);
        }

    }).catch(err => console.log(err));
  }
  ///Title End /// endpoint
};



module.exports.help={
    name:"query"
}
