//程式邏輯，主要程式運作 // $()表用到jQuery
var mapArray,ctx,currentX,currentY,imgMe,imgMountain,imgEnemy;

$(document).ready(function(){
    mapArray=[0,1,1,0,0,0,3,1,2];
    ctx=$("#canvas")[0].getContext("2d");
    
    //放主角
    imgMe=new Image();
    imgMe.src="0418_game/images/spriteSheet.png";
    currentX=0;
    currentY=0;
    imgMe.onload=function()
    {
        ctx.drawImage(imgMe,0,0,80,130,currentX,currentY,200,200);
    };
    //放障礙物、敵人
    imgMountain=new Image();
    imgMountain.src="0418_game/images/material.png";
    imgEnemy=new Image();
    imgEnemy.src="0418_game/images/Enemy.png";

    imgMountain.onload=function()
    {
        imgEnemy.onload=function()
        {
            for(var x in mapArray)
            {
                if(mapArray[x]==1) 
                {
                    ctx.drawImage(imgMountain,32,65,32,32, x%3*200 , Math.floor(x/3)*200 ,200,200); 
                }
                else if(mapArray[x]==3) 
                {
                    ctx.drawImage(imgEnemy,7,40,104,135, x%3*200 , Math.floor(x/3)*200 ,200,200); 
                }
            }
        };
    };
});

$(document).keydown(function(event){
    var nextX,nextY,nextBlock,direction;
    event.preventDefault();
    
    switch(event.which)
    {
        case 37://往左
            nextX=currentX-200;
            nextY=currentY;
            direction=175;
            break;
        case 38://往上
            nextX=currentX;
            nextY=currentY-200;
            direction=355;
            break;
        case 39://往右
            nextX=currentX+200;
            nextY=currentY;
            direction=540;
            break;
        case 40://往下
            nextX=currentX;
            nextY=currentY+200;
            direction=0;
            break;
        default:
            return;
    }
    
    if(nextX<=400 && nextX>=0 && nextY<=400 && nextY>=0)
    {nextBlock=nextX/200+nextY/200*3;}
    else {nextBlock=-1;}
    
    ctx.clearRect(currentX,currentY,200,200);
    
    if(nextBlock==-1 || mapArray[nextBlock]==1 || mapArray[nextBlock]==3){}
    else
    {
        $("#talkbox").text("");
        currentX=nextX;
        currentY=nextY;
    }
    
    ctx.drawImage(imgMe,direction,0,80,130,currentX,currentY,200,200);
    
    switch(mapArray[nextBlock])
    {
        case undefined:
            $("#talkbox").text("撞牆!");
            break;
        case 1:
            $("#talkbox").text("撞山!");
            break;
        case 2:
            $("#talkbox").text("成功!");
            break;
        case 3:
            $("#talkbox").text("哈囉!");
            break;
    }
});