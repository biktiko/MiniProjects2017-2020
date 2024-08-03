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


for(i=0; i<=200; i++)
{

	var a = Math.floor(Math.random()*350);
    var b = Math.floor(Math.random()*350);
    var c = Math.floor(Math.random()*350);
	var d = Math.random()*4;
	color(a, b, c);
    forward(a);
    width(d);
    if(Math.random()<0.5)
    {
    a*=-1;
    }
     if(Math.random()<0.5)
    {
    b*=-1;
    }
    goto(a, b);
 

}

