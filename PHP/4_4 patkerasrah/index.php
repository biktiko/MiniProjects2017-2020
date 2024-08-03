<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
		
	<body>
		<?php 


		$gallery = array(
			"gorilla" => "Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Africa",
			"tiger" => "The tiger (Panthera tigris) is the largest cat species, most recognisable for their pattern of dark vertical stripes on reddish-orange fur with a lighter underside",
			"lion" => "The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae."
		);
?>


	<div class=galleryItem>
		
		<h2>Tiger</h2>
		<img src="images/tiger.jpg" >
		<p> <?php   echo $gallery["tiger"]?> </p>

	</div>	
	<div class=galleryItem>
		<h2>Lion</h2>
		<img src="images/lion.jpg">
		<p> <?php  echo $gallery["lion"]?> </p>
	</div>
	<div class=galleryItem>		
		<h2>Gorilla</h2>
		<img src="images/gorilla.jpg">
		<p> <?php echo $gallery["gorilla"]?> </p>
	</div>


	</body>
</html>