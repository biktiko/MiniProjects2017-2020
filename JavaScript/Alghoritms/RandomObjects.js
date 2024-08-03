function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

console.log(localStorage);

var matrix=[];
var save;

if(localStorage.length==0){
	localStorage.setItem("elements", "trianlge,square,rect,ellipse");
}

var elements = localStorage["elements"].split(",");

var rand1;
var rand2;
var RecTest=0;
var Rec=0;
var RecComb=[];
var newEl;

document.write("<br> Number of pairs <input id='count'> <button type='button' onclick='Count()'>Count</button> <h3>This program creates random pairs, Which consist of certain elements</h3>"); 

document.write("<h4> List of elements </h4> ")
	
for(var i=0; i<elements.length; i++){
	document.write((i+1) + ") " + elements[i] + " <input id='list'> <br>");
	document.getElementById('list').id = i;
}

	document.write("<br> <input id='newEl'> <button type='button' onclick='add()'> Add Element </button> <br>");
	document.write("<br> <input id='remove'> <button type='button' onclick='remove()'>Remove (Element number) </button> <br>");
	document.write("<br> <button type='button' onclick='Clear()'> Date clear </button>");
	document.write(" <button type='button' onclick='Clear2()'> Remove all elements </button>");
	document.getElementById('remove').style.width="31px";

function add(){
	newEl = document.getElementById('newEl').value;
	if(newEl){
		localStorage.setItem("elements", localStorage["elements"]+ ","+ newEl);
		location.reload();
	}
	else{
		alert("Call the name of the new element");
	}
}

function remove(){
	elements.splice(document.getElementById('remove').value-1, 1);
	localStorage.setItem("elements", elements);
	location.reload();
}

function Clear(){
	if(prompt("Are you sure? (print + for date deleting)")=="+"){
		localStorage.clear();
		location.reload();
	}
}

function Clear2(){
	if(prompt("Are you sure? (print + for date deleting)")=="+"){
		location.reload();
		localStorage.clear();
		alert("test");
	}
}

function Count(){

	var count;
	count = document.getElementById("count").value;

	for(var i = 0; i < count; i++){

		rand1 = Random(1, elements.length+1);
		rand2 = Random(1, elements.length+1);

		while(rand2==rand1){
			rand2 = Random(1,  elements.length+1);
		}

	 	matrix[i]=[];
		matrix[i][0] = rand1;
		matrix[i][1] = rand2;
	}

	for(var i = 0; i < count; i++){

		for(var n = 0;  n < count; n++){

			if(((matrix[i][0]==matrix[n][0] && matrix[i][1]==matrix[n][1]) ||  (matrix[i][0]==matrix[n][1] && matrix[i][1]==matrix[n][0])) && i!=n) RecTest++;
			
				if(RecTest>Rec){


					Rec=RecTest;

					RecComb[0]=matrix[i][0];
					RecComb[1]=matrix[i][1];

					for(var i=0; i<=elements.length+1; i++){
						if(RecComb[0]==i){
							RecComb[0]=elements[i-1];
						}
						if(RecComb[1]==i){
							RecComb[1]=elements[i-1];
						}
					}

				}

				
		}
		
		RecTest=0;
	}

		document.write("ID: trianlge-1, square-2, rect-3, ellipse-4" + "<br>");
		document.write("<h2>" + RecComb[0] + " and " + RecComb[1] + "</h2>");
		document.write("<h3> Maximum " + (Rec+1) + " same combinations <h3>");
		document.write('<button type="button" onclick="combinations()">Show all combinations</button>');
		document.write(" " + '<button type="button" onclick="reload()">Try again</button>');
		console.log(matrix);
		console.log(RecComb);
		
}

	function combinations(){

		for(var i=0; i<matrix.length; i++){

			var a;
			var b;


				for(var n=0; n<elements.length+1; n++){
					if(matrix[i][0]==n){
						a=elements[n-1];
					}
					if(matrix[i][1]==n){
						b=elements[n-1];
					}
				}

				document.write("<h5>" + (i+1) + ") " + a + " and " + b + "</h5>")
			}

		}

		function reload(){
			location.reload();
		}