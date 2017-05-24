 var l=3;  //当前使用数组顺序
       var level=1
       var  lefthp=ssc[l];
document.getElementById("demo7").innerHTML=ssz[l];
document.getElementById("demo8").innerHTML=ssc[l];
document.getElementById("demo9").innerHTML=level;

var myVar3=setInterval(function(){d()},1000);
function drawlevel(){
     var c=document.getElementById("textCanvas");
    var ctx=c.getContext("2d");
    c.height=c.height
    ctx.font="20px Arial";
    ctx.fillText("等级:",10,40);
    ctx.fillText(level,150,40);
    ctx.fillText("秒伤:",10,80);
    ctx.fillText(ssz[l],150,80);
   
   ctx.fillText("敌人总血量:",10,120);
    ctx.fillText(ssc[l],150,120);
     ctx.fillText("敌人剩余血量:",10,160);
    ctx.fillText(lefthp,150,160);
   
    
   
    }

document.getElementById("demo9").innerHTML=ssz[l];

function d(){
     
    if (lefthp<=0){
       l=l+1;
       level=level+1; 
       lefthp=ssc[l]
        drawlevel();
    document.getElementById("demo7").innerHTML=ssc[l];
       }
       else{lefthp=lefthp-ssz[l];
           drawlevel();
    document.getElementById("demo8").innerHTML=ssz[l];    
    }

 
  

   
     }

