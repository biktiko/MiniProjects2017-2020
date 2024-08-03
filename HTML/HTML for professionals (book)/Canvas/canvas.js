
function initiate(){
    var elem=document.getElementById('canvas');

    canvas=elem.getContext('2d');
    canvas.beginPath();
    radian = Math.PI/180*180
    canvas.arc(100,100,50,0, radian, false);

    canvas.moveTo(50,50);
    canvas.quadraticCurveTo(100, 125, 50, 200);
    canvas.moveTo(250,50);
    canvas.bezierCurveTo(200, 125, 300, 125, 250, 200);

    canvas.stroke();

    canvas.arc(200,150,50,0,Math.PI*2, false);
    canvas.lineWidth=10;
    canvas.lineCap="round";
    canvas.beginPath();
    canvas.moveTo(230,150);
    canvas.arc(200,150,30,0,Math.PI, false);
    canvas.stroke();
    canvas.lineWidth=5;
    canvas.lineJoin="miter";
    canvas.beginPath();
    canvas.moveTo(195,135);
    canvas.lineTo(215,155);
    canvas.lineTo(195,155);

    canvas.font="bold 24px verdana, sans-serif";
    canvas.textAlign="start";
    canvas.fillText("my message", 100,100);

    var size = canvas.measureText("my message");
    canvas.strokeRect(100, 100, size.width, 24)
}

window.addEventListener("load", initiate, false);

