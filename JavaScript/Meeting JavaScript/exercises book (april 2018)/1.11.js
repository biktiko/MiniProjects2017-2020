

 
var x = prompt("x");
var y = prompt("y");
var z = prompt("z");

parseInt(x);
parseInt(y);
parseInt(z);

// document.write('<h1> a=x^4+y^3-z^2</h1>' );
// document.write('<h1> b=5/x^2+x*y*z-z/x</h1>');

var a = x*x*x*x+y*y*y-z*z;
var b = 5/(x*x)+x*y*z-z/x;

document.body.innerHTML = "<h1>x^4+y^3-z^2=" + a + "</h1> <br> <h1>5/x^2+x*y*z-z/x=" + b + "</h1>"




