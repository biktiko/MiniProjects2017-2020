                                            //Regular Expression - Регулярные выражение

// https://www.youtube.com/watch?v=pSdXUgOLpwo&list=PLY4rE9dstrJybXiawtabniwVxQSCAb3PL

// regExp.py - регулярные выражения, python

// https://www.regexpal.com/ - for tests


const str = "Hello, my name is Tigran. Are you 20? I am 17 years old";
console.log(str);

/////////////////////////////////////////

const regexp1 = /Tigran/;
console.log(regexp1);

const result1 = str.match(regexp1);
console.log(result1); //Tigran

//element.match(regexp) - поиск совпадений 

/////////////////////////////////////////

const regexp2 = /Hel.o/;       // . - любой символ, кроме "пробел"
console.log(regexp2);

const result2 = str.match(regexp2);
console.log(result2);  //Hello

//чтобы использовать ностаящую точку, нужно использовать \. 

////////////////////////////////////////

const regexp3 = /\d\d/;       //число (0-9)
console.log(regexp3);

const result3 = str.match(regexp3);
console.log(result3); //20

/////////////////////////////////////////

const regexp4 = /\D\D/;       //не число 
console.log(regexp4);

const result4 = str.match(regexp4);
console.log(result4);   //He

// большая буква = 'не'

/////////////////////////////////////////

const regexp5 = /\d\d\s/;       //s - пробельный символ
console.log(regexp5);

const result5 = str.match(regexp5);
console.log(result5);   //17 

/////////////////////////////////////////

const regexp6 = /\d\d\S/;       //s - не пробельный символ
console.log(regexp6); 

const result6 = str.match(regexp6);
console.log(result6); //20?

/////////////////////////////////////////

const regexp7 = /\w\s\w\d\S/;       //w(слова) - цифры(0-9), англиские буквы(Aa-Zz), и _
console.log(regexp7);

const result7 = str.match(regexp7);
console.log(result7); //u 20?

/////////////////////////////////////////

const regexp8 = /\W/;       //W(не слова) 
console.log(regexp8);

const result8 = str.match(regexp8);
console.log(result8);    //,

/////////////////////////////////////////

const str2 = "Юра и Ира играют в шахматы"
console.log(str2)

//////////////////////////////////////////

const regexp9 = /[ИЮ]ра/;       //[]-наборы, все символы внутри в скобках
console.log(regexp9);

const result9 = str2.match(regexp9);
console.log(result9); //Юра

//////////////////////////////////////////

const regexp10 = /[^ИЮ]ра/;       //[^ ]- всё, кроме данных наборо
console.log(regexp10); 

const result10 = str2.match(regexp10);
console.log(result10); //гра

//////////////////////////////////////////

const str3 = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
console.log(str3);

//////////////////////////////////////////

const regexp11 = /[г-о]/;       //[ - ] - диапазон набора, работае по element.charCodeAt()
console.log(regexp11);

const result11 = str3.match(regexp11);
console.log(result11);  //г

//////////////////////////////////////////

const regexp12 = /[^а-г]/;       //[^ ]- всё, кроме данных наборо
console.log(regexp12);

const result12 = str3.match(regexp12);
console.log(result12);     //д

//////////////////////////////////////////

const regexp13 = /[^а-гд-ж]/;       // комбинации наборов
console.log(regexp13);

const result13 = str3.match(regexp13);
console.log(result13); //ё ( пока не понятно почему :D )

//////////////////////////////////////////

const regexp14 = /[^а-я]/;       
console.log(regexp14);

const result14 = str3.match(regexp14);
console.log(result14); //ё (потому что =>)

"а".charCodeAt(); // 1072
"я".charCodeAt(); // 1103
"ё".charCodeAt();  // 1105

//////////////////////////////////////////

const str4 = "Today is 25.02.2020"
console.log(str4)

//////////////////////////////////////////

const regexp15 = /\d{2}\.\d{2}\.\d{4}/  //жадные квантификаторы: {n} - повторить n раз
console.log(regexp15);

const result15 = str4.match(regexp15);
console.log(result15); //25.02.2020

//////////////////////////////////////////

let n = 2;

const regexp16 = new RegExp("\\d{" + n + "}\.\\d{" + n + "}\.\\d{" + 2*n + "}"); // для использование переменных
console.log(regexp16);

const result16 = str4.match(regexp16);
console.log(result16); //25.02.2020

// new RegExp() = так же создаёт регулярное выражение
// \\d, \\w, \\s - и так далее (для него)

//////////////////////////////////////////

const regexp17 = /\d{3,4}/  // ',' = или (забирает наибольшое )
console.log(regexp17);

const result17 = str4.match(regexp17);
console.log(result17); //2020

//////////////////////////////////////////

const regexp18 = /\d{3,4}?/  // ? = делает квантификатор ленивым (забирает наименьшее )
console.log(regexp18);

const result18 = str4.match(regexp18); 
console.log(result18);  //202

//////////////////////////////////////////

const regexp19 = /\d{3,}/  // жадный: от трёх до бесконечности
console.log(regexp19);

const result19 = str4.match(regexp19); 
console.log(result19);  //2020

//////////////////////////////////////////

const regexp20 = /\d{3,}?/  // ленивый: от трёх до бесконечности
console.log(regexp20);

const result20 = str4.match(regexp20); 
console.log(result20);  //202

////////////////////////////////////////





