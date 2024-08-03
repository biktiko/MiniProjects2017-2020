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

		<div class="containt7">
				
				<div class="shop_header">
					<div class="logo">
						<h2 class="Shop_Name">ShopChess</h2>
					</div>
				</div>
				
				<?php  

					$link = mysqli_connect("localhost", "root", "root", "Tigrans_shop");
					$sql = "SELECT * FROM `products`";	
					$result = mysqli_query($link, $sql);
 ?>
	
		<?php while($r = mysqli_fetch_assoc($result))
			
				
				{
				$details=$_POST["ID"];?>
				<div class="galleryItem">
					
					 
					<h2 class="Price"> <?php  echo $r["Name"] ?></h2>
					<img <?php  echo "src=".$r['src']?>  >
					<h2 class="Price">  <?php  echo $r["Price"] ?></h2>

					<form action="detals.php" method ="post">
					 	<input type="submit" name="<?php echo $r['ID']?>"  value="Details">
					</form>

				</div>


			




		<?php } 


			echo "</div>";
			include("footer.php"); 



			
			mysqli_close($link); 
			//include("footer.php"); 
		?>
				
			
	

		


		</div>
	</body>
</html>