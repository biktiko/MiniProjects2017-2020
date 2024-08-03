//выдаёт код всех русских букв

const RussianLetters = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

let RussianCharCodes=RussianLetters.split("");

RussianCharCodes.map(function(letter){
    console.log(letter + ": " + letter.charCodeAt());
});