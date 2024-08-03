<?php
					
	
				/////////////// varj 2 /////////////////////////
				

	echo "Minimumy ".$min=min($array=array(rand(), rand(), rand()));
	array_splice($array, array_search($min, $array), 1);
	
	echo "<br>";
	if($array[0]<$array[1])
	{
		echo $min.", ".$array[0].", ".$array[1];
	}
	else
	{
		echo $min.", ".$array[1].", ".$array[0];
	}	

?>


