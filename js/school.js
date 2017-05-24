var sx = new Array();
var sy = new Array();
var sz = new Array();   //做题速度
var sa = new Array();
var sb = new Array();
var sc = new Array();   //总题量
var ss = new Array();   //升级时间
var sss = new Array();
var ssc = new Array(); 
var ssz = new Array(); 
var i=2;
var h=1;
var sl= new Array();


sx[0]=1;
sa[0]=3;



for (i=2;i<100;i++){  

    for(h=1;h<i;h++){
    sx[i]=h*h;
    sa[i]=h*h*3;
    }
    
    sy[i]=(Math.random()+1)* sx[i]+i;
    sb[i]=(Math.random()+10)* sa[i]+i;
          sz[i]=sx[i]+sy[i];
          sc[i]=sa[i]+sb[i];
          ss[i]=sc[i]/sz[i]*10;
        sss[i]=Math.round(ss[i]);
        ssz[i]=Math.round(sz[i]);
        ssc[i]=Math.round(sc[i]);
           document.getElementById("demo5").innerHTML=sl;
          document.getElementById("demo2").innerHTML=ssz;
          document.getElementById("demo3").innerHTML=ssc;
        document.getElementById("demo4").innerHTML=sss; 
        document.getElementById("demo10").innerHTML=ssc[51];    
        }