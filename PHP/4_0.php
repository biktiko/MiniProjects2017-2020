<?php
					
	$i=0;

	while($i <= 8){
	$a=0;
		while($a <= $i){
			echo "*";
			$a++;
		}
	echo "<br>";
	$i++;
	}

	echo "<br>";
	echo "<br>";
	
	$i=8;

	while($i >= 0){
	$a=0;
		while($a <= $i){
			echo "*";
			$a++;
		}
	echo "<br>";
	$i--;
	}

	echo "<br>";
	echo "<br>";
	

	$i=8;

	while($i >= 0){
	$a=0;
		
		for($n =0; $n<8-$i; $n++){
			echo "&nbsp";
			echo "&nbsp";		
		}

		while($a <= $i){
			echo "*";
			$a++;
		}
	echo "<br>";
	$i--;
	}

	echo "<br>";
	echo "<br>";

	$i=0;

	while($i <= 8){
	$a=0;

		for($n =0; $n<8-$i; $n++){
			echo "&nbsp";
			echo "&nbsp";		
		}

		while($a <= $i){
			echo "*";
			$a++;
		}
	echo "<br>";
	$i++;
	}

?>




