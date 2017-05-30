       var l=3;  //当前使用数组顺序
       var level=1;
       var  lefthp=ssc[l];
var dplus = 10;
var eplus = 10;

var myVar3=setInterval(function(){d()},1000);
function drawlevel(){
     var c=document.getElementById("textCanvas1");
    var ctx=c.getContext("2d");
    c.height=c.height
    var miaoshang=sx[l]+dplus;
    var dianji=ssz[l]+eplus;
    ctx.font="20px Arial";
    ctx.fillText("等级:",10,40);
    ctx.fillText(level,150,40);
    ctx.fillText("秒伤:",10,80);
    ctx.fillText(miaoshang,150,80);
   
   ctx.fillText("敌人总血量:",10,120);
    ctx.fillText(ssc[l],150,120);
     ctx.fillText("敌人剩余血量:",10,160);
    ctx.fillText(lefthp,150,160);
      ctx.fillText("点击伤害:",10,200);
    ctx.fillText(dianji,150,200);
   save();
    
   
    }
function d(){

    if (lefthp<=0){
    
       l=l+1;
        level=level+1; 
        people=level;
       lefthp=ssc[l]
        drawlevel();
          }
       else{lefthp= lefthp-sx[l]-dplus;
           if(lefthp<=0){lefthp=0}
           drawlevel();
    }
 
     }

function e(){

    if (lefthp<=0){
    
       l=l+1;
        level=level+1; 
        people=level;
       lefthp=ssc[l]
        drawlevel();
          }
       else{lefthp= lefthp-ssz[l]-dplus;
           if(lefthp<=0){lefthp=0}
           drawlevel();
    }
 
     }

function dpluss(){
   if(gold>=100){ gold=gold-100;
    dplus=dplus+10;
    save();
    drawtext();
   }
   else {return}
   }

function epluss(){
  if (wood>=100){
   wood=wood-100;
   eplus=eplus+20;
    save();
  drawtext();}
  else {return}
}