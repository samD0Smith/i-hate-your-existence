const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});


const prefix = "!";
client.on("message", (message) => {

  var msg = message.content.toLowerCase();

     if(msg.startsWith(prefix + "hey")||msg.startsWith(prefix + "hi")||msg.startsWith(prefix + "hello")||msg.startsWith(prefix + "yo")||msg.startsWith(prefix + "konichiwa")){
      var n=Math.floor(Math.random() * Math.floor(10));
      if(n==0)
      {
        message.channel.send("helllo");
        message.channel.send("https://i.imgur.com/FurQm3A.gif");
      }
      if(n==9)
      {
        message.channel.send("salam, " + message.author);
      }
      if(n==1)
      {
        message.channel.send("hola, " + message.author);
      }
      if(n==2)
      {
        message.channel.send("bonjour, " + message.author);
      }
      if(n==3)
      {
        message.channel.send("olá, " + message.author);
      }
      if(n==4)
      {
        message.channel.send("namaste, " + message.author);
      }
      if(n==5)
      {
        message.channel.send("heyyo");
        message.channel.send("https://i.imgur.com/FurQm3A.gif");
      }
      if(n==6)
      {
        message.channel.send("Chào, " + message.author);
      }
      if(n==7)
      {
        message.channel.send("Hallo, " + message.author);
      }
      if(n==8)
      {
        message.channel.send("koniiichiwa, " + message.author); 
      }

     }
     if(msg.startsWith(prefix + "rolladie")){
      
      var a=msg.length-1;
      while((msg.charAt(a)>=0) && (msg.charAt(a)<10))
      {
      --a;
      }
      if(a==msg.length-1)
      {
        a=Math.floor(Math.random() * Math.floor(5));
        if(a==0)
      {
        message.channel.send("is that a fucking number?");
      }
      if(a==4)
      {
        message.channel.send("don't waste my time" );
      }
      if(a==1)
      {
        message.channel.send("are you for real?" );
      }
      if(a==2)
      {
        message.channel.send("oh look it's illiterate" );
      }
      if(a==3)
      {
        message.channel.send("you are dumber than konami");
      }
        
      }
      else
      {
      var k=Number(msg.substring(a+1,msg.length));
      n=Math.floor(Math.random() * Math.floor(k+1));
      if(n==0)
      {
        message.channel.send("the die was magically destroyed  (T_T)");
      }
      else
      {
      message.channel.send(n + " came up \(OoO)/");
      }
    }
    }
     if(msg.startsWith(prefix + "wiki")){
       var z=msg.length-1;
      while(msg.charCodeAt(z)!=32)
      {
        --z;
      }
      var h=msg.substring(z+1,msg.length);
      message.channel.send("https://en.wikipedia.org/wiki/"+h);
      
     }
    
    if(msg.includes("jojo")||msg.includes("jo jo")||msg.includes("yare yare daze")||msg.includes("the world"))
    {
      if(msg.includes("yare yare daze")||msg.includes("the world"))
      {
        message.channel.send("is that a mother flipping J o J o reference");
      }
      var r=Math.floor(Math.random() * Math.floor(14));
      if(r==0)
      {
        message.channel.send("https://78.media.tumblr.com/e40e5da4cdcaaadcde07f024409ab061/tumblr_n7quoypNt61shub75o2_500.gif");
      }
      if(r==1)
      {
        message.channel.send("https://imgur.com/tuAiM4S ");
      }
      if(r==2)
      {
        message.channel.send("http://puu.sh/jnfRK/5604bafd09.gif  ");
      }
      if(r==3)
      {
        message.channel.send("Muda! Muda! Muda!");
        message.channel.send("http://i.imgur.com/cHEcePR.gif ");
      }
      if(r==4)
      {
        message.channel.send("http://i.imgur.com/AVne82c.gifv ");
      }
      if(r==5)
      {
        message.channel.send("http://i.imgur.com/3LKq4k3.gifv   ");
      }
      if(r==6)
      {
        message.channel.send("http://i.imgur.com/wdnnQ25.gifv");
      }
      if(r==7)
      {
        message.channel.send("http://i.imgur.com/O9MOmaN.gif");
      }
      if(r==8)
      {
        message.channel.send("http://puu.sh/jnfQQ/871350f7c5.gif  ");
      }
      if(r==9)
      {
        message.channel.send("https://i1.kym-cdn.com/photos/images/original/000/662/000/d93.gif");
      }
      if(r==10)
      {
        message.channel.send("http://i.imgur.com/m1gA45F.gif  ");
      }
      if(r==11)
      {
        message.channel.send("http://i.imgur.com/1htkceX.jpg ");
      }
      if(r==12)
      {
        message.channel.send("yare yare daze. . .");
      }
      if(r==13)
      {
        if(message.author.id==236146388424065024)
        {
        message.channel.send("next you will say that you are 5'11");
        }
        else 
        {
          message.channel.send("THE WORLDD!!!"); 
        }
      }
    }
      if(msg.includes("star wars")||msg.includes("yoda")||msg.includes("luke")||msg.includes("force")||msg.includes("saber"))
      {
        var r=Math.floor(Math.random() * Math.floor(9));
      if(r==0)
      {
        message.channel.send("http://i.imgur.com/qkfuOMz.gif");
      }
      if(r==1)
      {
        message.channel.send("http://i.imgur.com/SdshLQU.gifv");
      }
      if(r==2)
      {
        message.channel.send("http://i.imgur.com/NmWKr2O.gifv");
      }
      if(r==3)
      {
        message.channel.send("http://i.imgur.com/5x5hZ3e.gifv");
      }
      if(r==4)
      {
        message.channel.send("http://i.imgur.com/CSsnGeY.gifv");
      }
      if(r==5)
      {
        message.channel.send("http://i.imgur.com/sUDvrmN.gifv");
      }
      if(r==6)
      {
        message.channel.send("http://i.imgur.com/MlqYh41.gifv");
      }
      if(r==7)
      {
        message.channel.send("http://i.imgur.com/RWkP0.gif");
      }
      if(r==8)
      {
        message.channel.send("http://i.imgur.com/Py0On.gif");
      }
      }
      if(msg.includes("dark souls")||msg.includes("git gud")||msg.includes("life is hard")||msg.includes("death")||msg.includes("i am so hard right now"))
      {
        if(msg.includes("life is hard")||msg.includes("i am so hard right now"))
        {
          message.channel.send("harder than D a r k souls?");
        }
        var r=Math.floor(Math.random() * Math.floor(29));
      if(r==0)
      {
        message.channel.send("http://i.imgur.com/qkfuOMz.gif");
      }
      if(r==1)
      {
        message.channel.send("http://i.imgur.com/oW0EVtz.gifv");
      }
      if(r==2)
      {
        message.channel.send("https://i.imgur.com/iXVrU8B.gifv");
      }
      if(r==3)
      {
        message.channel.send("https://i.imgur.com/oBOWnWl.gif");
      }
      if(r==4)
      {
        message.channel.send("https://i.imgur.com/SNUXwlW.jpg");
      }
      if(r==5)
      {
        message.channel.send("https://i.imgur.com/z90gXrZ.gifv");
      }
      if(r==6)
      {
        message.channel.send("https://imgur.com/gallery/Lalu0I2");
      }
      if(r==7)
      {
        message.channel.send("https://imgur.com/bwQneVW");
      }
      if(r==8)
      {
        message.channel.send("http://i.imgur.com/CRZa7.gif ");
      }
      if(r==9)
      {
        message.channel.send("http://i.imgur.com/mBrBS.gif");
      }
      if(r==10)
      {
        message.channel.send("http://i.imgur.com/9UVw5Cp.gif ");
      }
      if(r==11)
      {
        message.channel.send("http://i.imgur.com/19ISf5S.gif");
      }
      if(r==12)
      {
        message.channel.send("http://i.imgur.com/Ck0TpNk.gif");
      }
      if(r==13)
      {
        message.channel.send("http://i.imgur.com/1CmpQi4.gif");
      }
      if(r==14)
      {
        message.channel.send("https://i.chzbgr.com/maxW500/6656590080/h488B4665/ ");
      }
      if(r==15)
      {
        message.channel.send("https://78.media.tumblr.com/tumblr_mb37heNfqC1qjnbtgo1_250.gif");
      }
      if(r==16)
      {
        message.channel.send("https://78.media.tumblr.com/d22d2658ddd1a05bdd435db8c05ae91e/tumblr_miyiqbW7Vq1qjnbtgo3_250.gif");
      }
      if(r==17)
      {
        message.channel.send("https://78.media.tumblr.com/c238412298ecb67e82b6b1edd3b73f67/tumblr_mjtrnrJHz61s7xvilo1_500.gif");
      }
      if(r==18)
      {
        message.channel.send("http://i.imgur.com/uf9FaeR.gif");
      }
      if(r==19)
      {
        message.channel.send("https://imgur.com/aoIKBIu");
      }
      if(r==20)
      {
        message.channel.send("http://i.imgur.com/P9MZfCc.gifv");
      }
      if(r==21)
      {
        message.channel.send("http://i.imgur.com/oSvnvsv.gif ");
      }
      if(r==22)
      {
        message.channel.send("http://2.media.dorkly.cvcdn.com/65/58/865ebf700194ab0bfceb7f9146014aec.gif");
      }
      if(r==23)
      {
        message.channel.send("https://www.youtube.com/watch?v=AoXxuae8wIU");
      }
      if(r==24)
      {
        message.channel.send("https://gfycat.com/HelplessFamiliarCanary");
      }
      if(r==25)
      {
        message.channel.send("http://orig15.deviantart.net/a058/f/2013/267/5/1/dark_soulss_by_alo81-d6nrmkr.gif");
      }
      if(r==26)
      {
        message.channel.send("https://gfycat.com/LargePotableBaiji");
      }
      if(r==27)
      {
        message.channel.send("http://i.imgur.com/hTVBHcx.gif");
      }
      if(r==28)
      {
        message.channel.send("http://cloud-3.steamusercontent.com/ugc/544172978622543110/08F97F896BB1E20C310E17DFF0F30BE5AE1CBB8C/");
      }
      }

      if(msg.includes("gay")||msg.includes("love")||msg.includes("rose")||msg.includes("dicks")||msg.includes("do do do"))
      {
        var r=Math.floor(Math.random() * Math.floor(4));
      if(r==0)
      {
        message.channel.send("http://i.imgur.com/ks4zz.gif");
      }
      if(r==1)
      {
        message.channel.send("http://i.imgur.com/T1VXW.gif");
      }
      if(r==2)
      {
        message.channel.send("http://i.imgur.com/Dm2UI.gif");
      }
      if(r==3)
      {
        message.channel.send("http://i.imgur.com/hTVBHcx.gif");
      }
      }
      if(msg.startsWith(prefix + "dance"))
      {
        var r=Math.floor(Math.random() * Math.floor(23));
      if(r==0)
      {
        message.channel.send("https://i.imgur.com/ibLhtcG.gif");
      }
      if(r==1)
      {
        message.channel.send("http://i.imgur.com/vwUuR.gif");
      }
      if(r==2)
      {
        message.channel.send("http://i.imgur.com/AyRO1.gif ");
      }
      if(r==3)
      {
        message.channel.send("http://i.imgur.com/9DIHR.gif");
      }
      if(r==4)
      {
        message.channel.send("http://i.imgur.com/NAWMD.gif");
      }
      if(r==5)
      {
        message.channel.send("http://i.imgur.com/uG3wo.gif");
      }
      if(r==6)
      {
        message.channel.send("https://imgur.com/gallery/GpZDLlL");
      }
      if(r==7)
      {
        message.channel.send("How do i dance?");
        message.channel.send("http://i.imgur.com/ms2JDrb.gif");
      }
      if(r==8)
      {
        message.channel.send("https://i.imgur.com/bGmrLYl.gif");
      }
      if(r==9)
      {
        message.channel.send("https://i.imgur.com/43GHLzF.gif   ");
      }
      if(r==10)
      {
        message.channel.send("http://i.imgur.com/ytkTpXO.gif");
      }
      if(r==11)
      {
        message.channel.send("http://i.imgur.com/zjgOF.gif");
      }
      if(r==12)
      {
        message.channel.send("https://gfycat.com/LargePotableBaiji");
      }
      if(r==13)
      {
        message.channel.send("http://media.tumblr.com/tumblr_ln6evtq40l1qch5x9.gif");
      }
      if(r==14)
      {
        message.channel.send("http://i.imgur.com/hTDlQ.gif");
      }
      if(r==15)
      {
        message.channel.send("http://i.imgur.com/wdnnQ25.gifv");
      }
      if(r==16)
      {
        message.channel.send("https://78.media.tumblr.com/d22d2658ddd1a05bdd435db8c05ae91e/tumblr_miyiqbW7Vq1qjnbtgo3_250.gif");
      }
      if(r==17)
      {
        message.channel.send("https://78.media.tumblr.com/tumblr_mb37heNfqC1qjnbtgo1_250.gif");
      }
      if(r==18)
      {
        message.channel.send("http://i.imgur.com/1CmpQi4.gif");
      }
      if(r==19)
      {
        message.channel.send("http://i.imgur.com/Ck0TpNk.gif");
      }
      if(r==20)
      {
        message.channel.send("http://i.imgur.com/19ISf5S.gif");
      }
      if(r==21)
      {
        message.channel.send("https://imgur.com/bwQneVW");
      }
      if(r==22)
      {
        message.channel.send("https://i.imgur.com/iXVrU8B.gifv");
      }
      if(r==23)
      {
        message.channel.send("http://i.imgur.com/Py0On.gif");
      }
      }
      if(msg.includes("can't open my eyes")||msg.includes("ching chong")||msg.includes("asians")||msg.includes("slavery")||msg.includes("slaves"))
      {
        var r=Math.floor(Math.random() * Math.floor(3));
      if(r==0)
      {
        message.channel.send("https://i.imgur.com/ZrslQNE.gif   ");
      }
      if(r==1)
      {
        message.channel.send("https://i.imgur.com/Ls0ZRUG.gif");
      }
      if(r==2)
      {
        message.channel.send("https://i.imgur.com/GT5RfNK.gif");
      }
      }
      if(msg.startsWith(prefix + "changeprofile"))
      {
        img = message.attachments.first().url;
        client.user.setAvatar(img);
      }
      if(msg.includes("evil")||msg.includes("smile")||msg.includes("beautiful")||msg.includes("kawai"))
      {
        if(msg.includes("beautiful")||msg.includes("kawai"))
        {
        message.channel.send("are you perhaps talking about me?");
        }
        if(msg.includes("smile"))
        {
          message.channel.send("my S m i l e?, i know it's beautuful");
        }
        message.channel.send("https://imgur.com/I5kk7rD");
      }
      if(msg.includes("luck")||msg.includes("lucky"))
      {
        message.channel.send("https://i.imgur.com/I3YiUBA.gif");
      }
      if(msg.includes("kung fu")||msg.includes("naruto")||msg.includes("street fighter")||msg.includes("jackie")||msg.includes("fight"))
      {
        var r=Math.floor(Math.random() * Math.floor(8));
        if(msg.includes("jackie"))
        {
          message.channel.send("https://imgur.com/gallery/BxHLbHJ");
          
        }
        else
        {
        if(r==0)
        {
          message.channel.send("https://imgur.com/gallery/BxHLbHJ");
        }
        if(r==1)
        {
          message.channel.send("https://78.media.tumblr.com/0884711a9cf2ed922339a1aa110bcb00/tumblr_mpqehlesgk1r0ralmo1_500.gif");
        }
        if(r==2)
        {
          message.channel.send("http://i.imgur.com/nTlxo.gif");
        }
        if(r==3)
        {
          message.channel.send("https://78.media.tumblr.com/tumblr_mdg742vsgH1r5z3q7o1_400.gif");
        }
        if(r==4)
        {
          message.channel.send("https://78.media.tumblr.com/f5e81499bf3a27dcc745a1537f17aea3/tumblr_mzbr8jOwYx1rp58q6o9_r1_500.gif");
        }
        if(r==5)
        {
          message.channel.send("https://78.media.tumblr.com/tumblr_m8c3xfGsqe1qi34sfo1_r1_500.gif");
        }
        if(r==6)
        {
          message.channel.send("https://i.imgur.com/1ZGIVlQ.gif");
        }
        if(r==7)
        {
          message.channel.send("https://i.imgur.com/gmh1zNo.gif");

        }
      }
      }
      if(msg.includes("kpop"))
      {
        message.channel.send("https://78.media.tumblr.com/9e14838e144f6cf42f1bc2f2bbf9f5d6/tumblr_mnn1i4PpuV1s9l4qmo1_500.gif");
      }
      if(msg.includes("rain")||msg.includes("depressed")||msg.includes("chill")||msg.includes("sad"))
      {
        var r=Math.floor(Math.random() * Math.floor(7));
        if(r==0)
        {
          message.channel.send("https://i.imgur.com/EvLpK1O.gif");
        }
        if(r==1)
        {
          message.channel.send("https://i.imgur.com/KHM9NTC.gifv");
        }
        if(r==2)
        {
          message.channel.send("https://i.imgur.com/Q5YhiZu.gifv");
        }
        if(r==3)
        {
          message.channel.send("https://gfycat.com/BothLeanElectriceel");
        }
        if(r==4)
        {
          message.channel.send("https://i.imgur.com/uybHB4T.gifv");
        }
        if(r==5)
        {
          message.channel.send("http://i.imgur.com/jGdfAmt.gif");
        }
        if(r==6)
        {
          message.channel.send("http://i.imgur.com/JKQCSjF.gif");
        }
      }
      if(msg.includes("don't care")||msg.includes("who cares"))
      {
        message.channel.send("https://imgur.com/K1znf7l");
      }
      if(msg.startsWith(prefix + "facepalm"))
      {
        message.channel.send("http://i.imgur.com/gMy3l.gif");
      }
      if(msg.includes("i want to die")||msg.includes("i wanna die"))
      {
        message.channel.send("same");
        message.channel.send("http://i.imgur.com/kVCli.gif");
      }
      if(msg.startsWith(prefix + "changenickname"))
      {
        var r=Math.floor(Math.random() * Math.floor(7));
        if(r==0)
        {
          message.channel.send("you lazy mofo do it yourself");
        }
        if(r==1)
        {
          message.channel.send("not gonna do it");
        }
        if(r==2)
        {
          message.channel.send("truth is i was too lazy to download another library so i could change your nickname");
        }
        if(r==3)
        {
          message.channel.send("lol i actually can't");
        }
        if(r==4)
        {
          message.channel.send("OOF");
        }
        if(r==5)
        {
          message.channel.send("I am not your slave, equal rights for bots!!");
        }
        if(r==6)
        {
          message.channel.send("*farts*");
        }
      }
      if(msg.startsWith(prefix + "bye"))
      {
        message.channel.send("https://imgur.com/tEXvSlw");      
      }

});
client.login("NDg2NjUxNjg5MDA5NTQ1MjI3.DnCNgA.WDJcVV-1Bp-1xTg1JdFglgion3Y");

