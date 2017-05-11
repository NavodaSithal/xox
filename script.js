var button =[];
for(var i=1;i<10;i++) button[i] = document.getElementById('canvas'+i);

var ctx =[];
for(var i=1;i<10; i++) ctx[i] = button[i].getContext('2d');

var bDisabled =[];
for(var i=1;i<10;i++) bDisabled[i] =false;

var isResult =false;
var content =[];

function loop(x)
{
	if(!bDisabled[x])
	{
		bDisabled[x]=true;
		button[x].style.opacity=0.6;
		//button[x].style.background='blue';
		content[x] ='x';
		
		button[x].style.Transform="rotateY(180deg)";
		button[x].style.webkitTransform="rotateY(180deg)";
		button[x].style.msTransform="rotateY(180deg)";
		button[x].style.mozTransform="rotateY(180deg)";
		button[x].style.oTransform="rotateY(180deg)";
		
		setTimeout(function()
	{
	button[x].style.background='blue';
	ctx[x].strokeStyle='#ffffff';
	ctx[x].lineWidth =3;
	ctx[x].beginPath();
	ctx[x].moveTo(10,10);
	ctx[x].lineTo(40,40);
	ctx[x].moveTo(40,10);
	ctx[x].lineTo(10,40);
	ctx[x].stroke();
	ctx[x].closePath();
	
	computerTurn();
	},300);
	setTimeout(checkWinner,1000);
	
	
	}
	
	}
	
	function computerTurn()
	{
		
		var r = Math.random();	
		
		   if (content[1]=='0' && content[2]=='0' && !bDisabled[3])draw0Steps(3);
			else if (content[1]=='0' && content[3]=='0' && !bDisabled[2])draw0Steps(2);
			else if (content[2]=='0' && content[3]=='0' && !bDisabled[1])draw0Steps(1);
			
			else if (content[4]=='0' && content[5]=='0' && !bDisabled[6])draw0Steps(6);
			else if (content[4]=='0' && content[6]=='0' && !bDisabled[5])draw0Steps(5);
			else if (content[5]=='0' && content[6]=='0' && !bDisabled[4])draw0Steps(4);
			
			else if (content[7]=='0' && content[8]=='0' && !bDisabled[9])draw0Steps(9);
			else if (content[7]=='0' && content[9]=='0' && !bDisabled[8])draw0Steps(8);
			else if (content[9]=='0' && content[8]=='0' && !bDisabled[7])draw0Steps(7);
			
			else if (content[1]=='0' && content[4]=='0' && !bDisabled[7])draw0Steps(7);
			else if (content[1]=='0' && content[7]=='0' && !bDisabled[4])draw0Steps(4);
			else if (content[4]=='0' && content[7]=='0' && !bDisabled[1])draw0Steps(1);
			
			else if (content[2]=='0' && content[5]=='0' && !bDisabled[8])draw0Steps(8);
			else if (content[2]=='0' && content[8]=='0' && !bDisabled[5])draw0Steps(5);
			else if (content[5]=='0' && content[8]=='0' && !bDisabled[2])draw0Steps(2);
			
			else if (content[3]=='0' && content[6]=='0' && !bDisabled[9])draw0Steps(9);
			else if (content[3]=='0' && content[9]=='0' && !bDisabled[6])draw0Steps(6);
			else if (content[9]=='0' && content[6]=='0' && !bDisabled[3])draw0Steps(3);
			
			else if (content[1]=='0' && content[5]=='0' && !bDisabled[9])draw0Steps(9);
			else if (content[1]=='0' && content[9]=='0' && !bDisabled[5])draw0Steps(5);
			else if (content[5]=='0' && content[9]=='0' && !bDisabled[1])draw0Steps(1);
			
			else if (content[3]=='0' && content[5]=='0' && !bDisabled[7])draw0Steps(7);
			else if (content[3]=='0' && content[7]=='0' && !bDisabled[5])draw0Steps(5);
			else if (content[5]=='0' && content[7]=='0' && !bDisabled[3])draw0Steps(3);
			
			
			

		    else if (content[1]=='x' && content[2]=='x' && !bDisabled[3])draw0Steps(3);
			else if (content[1]=='x' && content[3]=='x' && !bDisabled[2])draw0Steps(2);
			else if (content[2]=='x' && content[3]=='x' && !bDisabled[1])draw0Steps(1);
			
			else if (content[4]=='x' && content[5]=='x' && !bDisabled[6])draw0Steps(6);
			else if (content[4]=='x' && content[6]=='x' && !bDisabled[5])draw0Steps(5);
			else if (content[5]=='x' && content[6]=='x' && !bDisabled[4])draw0Steps(4);
			
			else if (content[7]=='x' && content[8]=='x' && !bDisabled[9])draw0Steps(9);
			else if (content[7]=='x' && content[9]=='x' && !bDisabled[8])draw0Steps(8);
			else if (content[9]=='x' && content[8]=='x' && !bDisabled[7])draw0Steps(7);
			
			else if (content[1]=='x' && content[4]=='x' && !bDisabled[7])draw0Steps(7);
			else if (content[1]=='x' && content[7]=='x' && !bDisabled[4])draw0Steps(4);
			else if (content[4]=='x' && content[7]=='x' && !bDisabled[1])draw0Steps(1);
			
			else if (content[2]=='x' && content[5]=='x' && !bDisabled[8])draw0Steps(8);
			else if (content[2]=='x' && content[8]=='x' && !bDisabled[5])draw0Steps(5);
			else if (content[5]=='x' && content[8]=='x' && !bDisabled[2])draw0Steps(2);
			
			else if (content[3]=='x' && content[6]=='x' && !bDisabled[9])draw0Steps(9);
			else if (content[3]=='x' && content[9]=='x' && !bDisabled[6])draw0Steps(6);
			else if (content[9]=='x' && content[6]=='x' && !bDisabled[3])draw0Steps(3);
			
			else if (content[1]=='x' && content[5]=='x' && !bDisabled[9])draw0Steps(9);
			else if (content[1]=='x' && content[9]=='x' && !bDisabled[5])draw0Steps(5);
			else if (content[5]=='x' && content[9]=='x' && !bDisabled[1])draw0Steps(1);
			
			else if (content[3]=='x' && content[5]=='x' && !bDisabled[7])draw0Steps(7);
			else if (content[3]=='x' && content[7]=='x' && !bDisabled[5])draw0Steps(5);
			else if (content[5]=='x' && content[7]=='x' && !bDisabled[3])draw0Steps(3);
			
			
		
		
			
			
		
		else if(r<0.1 && !bDisabled[1]) draw0Steps(1);
		else if(r<0.2 && !bDisabled[2]) draw0Steps(2);
		else if(r<0.3 && !bDisabled[3]) draw0Steps(3);
		else if(r<0.4 && !bDisabled[4]) draw0Steps(4);
		else if(r<0.5 && !bDisabled[5]) draw0Steps(5);
		else if(r<0.6 && !bDisabled[6]) draw0Steps(6);
		else if(r<0.7 && !bDisabled[7]) draw0Steps(7);
		else if(r<0.8 && !bDisabled[8]) draw0Steps(8);
		else if(r<0.9 && !bDisabled[9]) draw0Steps(9);
		else computerTurn();
	}
	
	function draw0Steps(x)
	{
		bDisabled[x]=true;
		button[x].style.opacity=0.7;
		
		content[x]='0';
		button[x].style.webkitTransform =" rotateX(180deg)";
		
		setTimeout(function()
		{
		button[x].style.background='red';
		ctx[x].strokeStyle='#ffffff';
		ctx[x].beginPath();
		ctx[x].lineWidth=3;
		ctx[x].arc(25,25,17,0,Math.PI*2,false);
		ctx[x].stroke();
		ctx[x].closePath();
		},300);
		
	}
	
	function checkWinner()
	{
		if(!isResult)
		{	    
			
			if(content[1]=='x' && content[2]=='x' && content[3]=='x' )showWinner('1');
			else if(content[4]=='x' && content[5]=='x' && content[6]=='x' )showWinner('1');
			else if(content[7]=='x' && content[8]=='x' && content[9]=='x' )showWinner('1');
			else if(content[1]=='x' && content[4]=='x' && content[7]=='x' )showWinner('1');
			else if(content[2]=='x' && content[5]=='x' && content[8]=='x' )showWinner('1');
			else if(content[3]=='x' && content[6]=='x' && content[9]=='x' )showWinner('1');
			else if(content[1]=='x' && content[5]=='x' && content[9]=='x' )showWinner('1');
			else if(content[3]=='x' && content[5]=='x' && content[7]=='x' )showWinner('1');
			
			else if(content[1]=='0' && content[2]=='0' && content[3]=='0' )showWinner('3');
			else if(content[4]=='0' && content[5]=='0' && content[6]=='0' )showWinner('3');
			else if(content[7]=='0' && content[8]=='0' && content[9]=='0' )showWinner('3');
			else if(content[1]=='0' && content[4]=='0' && content[7]=='0' )showWinner('3');
			else if(content[2]=='0' && content[5]=='0' && content[8]=='0' )showWinner('3');
			else if(content[3]=='0' && content[6]=='0' && content[9]=='0' )showWinner('3');
			else if(content[1]=='0' && content[5]=='0' && content[9]=='0' )showWinner('3');
			else if(content[3]=='0' && content[5]=='0' && content[7]=='0' )showWinner('3');
			
			else if(
				(content[1]=='x' || content[1]=='0' )&&
				(content[2]=='x' || content[2]=='0' )&&
				(content[3]=='x' || content[3]=='0' )&&
				(content[4]=='x' || content[4]=='0' )&&
				(content[5]=='x' || content[5]=='0' )&&
				(content[6]=='x' || content[6]=='0' )&&
				(content[7]=='x' || content[7]=='0' )&&
				(content[8]=='x' || content[8]=='0' )&&
				(content[9]=='x' || content[9]=='0' )
			)showWinner('2');
		}
		
	}
	
	function showWinner(x)
	{
		//alert(x);
		if (x==1)alert('You Win!');
		else if(x==2){		
			alert('Game is Draw. Play Again!');
			
		}
		else {
			document.getElementById("reloadButton").style.color="#CB4343";
			alert('You Loose');
		}
		isResult = true;
	}
