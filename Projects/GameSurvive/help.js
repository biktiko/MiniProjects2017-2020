//When count change

//energy
	localStorage["Energy"]--;
		Energy.innerHTML="Energy: " + localStorage["Energy"];

//wood
	localStorage["Wood"]++;
	Wood.innerHTML= "Woods: " + localStorage["Wood"];

//Rock
	localStorage["Rock"]++;
	Rock.innerHTML= "Rocks: " + localStorage["Rock"];

//Berrie
	BerrieCount++;
	localStorage.setItem("Berrie", BerrieCount);
	BerrieCountText.innerHTML="Berries: " + BerrieCount;

//Rope
	RopeCount++;
	localStorage.setItem("Rope", RopeCount);
	RopeCountText.innerHTML="Ropes: " + RopeCount;

