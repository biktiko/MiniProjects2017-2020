1)Սթռինգը դարձնումա ինթ
1.parseInt()
2.Number();

2)prompt() - Հարցա տամ


3) Html in Javascript
1.element.innerHTML
2.document.write();
4)Image in Javascript 
    var img = new Image(500, 500);
    img.src = 'cat.jpg';
    console.log(img);
    document.body.appendChild(img);
5)document- https://www.youtube.com/watch?v=5eN93IMTxj4&t=381s;

document.getElementsByClassName("paragraph")[0];
Инкы кез тама сах ен обектнеры инчи классеры "paragraph"-а; инкы та тама зангваци тескав, тра эти кираца [0], вер менак аменарачины та, байц карис верерорды озис ёронис, аре сах 

6)attributes - https://www.youtube.com/watch?v=7e0Pm9s7cik&list=PL5FCJIdFxiLl0tFixxTFWDspnOqPKgjg4&index=22&t=0s
1. - element.hasAttribute()-стугума тесна ти атрибу оне та че, верадарцнума кам true кам false
Оринак

        <h1 id="header">
            colored <span style="color: #fc4c4c">Title</span>
        </h1>

var el=document.getElementById("header");
console.log(el.hasAttribute("id"));  = true

2. - element.getAttribute()-кез тама твял атрибути ануны

console.log(get.hasAttribute("id")); = header

3. - element.setAttribute() - 2 аргумент, арачины таза аргументи ануны, еркрорды уран аржекы


7) замыкание  - https://www.youtube.com/watch?v=UsFPvkWeUgw&list=PL5FCJIdFxiLl0tFixxTFWDspnOqPKgjg4&index=12

function counter(){

	var n=0;

	return function add(){
		n++;
		console.log(n);
	}
}

var plus = counter();
plus();
plus();
plus();
plus();  = 1, 2, 3, 4

8 Math - констатный обект, где есть математические констаты и функции

9 Date - new Date(); 
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
https://www.youtube.com/watch?v=2WTmDKglpW0&list=PL0lO_mIqDDFUGX9k45bZFuz1ixTvUhd7b&index=19


10 arr.join(", ")-miacnuma sax zangvaci elementnery mi hati stringi mech 


11 (arr.sort()).join(", ") - arr.sort()-ы зангваци элементнеры сартировакая анум


12 String - https://www.youtube.com/watch?v=gmX8jkOP2OI&list=PL0lO_mIqDDFUGX9k45bZFuz1ixTvUhd7b&index=20

var text = "Tigran just do it"

var length=text.length;
document.write(length + "<br>");

var CapsLock = text.toUpperCase();      //tarery mecadara sarqum
document.write(CapsLock+ "<br>");

var CapsLockOff = text.toLowerCase();   //tarrery poqratara sarqum
document.write(CapsLockOff + "<br>");

var cutText = text.substring(0, 6);      //texti tvjal simvolic minchev hachord tvjaly
document.write(cutText + "<br>");

var ThisSymbole = text.charAt(2);          //texti tvjal simvoly
document.write(ThisSymbole + "<br>");

var TextPlace = text.indexOf("do");     //texti texti txy
document.write(TextPlace + "<br>");


13 element.onload - когда елемент загрузился


14 Картинка в JavaScrict - https://www.youtube.com/watch?v=1ieQD20Cs0o&t=449s
    1 Создаем canvas в html -" <canvas id="canvas" width="288" height="512"></canvas>"
    2 var cvs = document.getElementById("canvas");
      var ctx = cvs.getContext("2d"); //делаем его в 2д

    3 var  = new Image(); //Создаем обект
    4 bird.src = "img/bird.png"; //добавляем атрибут
    5   function draw(){          //рисум
            ctx.drawImage(img, 0 , 0); 
        }
    6 вызываем функцию draw();

    7 // При нажатии на какую-либо кнопку
        document.addEventListener("keydown", someMethod);
        // Вызывается метод someMethod
        function someMethod() {
         // Изменяем что-то в коде
        }

15 setInterval(function(){alert("test")}, 1000)   - твял функциан эткан вайркяны мин анума
1.function_name
2.time (milliseconds)


16 const - попохакан, вери аржекы амалчи кям похис

17 element.innerHTML - теги мечи тексты карис похис, у даже эт тексти мечел html тег кирис
1.https://www.youtube.com/watch?v=1UsllDMhvN4
2.https://developer.mozilla.org/ru/docs/Web/API/Element/innerHTML

18 element.textContent - https://www.youtube.com/watch?v=1UsllDMhvN4

нуйн пены инче вер inner.html-ы, байц тра мечин амалчикя тегер кирис

19 events - https://www.youtube.com/watch?v=CpMJVKJnMTc&list=PL0lO_mIqDDFUGX9k45bZFuz1ixTvUhd7b&index=13
1.onmouseover
2.<input type="button" name="test" value="Tigran the best" onclick="alert('he is right')">  //onclick

20 localStorage - https://www.youtube.com/watch?v=PMhzpvoVewQ
 сохранение данных в браузере (cookie);

 21 Delete div
 document.getElementById("element-id").outerHTML = "";

 22 ReactJs setup - https://www.youtube.com/watch?v=0grybmrgc2Q&list=PL0lO_mIqDDFWjZpUTRJ8cBAsTJ5WFk4Cs&index=2&t=0s;

23) Object.keys(object) - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 возвращает ключи массива или обьекта  

24)Object.value(object) - //создает массу из обьекта (только values)

25)Math.pow(3, 2)=9 //астичана пиццнум

26)Множества - https://metanit.com/web/javascript/14.3.php

var arr = [1, 1, 2, 3, 4, 5, 2, 4];
var numbers = new Set(arr);
1)console.log(numbers);           // Set(5) {1, 2, 3, 4, 5}
2)console.log(numbers.size);      // 5
numbers.delete(3);
3)console.log(numbers);       // Set(2) {1, 2, 4, 5}
4)console.log(numbers.has(4)); //true 
5)numbers.forEach(function(value1, value2, set){
    console.log(value1);     //1, 2, 3, 4
})
6)numbers.clear(); //удаляет все элементы 

27)Перезагрузка страницы -  location.href=location.href

28)window.onload=alert() //widnow.onload- вклчается, как только страница загружена