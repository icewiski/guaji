
var people=10;
var gold=1;
var wood=1;

var miner=1;
var jacker=1;

var collectspeed=1;
var collecttime=1000;
var myVar1=setInterval(function(){collectgold()},collecttime);
function collectgold(){
    gold =gold+ miner*collectspeed;
    wood =wood+ jacker*collectspeed;
    save();
    drawtext();
    
       }
function drawtext(){
     var c=document.getElementById("textCanvas");
    var ctx=c.getContext("2d");
    c.height=c.height
    ctx.font="20px Arial";
    ctx.fillText("gold:",110,80);
    ctx.fillText(gold,170,80);
    ctx.fillText("miner:",10,80);
    ctx.fillText(miner,70,80);
    document.getElementById("demo3").innerHTML=gold;
    ctx.fillText("wood:",110,40);
    ctx.fillText(wood,170,40);
    ctx.fillText("jacker:",10,40);
    ctx.fillText(jacker,70,40);
    document.getElementById("demo2").innerHTML=wood;

    ctx.fillText("population:",10,120);
    ctx.fillText(people,110,120);
    }

function minerup(){
    if (miner + jacker>people-1){return;}
     else{ miner=miner+1;
     save() ;
      drawtext();
    }
    }
function minerdown(){   
     if (miner + jacker<1||miner<1){return;}
      else{ miner=miner-1;
         save();
          drawtext();
          }
       }
function jackerup(){
     if (miner + jacker>people-1){return;}
   else{ jacker=jacker+1;
        save();
        drawtext();
        }
    }
function jackerdown(){
     if (miner + jacker<1||jacker<1){return;}
   else{ jacker=jacker-1;
        drawtext();
        save();}
    }