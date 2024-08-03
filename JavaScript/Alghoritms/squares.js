var a = parseInt(prompt("a"));
var b = parseInt(prompt("b"));

function Squares(a, b){
    if(a==b) return (a + "*" + b);
    else if(a>b) return Squares(a-b, b);
    else return Squares(a, b-a);
}

alert(Squares(a, b));