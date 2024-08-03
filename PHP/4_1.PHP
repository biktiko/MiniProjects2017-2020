 

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
	<body>

	<?php $array = array("դարդ", "զարդ", "մարդ", "վարդ", "հարդ");

					//// 1 /////

		echo "<ol>";
		 foreach($array as $value)
		{
			echo "<li>".$value."</li>";
		}
		echo "</ol>";


						//// 2 /////
		echo "<br>";
		echo "<br>";


			echo "<table border = 1>";

		 foreach($array as $key => $value)
		{
			echo "<tr>"."<td>".$key."</td>"."<td>".$value."</td>"."</tr>";
		}
		echo "</table>";


					//// 3 /////

		$array2 = array();
		
		echo "<br>";
		echo "<br>";


		foreach($array as $key => $value)
		{	
			$array2[]=$array[count($array)-$key-1];
		}

		$array=$array2;
		
		echo "<pre>";
		print_r($array);
		echo "</pre>";
?>
	
	</body>
</html>
