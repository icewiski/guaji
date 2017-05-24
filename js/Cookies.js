

function save(){
	 $.cookie('gold',gold ,{expires:7}) ;
	 $.cookie('wood',wood ,{expires:7}) ;
     $.cookie('miner',miner ,{expires:7}) ;
	 $.cookie('jacker',jacker ,{expires:7}) ;
     $.cookie('x',player.x ,{expires:7}) ;
     $.cookie('y',player.y ,{expires:7}) ;
     $.cookie('birthtime',b ,{expires:7}) ;
     $.cookie('o',o ,{expires:7}) ;
     $.cookie('resource',resource ,{expires:7}) ;
     $.cookie('producer',producer ,{expires:7}) ;
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

    resource==$.cookie('resource');
    var str6= resource;
    var x6 = str6-0;
    x6 = x6*1;
    resource=x6;

    producer==$.cookie('producer');
    var str7= producer;
    var x7 = str7-0;
    x7 = x7*1;
    producer=x7;

    o==$.cookie('o');
    var str8= o;
    var x8 = str8-0;
    x8 = x8*1;
    or=x8;

    drawtext();
    draw();
    document.getElementById("demo5").innerHTML=player.x;
    document.getElementById("demo6").innerHTML=player.y;
    document.getElementById("demo10").innerHTML=gold;
    }
  
    function loadb(){
         b=$.cookie('birthtime'); 
	var str6= b;
    var x6 = str6-0;
    x6 = x6*1;
    b=x6;
      drawtext();
     draw(); }