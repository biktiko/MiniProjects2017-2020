// var numbers=[];
// var number=1000000;

// while(number<10000000){
//     number=number.toString();
//     var characters=number.split("");
//     var i;
//     for(i=0; i<characters.length; i++){
//         if(characters[i]=="0" ||  characters[i]=="7" || characters[i]=="8" || characters[i]=="9") i=characters.length+1;
//     }
//     if(i==characters.length) numbers.push(number);
//     number++;
// }

// console.log(numbers);
// console.log(numbers[155792]);

var numbers=[];
var number=100000;
while(number<1000000){
    number=number.toString();
    var characters=number.split("");
    multiply=characters.reduce((a,b) => a * b )
    if(multiply!=0 && multiply%28==0) numbers.push(number);
    number++;
}
console.log(numbers);

