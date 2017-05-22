startdraw();
function startdraw(){
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  c.height=c.height
  ctx.beginPath();
  ctx.arc(player.x,player.y,2,0,2*Math.PI);
  ctx.stroke();
  }

function attack(){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    c.height=c.height
    ctx.beginPath();
    ctx.arc(player.x,player.y,player.range,0,2*Math.PI);
    ctx.stroke()
	  setTimeout(function refrash(){
   
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    c.height=c.height
    ctx.beginPath();
    ctx.arc(player.x,player.y,2,0,2*Math.PI);
    ctx.stroke()},1000);
    }

function left(){
  player.x=player.x-player.speed;
  document.getElementById("demo5").innerHTML=player.x;
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  c.height=c.height
  ctx.beginPath();
  ctx.arc(player.x,player.y,2,0,2*Math.PI);
  ctx.stroke();
  }


function right(){
  player.x=player.x+player.speed;
  document.getElementById("demo5").innerHTML=player.x;
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  c.height=c.height
  ctx.beginPath();
  ctx.arc(player.x,player.y,2,0,2*Math.PI);
  ctx.stroke();
  }

function up(){
  player.y=player.y-player.speed;
  document.getElementById("demo6").innerHTML=player.y;
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  c.height=c.height
  ctx.beginPath();
  ctx.arc(player.x,player.y,2,0,2*Math.PI);
  ctx.stroke();
  }

function down(){
  player.y=player.y+player.speed;
  document.getElementById("demo6").innerHTML=player.y;
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  c.height=c.height
  ctx.beginPath();
  ctx.arc(player.x,player.y,2,0,2*Math.PI);
  ctx.stroke();
  }