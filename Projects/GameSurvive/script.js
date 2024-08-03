function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function chance(persent){
	if(Random(0, 100)<=persent){
	 	return true;
	}
	else
	{
		return false;
	}
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function setup(){
	frameRate(0.1);
}

function draw(){
	Info.innerHTML= "";
}

document.onkeypress = function (event){
	if(event.key=="r"){
		localStorage.clear();
		location.reload();
	}
}     

var Energy = document.getElementById("energy");

if(localStorage.getItem("Energy")){
	Energy.innerHTML= "Energy: " + localStorage["Energy"];
}
else{
	localStorage.setItem("Energy", 100);
}

