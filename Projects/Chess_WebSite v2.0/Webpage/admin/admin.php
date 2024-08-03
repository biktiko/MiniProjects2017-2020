<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="../style.css">
</head>
	<body>

		<div class="header">
	 		<img class="img" src="../images/imgpreview.jpg" width="150px">
	 		<h2 class="PH"><b>PHONE</h2>
	 		<div class="phone">
	 		<p class="HP">047942038</p>
	 		<p class="HP">097242038</b> </p>
 		</div>
		
		<ul>
			 <li class="menu"> <b><a href="../index.php">Main </a></li>
			 <li class="menu"> <a href="../html.php"> HTML</a></li>
			 <li class="menu"> <a href="../css.php">CSS</a></li>
			 <li class="menu"> <a href="../about.php">About</a></li>
			 <li class="menu"> <a href="../contact.php"> Contact</a></li>
			 <li class="menu"> <a href="../shaxmat.php">Chess</a></b></li></li>
			 <li class="menu"> <a href="../shop.php">Shop</a></b></li></li>
			 <li class="menu"> <a href="../admin/admin.php">Admin</a></b></li></li>
		</ul>

		<div class="containt9">
			<?php 
				$link = mysqli_connect("localhost", "root", "root", "Tigrans_shop");
			?>

			 
			 		<h3>Add</h3>
					<form  class="form" action="admin.php" method ="post">
						<input type="int" name="ID" placeholder="ID"><br>
						<input type="text" name="Name" placeholder="Name"><br>
						<input type="text" name="Description" placeholder="Description"><br>
						<input type="text" name="src" placeholder="src"><br>
						<input type="text" name="Price" placeholder="Price"><br>
						<input type="submit" name="Add" value="Add"><br>
					</form>

			
					
					<h3>Delete</h3>
					
					<form  class="form" action="#" method ="post">
						<input type="INT" name="ID" placeholder="ID"><br>
						<input type="submit" name="Del" value="Delete"><br>
					</form>
				
			


					<?php 

					$ID=$_POST["ID"];
					$Name=$_POST["Name"];
					$Description=$_POST["Description"];
					$src=$_POST["src"];
					$Price=$_POST["Price"];


				


					
					if($_POST["Add"]){
						$sql="INSERT INTO `products` (`ID`, `Name`, `Description`, `src`, `Price`) VALUES ( $ID, '$Name', '$Description', '$src', '$Price')";
						$result = mysqli_query($link, $sql);
					}

					if($_POST['Del'])
					{
						$sql = "DELETE FROM `products` WHERE `ID`=$ID";	
						$result = mysqli_query($link, $sql);	
					}


					
					
						mysqli_close($link);


					 ?>


				
					


		
		</div>


		<?php 

			include("../footer.php"); 

		 ?>