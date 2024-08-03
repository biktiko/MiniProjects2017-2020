

var Info = document.getElementById("info");

                              /////////// 1 - stick/////////////////////


var Wood = document.getElementById("wood");

if(localStorage.getItem("Wood")){
	Wood.innerHTML= "Woods: " + localStorage["Wood"];
}
else{
	localStorage.setItem("Wood", 0);
}

function StickCollect(){
	if(localStorage["Energy"]>0){
		localStorage["Energy"]--;
		Energy.innerHTML="Energy: " + localStorage["Energy"];
		localStorage["Wood"]++;
		Wood.innerHTML= "Woods: " + localStorage["Wood"];
	}
}

function StickInfo(){
	Info.innerHTML= "Stick: <br> -1 Energy <br> +1 Wood";
}

											/////////// 2 - pebble /////////////////////


var Rock=document.getElementById("rock");

if(localStorage.getItem("Rock")){
	Rock.innerHTML= "Rocks: " + localStorage["Rock"];
}
else{
	localStorage.setItem("Rock", 0);
}

function PebbleCollect(){
	if(localStorage["Pickaxe"]!="false"){
		if(localStorage["Energy"]>(AxeEffection-1)){

			for(var i=0; i<AxeEffection; i++){
				sleep(1000);
				localStorage["Energy"]--;
				Energy.innerHTML="Energy: " + localStorage["Energy"];
			
				if(i==(PickaxeEffection-1)){
					alert("+" + 1 + " rock");
					localStorage["Rock"]++;
					Rock.innerHTML = "Rocks: " + localStorage["Rock"];
				}
				else{
					alert("left " + ((PickaxeEffection-1)-i) + " hits");
				}
			}

		
		}
	}
}

function PebbleInfo(){
	if(localStorage["Pickaxe"]!="false"){
		Info.innerHTML= "Pebble: 3 hits <br> -3 Energy <br> +1 Rock ";
		
	}
	else
	{
		Info.innerHTML= "Pebble: (need Pickaxe) <br> -1 Energy <br> +1 Rock <br>";
	}
}

				  /////////// 3 - bush /////////////////////
//Patrastel animacia


Berrie=document.getElementById("berrie");
Rope=document.getElementById("rope");

var Bush=document.getElementById("bush");

if(localStorage.getItem("Berrie")){
	Berrie.innerHTML= "Berries: " + localStorage["Berrie"];
}
else{
	localStorage.setItem("Berrie", 0);
}

if(localStorage.getItem("Rope")){
	Rope.innerHTML= "Ropes: " + localStorage["Rope"];
}
else{
	localStorage.setItem("Rope", 0);
} 

function BushCollect(){
	if(localStorage["Energy"]>1){
			localStorage["Energy"]-=2
			Energy.innerHTML="Energy: " + localStorage["Energy"];
			localStorage.setItem("Energy", localStorage["Energy"]);

			if(chance(20)){
					localStorage["Berrie"]++
					Berrie.innerHTML="Berries: " + localStorage["Berrie"];
			}
			if(chance(10)){		
				localStorage["Rope"]++;
				Rope.innerHTML="Ropes: " + localStorage["Rope"];
			}		
	}
}

function BushInfo(){
	Info.innerHTML= "Bush: <br> -2 energy <br> 20% > +1 berrie <br> 10% > +1rope";
}

function EatBerrie(){
	if(localStorage["Berrie"]>0){
		localStorage["Berrie"]--;
		for(i=0; i<4; i++){
			localStorage["Energy"]++;
		}
		Energy.innerHTML="Energy: " + localStorage["Energy"];
		Berrie.innerHTML="Berries: " + 	localStorage["Berrie"];
	}
}

	///////////////////////////// 4 - tree //////////////////////////////////////


var Apple=document.getElementById("apple");

if(localStorage.getItem("Apple")){
	Apple.innerHTML= "Apples: " + localStorage["Apple"];
}
else{
	localStorage.setItem("Apple", 0);
} 

function CutTree(){
	if(localStorage.getItem("Axe")){
		if(localStorage["Energy"]>(AxeEffection-1)){

			for(var i=0; i<AxeEffection; i++){
				sleep(1000);
				localStorage["Energy"]--;
				Energy.innerHTML="Energy: " + localStorage["Energy"];
			
				if(i==(AxeEffection-1)){
					var n = Random(7, 10);
					alert("+" + n + " wood");
						for(i=0; i<n; i++){
							localStorage["Wood"]++;
						}
						
						Wood.innerHTML= "Woods: " + localStorage["Wood"] ;
						
						if(chance(20)){
							localStorage["Apple"]++;
							Apple.innerHTML="Apples: " +localStorage["Apple"];
						}
				}
				else{
					alert("left " + ((AxeEffection-1)-i) + " hits");
				}
			}
		}
	}
}

function TreeInfo(){

	if(localStorage["Axe"]!="false"){
		Info.innerHTML= "Tree: " + AxeEffection + " hits <br> -" + AxeEffection  + " Energy <br> +7-9 Wood <br> 20% > +1 apple";
	}
	else
	{
		Info.innerHTML= "Tree: (need Axe) <br> +7-9 Wood <br> 20% > +1 apple";
	}

}

function EatApple(){
	if(localStorage["Apple"]>0){
		localStorage["Apple"]--;
		for(i=0; i<6; i++){
			localStorage["Energy"]++;
		}
		Apple.innerHTML="Energy: " + localStorage["Apple"];
		Energy.innerHTML="Energy: " + localStorage["Energy"];
	}
}

 
/////////////////////// 4 - Axe //////////////////////////////

	var AxeEffection;
	var Axe = document.getElementById("AxeImage");

	if(!localStorage.getItem("Axe")){
		localStorage.setItem("Axe", "false");
	}
	if(localStorage["Axe"]=="wooden"){
		AxeEffection=5;
		Axe.style.marginTop="38px";
		Axe.src="img/StoneAxe.png";
		document.getElementById("AxeName").innerHTML="Stone Axe";
		document.getElementById("AxeDescription").innerHTML="-2 Woods <br> -3 Rocks <br> -25 Energies ";
	}
	if(localStorage["Axe"]=="stone"){
		
		AxeEffection=4;
		Axe.style.marginTop="38px";
		Axe.src="img/StoneAxe.png";
		document.getElementById("AxeName").innerHTML="Iron Axe";
		document.getElementById("AxeDescription").innerHTML="-2 Woods <br> -3 Rocks <br> -25 Energies ";
	}


function BuyAxe(){
	if(localStorage["Axe"]=="false"){
		if(localStorage["Wood"]>1 && localStorage["Rope"]>0 && localStorage["Energy"]>9){
			localStorage["Wood"]-=2
			Wood.innerHTML= "Woods: " + localStorage["Wood"] ;
			localStorage["Rope"]--;
			Rope.innerHTML= "Ropes: " + localStorage["Rope"] ;
			localStorage.setItem("Axe", "wooden");
			//document.getElementById("WoodenAxe").outerHTML = "";
			localStorage["Energy"]-=10;
			
			Energy.innerHTML="Energy: " + localStorage["Energy"];

			Axe.src="img/StoneAxe.png";
			AxeEffection=4;
			Axe.style.marginTop="38px";
			document.getElementById("AxeName").innerHTML="Stone Axe";
			document.getElementById("AxeDescription").innerHTML="-2 Woods <br> -3 Rocks <br> -25 Energies ";
		}
	}

	if(localStorage["Axe"]=="wooden"){
		if(localStorage["Wood"]>1 && localStorage["Rock"]>2 && localStorage["Energy"]>14){
			localStorage["Wood"]-=2
			Wood.innerHTML= "Woods: " + localStorage["Wood"] ;
			localStorage["Rock"]-=3;
			Rope.innerHTML= "Rocks: " + localStorage["Rock"] ;
			localStorage.setItem("Axe", "stone");
			//document.getElementById("WoodenAxe").outerHTML = "";
			localStorage["Energy"]-=15;
			
			Energy.innerHTML="Energy: " + localStorage["Energy"];
			AxeEffection=3;
			Axe.src="img/StoneAxe.png";
			Axe.style.marginTop="38px";
		}
	}
}

///////////////////////// 5 - pickaxe ///////////////////////////////////

var PickaxeEffection;
var Pickaxe = document.getElementById("PickaxeImage");

	if(!localStorage.getItem("Pickaxe")){
		localStorage.setItem("Pickaxe", "false");
	}
	if(localStorage["Pickaxe"]=="wooden"){
		
		PickaxeEffection=4;
		Pickaxe.src="img/StonePickaxe.png";
		document.getElementById("PickaxeName").innerHTML="Stone Pickaxe";
		document.getElementById("PickaxeDescription").innerHTML="-2 Woods <br> -3 Rocks <br> -30 Energies ";
	}
	if(localStorage["Pickaxe"]=="stone"){
		PickaxeEffection=3;
		Pickaxe.src="img/StonePickaxe.png";
		document.getElementById("PickaxeName").innerHTML="Irnon Pickaxe";
		document.getElementById("PickaxeDescription").innerHTML="-2 Woods <br> -3 Rocks <br> -30 Energies ";
	}


function BuyPickaxe(){
	if(localStorage["Pickaxe"]=="false"){
		if(localStorage["Wood"]>2 && localStorage["Rope"]>1 && localStorage["Energy"]>14){
			localStorage["Wood"]-=3;
			Wood.innerHTML= "Woods: " + localStorage["Wood"] ;
			localStorage["Rope"]-=2;
			Rope.innerHTML= "Ropes: " + localStorage["Rope"] ;
			localStorage.setItem("Pickaxe", "wooden");
			//document.getElementById("WoodenPickaxe").outerHTML = "";
			localStorage["Energy"]-=15;
			
			Energy.innerHTML="Energy: " + localStorage["Energy"];

			Pickaxe.src="img/StonePickaxe.png";
			document.getElementById("PickaxeName").innerHTML="Stone Pickaxe";
			document.getElementById("PickaxeDescription").innerHTML="-2 Woods <br> -3 Rocks <br> -30 Energies ";
		}
	}
	if(localStorage["Pickaxe"]=="wooden"){
		if(localStorage["Wood"]>1 && localStorage["Rock"]>2 && localStorage["Energy"]>29){
			localStorage["Wood"]-=2;
			Wood.innerHTML= "Woods: " + localStorage["Wood"] ;
			localStorage["Rock"]-=3;
			Rope.innerHTML= "Rocks: " + localStorage["Rock"] ;
			localStorage.setItem("Pickaxe", "stone");
			localStorage["Energy"]-=30;
			
			Energy.innerHTML="Energy: " + localStorage["Energy"];

			//Axe.src="img/StoneAxe.png";
		}
	}
}


