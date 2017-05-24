

var o =new Array();
o[0]=ofood=9;
o[1]=owood=7;
o[2]=ogold=5;
o[3]=oiron=3;
o[4]=ohouse=1;
o[5]=opopulation=2;

var resource1 = new Array(); 
resource1[0]=food1=1;       
resource1[1]=wood1=1;
resource1[2]=gold1=1;
resource1[3]=iron=1;
resource1[4]=house=1;
resource1[5]=population1=1;

var producer=new Array();
producer[0]=farmer=1;
producer[1]=cutter=1;
producer[2]=miner=1;
producer[3]=smither=1;
producer[4]=worker=1;
producer[5]=mother=1;

 var i=0;
//function collect(){
 //   resource[] =producer[]+ producer[]*o[];
 //       save();
 //   drawtext();
 //          }
 var myVar2=setInterval(function(){arrayprint()},1000);
function arrayprint(){
    
        for (i=0;i<6;i++){  
            resource1[i]=resource1[i]+producer[i]*o[i];
 //  document.getElementById("demo10").innerHTML=resource1;
        }
    }
