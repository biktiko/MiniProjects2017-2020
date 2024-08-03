/*
showGrid(20);      //գծել կորդինատային առանցքները
forward(distance)  //գնալ առաջ (հեռավորություն)
right(angle)       //աջ (անկյուն)
left(angle) 	   //ձախ (անկյուն)	
goto(x,y) 	       //գնա (x կորդինատ, y կորդինատ)
clear() 	       //մաքրել
penup() 	       //բարձրացնել մատիտը
pendown() 	       //իջեցնել մատիտը
reset() 	       //սկսել սկզբից, ջնջել ամեն ինչ ....
angle(angle)	   //անկյուն	 
width(width)       //մատիտի հաստությունը(հաստություն)

//ընտրել գույն(), արգումենտը, երեք թիվ, զանգված, գույնի անունը կամ #հեքսկոդը
color(r,g,b) 	   
color([r,g,b])
color("red")
color("#ff0000")
*/


//showGrid(20);




color("black");
width(2);


for(i=0; i<=36; i++)
{ 
  
  forward(235);
  goto(0, 0);
  left(10);
}

