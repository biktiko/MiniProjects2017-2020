a=0;

if(localStorage.getItem("test")>0){
	a=localStorage.getItem("test")
}
else{
	a=0;
}

document.addEventListener("keydown", moveUp);
function moveUp(){
	a++;
	localStorage.setItem("test", a);
	console.log(localStorage);
}

document.addEventListener("click", clear);
function clear(){
	localStorage.clear();
	a=0;
}