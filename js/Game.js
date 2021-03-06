function changeStatus()
{
	if(1==play)
	{
		document.getElementById("ssmsg").innerHTML = "\u263a Stop game by left clicking again<br>on red ball.";
	}
	else
	{
		document.getElementById("ssmsg").innerHTML = "\u263a Reload page to start new game.";
		document.getElementById("ssmsgdiv").setAttribute("style", "position:absolute; top:410px; left:139px; color:#009700;");
	}
}

var play=0; // Start and Stop game trigger
var redX=705; // Left of red dot
var redY=405; // Top of red dot
var redWidth=20;
var redHeight=20; // Always keep width and height same
var currentScore=0;
var bestScore=0; // in Cookie

function Game(e) /*Game entry point*/
{
	if(0==play)
	{
		play=1;
		/*var CookieScore = getCookieValue("CollisionBestScore");//Cookie
		if(CookieScore=="")
		{
			createCookie();//Cookie
			alert(CookieScore + "af1");
		}
		else
		{
			bestScore=parseInt(CookieScore, 10);//Cookie
			alert(bestScore + "af2");
		}*/
		SendObstacles();
		CollisionDetection();
		ScoreTimer();
		BestScoreChecker();
	}
	else
	{
		play=2;
		/*if(1==changeCookie)
			createCookie();//Cookie*/
	}
}

onmousemove = function(e)
{
	if(1==play)
	{
		redX=e.clientX-redWidth/2;
		redY=e.clientY-redHeight/2;
		if(e.clientX<(450+(redWidth/2)))
			redX=450;
		else if(e.clientX>(950-(redWidth/2)))
			redX=950-redWidth/2;
		if(e.clientY<(200+(redHeight/2)))
			redY=200;
		else if(e.clientY>(600-(redHeight/2)))
			redY=600-redHeight/2;
		document.getElementById('RedDot').setAttribute("style","position:absolute; top:" + redY + "px; left:" + redX + "px; width:" + redWidth + "px; height:" + redHeight + "px; background-color:#ff0000; border-radius:" + redWidth/2 + "px; z-index:1;");
	}
}

//redX=left=705 redY=top=405
//white dot1 = wd1_
var wd1_top_sourceMain=300, wd1_left_sourceMain=900, wd1_delayRange1=1, wd1_delayRange2=10, wd1_top_destRange1=200, wd1_top_destRange2=590, wd1_left_destRange1=450, wd1_left_destRange2=940, wd1_id="whiteDot1", wd1_stylestr="width:10px; height:10px; border-radius:5px; ";
//white dot2 = wd2_
var wd2_top_sourceMain=300, wd2_left_sourceMain=900, wd2_delayRange1=1, wd2_delayRange2=10, wd2_top_destRange1=200, wd2_top_destRange2=590, wd2_left_destRange1=450, wd2_left_destRange2=940, wd2_id="whiteDot2", wd2_stylestr="width:10px; height:10px; border-radius:5px; ";
//white dot3 = wd3_
var wd3_top_sourceMain=300, wd3_left_sourceMain=900, wd3_delayRange1=1, wd3_delayRange2=10, wd3_top_destRange1=200, wd3_top_destRange2=590, wd3_left_destRange1=450, wd3_left_destRange2=940, wd3_id="whiteDot3", wd3_stylestr="width:10px; height:10px; border-radius:5px; ";
//white circle = wc_
var wc_top_sourceMain=500, wc_left_sourceMain=700, wc_delayRange1=5, wc_delayRange2=15, wc_top_destRange1=200, wc_top_destRange2=550, wc_left_destRange1=450, wc_left_destRange2=900, wc_id="whiteCircle", wc_stylestr="width:50px; height:50px; border-radius:25px; ";
//white square = ws_
var ws_top_sourceMain=250, ws_left_sourceMain=600, ws_delayRange1=10, ws_delayRange2=20, ws_top_destRange1=200, ws_top_destRange2=570, ws_left_destRange1=450, ws_left_destRange2=920, ws_id="whiteSquare", ws_stylestr="width:30px; height:30px;";
//white rect = wr_
var wr_top_sourceMain=450, wr_left_sourceMain=550, wr_delayRange1=5, wr_delayRange2=10, wr_top_destRange1=200, wr_top_destRange2=580, wr_left_destRange1=450, wr_left_destRange2=800, wr_id="whiteRect", wr_stylestr="width:150px; height:20px;";
//white square1 = ws1_
var ws1_top_sourceMain=200, ws1_left_sourceMain=450, ws1_delayRange=1, ws1_id="whiteSquare1", ws1_stylestr="width:25px; height:25px;";// top_dest=575, left_dest=925
//white square2 = ws2_
var ws2_top_sourceMain=575, ws2_left_sourceMain=450, ws2_delayRange=1, ws2_id="whiteSquare2", ws2_stylestr="width:25px; height:25px;";// top_dest=575, left_dest=925
//white square3 = ws3_
var ws3_top_sourceMain=575, ws3_left_sourceMain=925, ws3_delayRange=1, ws3_id="whiteSquare3", ws3_stylestr="width:25px; height:25px;";// top_dest=575, left_dest=925
//white square4 = ws4_
var ws4_top_sourceMain=200, ws4_left_sourceMain=925, ws4_delayRange=1, ws4_id="whiteSquare4", ws4_stylestr="width:25px; height:25px;";// top_dest=575, left_dest=925
//white square1 = ws5_
var ws5_top_sourceMain=200, ws5_left_sourceMain=450, ws5_delayRange=1, ws5_id="whiteSquare5", ws5_stylestr="width:25px; height:25px;";// top_dest=575, left_dest=925
//white square2 = ws6_
var ws6_top_sourceMain=575, ws6_left_sourceMain=450, ws6_delayRange=1, ws6_id="whiteSquare6", ws6_stylestr="width:25px; height:25px;";// top_dest=575, left_dest=925
//white square3 = ws7_
var ws7_top_sourceMain=575, ws7_left_sourceMain=925, ws7_delayRange=1, ws7_id="whiteSquare7", ws7_stylestr="width:25px; height:25px;";// top_dest=575, left_dest=925
//white square4 = ws8_
var ws8_top_sourceMain=200, ws8_left_sourceMain=925, ws8_delayRange=1, ws8_id="whiteSquare8", ws8_stylestr="width:25px; height:25px;";// top_dest=575, left_dest=925

function SendObstacles()
{
	SendWhiteRandomTrajectory(wd1_top_sourceMain, wd1_left_sourceMain, wd1_delayRange1, wd1_delayRange2, wd1_top_destRange1, wd1_top_destRange2, wd1_left_destRange1, wd1_left_destRange2, wd1_id, wd1_stylestr);
	SendWhiteRandomTrajectory(wd2_top_sourceMain, wd2_left_sourceMain, wd2_delayRange1, wd2_delayRange2, wd2_top_destRange1, wd2_top_destRange2, wd2_left_destRange1, wd2_left_destRange2, wd2_id, wd2_stylestr);
	SendWhiteRandomTrajectory(wd3_top_sourceMain, wd3_left_sourceMain, wd3_delayRange1, wd3_delayRange2, wd3_top_destRange1, wd3_top_destRange2, wd3_left_destRange1, wd3_left_destRange2, wd3_id, wd3_stylestr);
	SendWhiteRandomTrajectory(wc_top_sourceMain, wc_left_sourceMain, wc_delayRange1, wc_delayRange2, wc_top_destRange1, wc_top_destRange2, wc_left_destRange1, wc_left_destRange2, wc_id, wc_stylestr);
	SendWhiteRandomTrajectory(ws_top_sourceMain, ws_left_sourceMain, ws_delayRange1, ws_delayRange2, ws_top_destRange1, ws_top_destRange2, ws_left_destRange1, ws_left_destRange2, ws_id, ws_stylestr);
	SendWhiteRandomTrajectory(wr_top_sourceMain, wr_left_sourceMain, wr_delayRange1, wr_delayRange2, wr_top_destRange1, wr_top_destRange2, wr_left_destRange1, wr_left_destRange2, wr_id, wr_stylestr);
	
	SendWhiteFixedTrajectory(ws1_top_sourceMain, ws1_left_sourceMain, ws1_delayRange, ws1_id, ws1_stylestr, "straight");
	SendWhiteFixedTrajectory(ws2_top_sourceMain, ws2_left_sourceMain, ws2_delayRange, ws2_id, ws2_stylestr, "straight");
	SendWhiteFixedTrajectory(ws3_top_sourceMain, ws3_left_sourceMain, ws3_delayRange, ws3_id, ws3_stylestr, "straight");
	SendWhiteFixedTrajectory(ws4_top_sourceMain, ws4_left_sourceMain, ws4_delayRange, ws4_id, ws4_stylestr, "straight");
	SendWhiteFixedTrajectory(ws5_top_sourceMain, ws5_left_sourceMain, ws5_delayRange, ws5_id, ws5_stylestr, "diagonal");
	SendWhiteFixedTrajectory(ws6_top_sourceMain, ws6_left_sourceMain, ws6_delayRange, ws6_id, ws6_stylestr, "diagonal");
	SendWhiteFixedTrajectory(ws7_top_sourceMain, ws7_left_sourceMain, ws7_delayRange, ws7_id, ws7_stylestr, "diagonal");
	SendWhiteFixedTrajectory(ws8_top_sourceMain, ws8_left_sourceMain, ws8_delayRange, ws8_id, ws8_stylestr, "diagonal");
}

function SendWhiteFixedTrajectory(top_source, left_source, delay, id, stylestr, direction)
{
	var top_dest, left_dest;
	if(direction=="straight")
	{
		if(top_source==200 && left_source==450)
			top_dest=575, left_dest=450;
		else if(top_source==575 && left_source==450)
			left_dest=925, top_dest=575;
		else if(top_source==575 && left_source==925)
			top_dest=200, left_dest=925;
		else if(top_source==200 && left_source==925)
			left_dest=450, top_dest=200;
	}
	else if(direction=="diagonal")
	{
		if(top_source==200 && left_source==450)
			top_dest=575, left_dest=925;
		else if(top_source==575 && left_source==925)
			left_dest=450, top_dest=200;
		else if(top_source==575 && left_source==450)
			left_dest=925, top_dest=200;
		else if(top_source==200 && left_source==925)
			left_dest=450, top_dest=575;
	}
	MoveWhiteFixedTrajectory(top_source, left_source, id, stylestr, delay, top_dest, left_dest, direction);
}

function MoveWhiteFixedTrajectory(top_source, left_source, id, stylestr, delay, top_dest, left_dest, direction)
{
	if(1==play)
	{
		setTimeout(function(){
			if(top_source<top_dest)
				top_source++;
			else if(top_source>top_dest)
				top_source--;
			if(left_source<left_dest)
				left_source++;
			else if(left_source>left_dest)
				left_source--;
			updateValuesForCollisionDetection(id, top_source, left_source);
			document.getElementById(id).setAttribute("style","position:absolute; top:" + top_source + "px; left:" + left_source + "px; " + stylestr + "background-color:#ffffff;");
			if(!(top_source==top_dest && left_source==left_dest))
				MoveWhiteFixedTrajectory(top_source, left_source, id, stylestr, delay, top_dest, left_dest, direction);
			else
				SendWhiteFixedTrajectory(top_source, left_source, delay, id, stylestr, direction);
		}, delay);
	}
}

function SendWhiteRandomTrajectory(top_source, left_source, delayRange1, delayRange2, top_destRange1, top_destRange2, left_destRange1, left_destRange2, id, stylestr)
{
	var delay=getRandomNumber(delayRange1, delayRange2);
	var top_dest=getRandomNumber(top_destRange1, top_destRange2), left_dest=getRandomNumber(left_destRange1, left_destRange2);
	//top_dest=200;  //toDebugExtremeMovementAlongBlackBoxEdges
	//left_dest=450; //toDebugExtremeMovementAlongBlackBoxEdges
	MoveWhiteRandomTrajectory(top_source, left_source, delayRange1, delayRange2, top_destRange1, top_destRange2, left_destRange1, left_destRange2, id, stylestr, delay, top_dest, left_dest);
}

function MoveWhiteRandomTrajectory(top_source, left_source, delayRange1, delayRange2, top_destRange1, top_destRange2, left_destRange1, left_destRange2, id, stylestr, delay, top_dest, left_dest)
{
	if(1==play)
	{
		setTimeout(function(){
			if(top_source<top_dest)
				top_source++;
			else if(top_source>top_dest)
				top_source--;
			if(left_source<left_dest)
				left_source++;
			else if(left_source>left_dest)
				left_source--;
			updateValuesForCollisionDetection(id, top_source, left_source);
			document.getElementById(id).setAttribute("style","position:absolute; top:" + top_source + "px; left:" + left_source + "px; " + stylestr + "background-color:#ffffff;");
			if(!(top_source==top_dest && left_source==left_dest))
				MoveWhiteRandomTrajectory(top_source, left_source, delayRange1, delayRange2, top_destRange1, top_destRange2, left_destRange1, left_destRange2, id, stylestr, delay, top_dest, left_dest);
			else
				SendWhiteRandomTrajectory(top_source, left_source, delayRange1, delayRange2, top_destRange1, top_destRange2, left_destRange1, left_destRange2, id, stylestr);
		}, delay);
	}
}

function updateValuesForCollisionDetection(id, top_source, left_source)
{
	if(id=="whiteDot1")
		wd1_top_sourceMain=top_source, wd1_left_sourceMain=left_source;
	else if(id=="whiteDot2")
		wd2_top_sourceMain=top_source, wd2_left_sourceMain=left_source;
	else if(id=="whiteDot3")
		wd3_top_sourceMain=top_source, wd3_left_sourceMain=left_source;
	else if(id=="whiteCircle")
		wc_top_sourceMain=top_source, wc_left_sourceMain=left_source;
	else if(id=="whiteSquare")
		ws_top_sourceMain=top_source, ws_left_sourceMain=left_source;
	else if(id=="whiteRect")
		wr_top_sourceMain=top_source, wr_left_sourceMain=left_source;
	else if(id=="whiteSquare1")
		ws1_top_sourceMain=top_source, ws1_left_sourceMain=left_source;
	else if(id=="whiteSquare2")
		ws2_top_sourceMain=top_source, ws2_left_sourceMain=left_source;
	else if(id=="whiteSquare3")
		ws3_top_sourceMain=top_source, ws3_left_sourceMain=left_source;
	else if(id=="whiteSquare4")
		ws4_top_sourceMain=top_source, ws4_left_sourceMain=left_source;
	else if(id=="whiteSquare5")
		ws5_top_sourceMain=top_source, ws5_left_sourceMain=left_source;
	else if(id=="whiteSquare6")
		ws6_top_sourceMain=top_source, ws6_left_sourceMain=left_source;
	else if(id=="whiteSquare7")
		ws7_top_sourceMain=top_source, ws7_left_sourceMain=left_source;
	else if(id=="whiteSquare8")
		ws8_top_sourceMain=top_source, ws8_left_sourceMain=left_source;
}

function CollisionDetection()
{
	DetectCollision("whiteDot1");
	DetectCollision("whiteDot2");
	DetectCollision("whiteDot3");
	DetectCollision("whiteCircle");
	DetectCollision("whiteSquare");
	DetectCollision("whiteRect");
	DetectCollision("whiteSquare1");
	DetectCollision("whiteSquare2");
	DetectCollision("whiteSquare3");
	DetectCollision("whiteSquare4");
	DetectCollision("whiteSquare5");
	DetectCollision("whiteSquare6");
	DetectCollision("whiteSquare7");
	DetectCollision("whiteSquare8");
}

function DetectCollision(id)
{
	var x1, y1, x2, y2; //centre points(not top,left)
	var dia, typeOfCollision, isCollision=false;
	var rect_width, rect_height;
	if(play==1)
	{
		setTimeout(function()
		{
			x1=redX+redWidth/2, y1=redY+redHeight/2;
			dia=redWidth/2;
			if(id=="whiteDot1")
				x2=wd1_left_sourceMain+5, y2=wd1_top_sourceMain+5, dia+=5, typeOfCollision=0;
			else if(id=="whiteDot2")
				x2=wd2_left_sourceMain+5, y2=wd2_top_sourceMain+5, dia+=5, typeOfCollision=0;
			else if(id=="whiteDot3")
				x2=wd3_left_sourceMain+5, y2=wd3_top_sourceMain+5, dia+=5, typeOfCollision=0;
			else if(id=="whiteCircle")
				x2=wc_left_sourceMain+25, y2=wc_top_sourceMain+25, dia+=25, typeOfCollision=0;
			else if(id=="whiteSquare")
				x2=ws_left_sourceMain+15, y2=ws_top_sourceMain+15, rect_width=30, rect_height=30, typeOfCollision=1;
			else if(id=="whiteRect")
				x2=wr_left_sourceMain+75, y2=wr_top_sourceMain+10, rect_width=150, rect_height=20, typeOfCollision=1;
			else if(id=="whiteSquare1")
				x2=ws1_left_sourceMain+12, y2=ws1_top_sourceMain+12, rect_width=25, rect_height=25, typeOfCollision=1;
			else if(id=="whiteSquare2")
				x2=ws2_left_sourceMain+12, y2=ws2_top_sourceMain+12, rect_width=25, rect_height=25, typeOfCollision=1;
			else if(id=="whiteSquare3")
				x2=ws3_left_sourceMain+12, y2=ws3_top_sourceMain+12, rect_width=25, rect_height=25, typeOfCollision=1;
			else if(id=="whiteSquare4")
				x2=ws4_left_sourceMain+12, y2=ws4_top_sourceMain+12, rect_width=25, rect_height=25, typeOfCollision=1;
			else if(id=="whiteSquare5")
				x2=ws5_left_sourceMain+12, y2=ws5_top_sourceMain+12, rect_width=25, rect_height=25, typeOfCollision=1;
			else if(id=="whiteSquare6")
				x2=ws6_left_sourceMain+12, y2=ws6_top_sourceMain+12, rect_width=25, rect_height=25, typeOfCollision=1;
			else if(id=="whiteSquare7")
				x2=ws7_left_sourceMain+12, y2=ws7_top_sourceMain+12, rect_width=25, rect_height=25, typeOfCollision=1;
			else if(id=="whiteSquare8")
				x2=ws8_left_sourceMain+12, y2=ws8_top_sourceMain+12, rect_width=25, rect_height=25, typeOfCollision=1;
			if(typeOfCollision==0)
				isCollision=CircleCircleCollisionCondtion(x1, y1, x2, y2, dia);
			else if(typeOfCollision==1)
				isCollision=CircleRectCollisionCondtion(x1, y1, redWidth/2, x2, y2, rect_width, rect_height);
			if(true==isCollision)
				CollisionDetected();
			DetectCollision(id);
		}, 1);
	}
}

function CircleRectCollisionCondtion(circle_x, circle_y, circle_r, rect_x, rect_y, rect_width, rect_height)
{
	var circleDistance_x = Math.abs(circle_x - rect_x);
    var circleDistance_y = Math.abs(circle_y - rect_y);
    if (circleDistance_x > (rect_width/2 + circle_r)) { return false; }
    if (circleDistance_y > (rect_height/2 + circle_r)) { return false; }
    if (circleDistance_x <= (rect_width/2)) { return true; } 
    if (circleDistance_y <= (rect_height/2)) { return true; }
    var cornerDistance_sq = (circleDistance_x - rect_width/2)^2 +
                         (circleDistance_y - rect_height/2)^2;
    return (cornerDistance_sq <= (circle_r^2));
}

function CircleCircleCollisionCondtion(x1, y1, x2, y2, dia)
{
	return (Math.sqrt( ( x2-x1 ) * ( x2-x1 )  + ( y2-y1 ) * ( y2-y1 ) )<dia);
}

function CollisionDetected()
{
	play=2;
	document.getElementById("ssmsg").innerHTML = "\u263a Reload page to start new game.";
	document.getElementById("currS").setAttribute("style", "text-align:justify;text-align:center; color:#009700; font-size:20px");
	document.getElementById("bestS").setAttribute("style", "text-align:justify;text-align:center; color:#009700; font-size:20px");
	document.getElementById("ssmsgdiv").setAttribute("style", "position:absolute; top:410px; left:139px; color:#009700;");
	callBlink();
}

var show=1;
function callBlink()
{	
	setTimeout(function(){
		if(show)
		{
			show=0;
			document.getElementById("cd").setAttribute("style", "position:absolute; top:375px; left:575px; color:#009700; z-index:0;");
		}
		else
		{
			show=1;
			document.getElementById("cd").setAttribute("style", "position:absolute; top:375px; left:575px; color:#009700; z-index:1;");
		}
		callBlink();
		}, 1000);
}

function getRandomNumber(range1, range2)
{
	var x = (Math.floor(Math.random()*100000));
	x %= (range2-range1+1);
	x += range1;
	return x;
}

function ScoreTimer()
{
	if(1==play)
	{
		var delay=100;
		setTimeout(function(){
			currentScore+=1;
			document.getElementById("currS").innerHTML=currentScore;
			ScoreTimer();
		}, delay);
	}
}

var changeCookie=0;

function BestScoreChecker()
{
	var delay=10;
	setTimeout(function(){
		if(currentScore>bestScore)
		{
			bestScore=currentScore;
			document.getElementById("bestS").innerHTML=bestScore;
			changeCookie=1;
		}
		BestScoreChecker();
	}, delay);
}

//Cookie Code
//http://www.w3schools.com/js/js_cookies.asp

/*function getCookieValue(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(',');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
		alert(c + "gg" + i);
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function createCookie()
{
	var cname="CollisionBestScore", cvalue=bestScore;
    var d = new Date();
    d.setTime(d.getTime() + (10000*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
	//alert( cname + "=" + cvalue + "; " + expires);
    document.cookie = cname + "=" + cvalue + "; " + expires;
}*/
//todo Cookies,favicon,share,donate