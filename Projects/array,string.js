
//////// array
var arr = [0, 312, 213, 123, 12, 7454, 532, 43562, 14];

var text=arr.join(", ");
document.write(text + "<br>");

var text2=(arr.sort()).join(", ");
document.write(text2 + "<br>");

var arr2 = [0, 3, 2, 5, 9, 8, 7, 14, 13453253, 421412412];
var text3=(arr2.sort()).join(", ");
document.write(text3  + "<br>" + "<br>");

///////////string////////////

var text = "Tigran just do it"

var length=text.length;
document.write(length + "<br>");

var CapsLock = text.toUpperCase();      //tarery mecadara sarqum
document.write(CapsLock+ "<br>");

var CapsLockOff = text.toLowerCase();   //tarrery poqratara sarqum
document.write(CapsLockOff + "<br>");

var cutText = text.substring(0, 6);      //texty tvjal simvolic minchev hachord tvjaly
document.write(cutText + "<br>");

var ThisSymbole = text.charAt(2);          //texti tvjal simvoly
document.write(ThisSymbole + "<br>");

var TextPlace = text.indexOf("do");     //texti texti txy
document.write(TextPlace + "<br>");

