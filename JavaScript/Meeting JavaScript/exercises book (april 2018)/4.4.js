var a =[12, 5, 32, 26, 2, 23, 2, 4, 3, 10];
                                

//1.
var n = 0;
for(var i=0; i<a.length; i++)
{
    n+=a[i];

}
console.log(n);

//2.
console.log(n/a.length);

//3.
n=1;
for(var i=0; i<a.length; i++)
{
    n*=a[i];
}
console.log(n);