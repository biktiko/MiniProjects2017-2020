 

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
	<body>

		<?php 

			$array = array(
					"blank" => 46822,
					"default" => 79254,
					"display" => 49511,
					"document" => 88839,
					"examples" => 81802,
					"for"  => 52427,
					"function" => 65907,
					"height" => 47510,
					"left" => 45011,
					"literal" => 45884,
					"reference" => 61932,
					"tag" => 148895,
					"target" => 339410,
					"this" => 45275,
					"title" => 91441,
					"top" => 335154,
					"type" => 65768,
					"width" => 68883 
				);

		$color="tr";	

		echo "<table border = 1>";
		foreach($array as $key => $value)
		{
			if($value>100000)
			 {
				$color.=" "."bgcolor=red";
			 }
		    elseif($value<50000)
			 {
				$color.=" "."bgcolor=green";
			 }


			echo "<$color>"."<td>".$key."</td>"."<td>".$value."</td>"."</tr>";
			$color="tr";
		}
		echo "</table>";
?>

	
	</body>
</html>
