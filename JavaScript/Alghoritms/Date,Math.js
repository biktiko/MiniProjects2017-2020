console.log(Math)

//Math
var a =Math.ceil(Math.random(1, 1000)*1000);
document.write("a=" + a + "<br>");
var b =Math.ceil(Math.random(1, 1000)*1000);
document.write("b=" + b + "<br>" + "<br>");

var n1 = Math.abs(-1 * a);

document.write("abs=" + n1 + "<br>");

////////////////Date///////////////////////////

var date = new Date;  //Время сейчас
console.log(date);

var YearNow = date.getFullYear();
document.write("<p id='p'> Now is " + YearNow + " year </p>");
            
var p=document.getElementById("p");      //Color
p.style.color="blue";

var MonthNow = date.getMonth();
document.write( "Now is " + MonthNow + " month" + "<br>");
document.write( "Now is " +	date.getHours()+ " hours"  + "<br>");
document.write( "Now is " +	date.getMinutes()+ " minutes"  + "<br>");
document.write( "Now is " +	date.getSeconds()+ " seconds"  + "<br>" + "<br>");

var date2 = new Date(2002, 6, 17, 3, 30, 45); //новое время

document.write( "Now is " + date2.getFullYear() + " month" + "<br>");
document.write( "Now is " + date2.getMonth() + " month" + "<br>");
document.write( "Now is " +	date2.getHours()+ " hours"  + "<br>");
document.write( "Now is " +	date2.getMinutes()+ " minutes"  + "<br>");
document.write( "Now is " +	date2.getSeconds()+ " seconds"  + "<br>");

