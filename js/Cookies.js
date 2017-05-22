

function save(){
	 $.cookie('gold',gold ,{expires:7}) ;
	 $.cookie('wood',wood ,{expires:7}) ;
     $.cookie('miner',miner ,{expires:7}) ;
	 $.cookie('jacker',jacker ,{expires:7}) ;
     $.cookie('x',player.x ,{expires:7}) ;
     $.cookie('y',player.y ,{expires:7}) ;
	  document.getElementById("demo10").innerHTML=gold;
       drawtext();
	 }
function load(){
	gold=$.cookie('gold'); 
	var str= gold;
    var x = str-0;
    x = x*1;
    gold=x;

    wood=$.cookie('wood'); 
	var str1= wood;
    var x1 = str1-0;
    x1 = x1*1;
    wood=x1;
    
    miner=$.cookie('miner'); 
	var str2= miner;
    var x2 = str2-0;
    x2 = x2*1;
    miner=x2;

    jacker=$.cookie('jacker'); 
	var str3= jacker;
    var x3 = str3-0;
    x3 = x3*1;
    jacker=x3;

    player.x=$.cookie('x'); 
	var str4= player.x;
    var x4 = str4-0;
    x4 = x4*1;
    player.x=x4;

     player.y=$.cookie('y'); 
	var str5= player.y;
    var x5 = str5-0;
    x5 = x5*1;
    player.y=x5;
     
     drawtext();

     document.getElementById("demo10").innerHTML=gold;
    }