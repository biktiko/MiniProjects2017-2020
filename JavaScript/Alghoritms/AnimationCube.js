document.write("<canvas id='canvas' width='20' height='200' style: background-color: green; margin-left:0px; margin-top:250px></canvas>");

var cvs= document.getElementById('canvas');

var margin = 0;
var direction = 2;

var right = setInterval(MarginLeft, 5);

function MarginLeft(){

	cvs.style.marginLeft= margin + "px";
	margin+=direction;

	if(cvs.style.marginLeft=="1240px"){
		direction=-2;
		cvs.style.backgroundColor="red";
	}
	if(cvs.style.marginLeft=="0px"){
		direction=2;
		cvs.style.backgroundColor="blue";
	}
}




