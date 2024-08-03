 

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
	<body>

		<?php 

			$array=array();

			for($i=0; $i<=10; $i++)
			{
				$array[]=rand(0, 1000);
			}


						
			$a=0;
			$b=0;
			$c=0;
			$d=1;
			foreach($array as $key => $value)
			{	
				$a+=$value;
				if($value%2==0)
				{
					$b+=$value;
				}
				if($value%3==0)
				{
					$c+=$value;
					$d*=$value;
				}
			}

			echo $TVmijin=$a/count($array);
			echo "<br>";
			echo $ZuygGumar=$b;
			echo "<br>";
			echo $ErapatikGumar=$c;
			echo "<br>";
			echo $ErapatikArtadryal=$d;




		?>

	