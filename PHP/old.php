<?php
					
	
				/////////////// varj 3 /////////////////////////
				

		$year = 1989;
		$month = 10;
		$day = 16;

		$tyear = 2016;
		$tmonth = 5;
		$tday = 8;

		function days($y, $m, $d){

			$days=$y*365+floor($y/4)+$d;
			
			if($m>1)
			{
					$days+=$m*31-floor($m/2)-2;
					if($y%4==0)
					{
						$days+=1;
			 		}	
			}
			
			return $days;
		}
		
		echo $old=floor((days($tyear, $tmonth, $tday)-days($year, $month, $day))/365);
		

?>


