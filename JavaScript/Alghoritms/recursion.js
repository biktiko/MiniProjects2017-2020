// Нужно рекурсивно посчитать сумму всех элементов массива 

var array = [2, 7, 4, 9, 12, 5, 6, 3];
var array2 = [1, 3, 12, 0.5, 141, 31, 13, 12, 31];
var n=6;

function factorial(n){
    if(n==1) return 1;
    else return n * factorial(n-1)
}

function ArrSum(arr){
    if (arr.length == 1) return arr[0]
    return arr[0] + ArrSum(arr.slice(1))  
}

function ArrLength(arr){
    if (arr.length == 0) return 0;
    return (1+ArrLength(arr.slice(1)));  
}

function ArrMax(arr){
    if(arr.length == 1) return arr[0]
    if(arr[0] > arr[1]){
        arr.splice(1, 1);
        return ArrMax(arr);
    }
    else{
        arr.splice(0, 1);
        return ArrMax(arr);
    } 
}

function binarySearch(value, list) {
    let first    = 0;                // начальный индекс в массиве
    let last     = list.length - 1;  // конечный индекс
    let position = -1;
    let found    = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        }
        else if (list[middle] > value)  last = middle - 1;
        else first = middle + 1;
    }
    return position;
}

function ArrSort(arr) {
	if(arr.length <= 1) return arr;
	else{
        var left = [];
		var right = [];
		var newArray = [];
		var pivot = arr.pop();

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] <= pivot) left.push(arr[i]);
			else right.push(arr[i]);
		}
        return newArray.concat(ArrSort(left), pivot, ArrSort(right));
	}
}

console.log(ArrSort( array2));  
console.log("factorial " + n + " is " + factorial(n)); 
console.log(array);
console.log("Sum=" + ArrSum( array)); 
console.log("Sum=" + ArrSum( array)); 
console.log("Length=" +  ArrLength(array)); 
console.log("Max=" + ArrMax(array));
  
