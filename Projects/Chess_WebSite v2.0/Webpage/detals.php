<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
	<body>
		<?php 
			include("header.php"); 
			include("menu.php"); 
		?>

		<div class="containt8">

			<div class="shop_header">
					<div class="logo">
						<h2 class="Shop_Name">ShopChess</h2>
					</div>
				</div>
				
				
			<?php 


				$link = mysqli_connect("localhost", "root", "root", "Tigrans_shop");
				$sql = "SELECT * FROM `products`";	
				$result = mysqli_query($link, $sql);
					
			

		
				
				foreach ($_POST as $key => $value) {
					$n=$key;
				};
		

				while($r = mysqli_fetch_assoc($result))
				{
					if($r["ID"]==$n)
					{?>		<div class="Details">

								<h1><?php echo $r["Name"] ?></h1>
								<img <?php  echo "src=".$r['src']?>  >
								<h2><?php echo $r["Price"] ?></h2>
								<p><?php echo $r["Description"] ?></p>

							</div>
					<?php  	
					}
				}
			
			 ?>

			 <div>
			 	



			 </div>
				
					


		
		</div>

				
		

		<?php 

			include("footer.php"); 
			mysqli_close($link);

		 ?>
	

		


		</div>
	</body>
</html>