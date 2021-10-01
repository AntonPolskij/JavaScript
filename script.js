// 1 задание
var tempC = +prompt("Укажите температуру по Цельсию");
tempC = Math.round((9 / 5) * tempC + 32);
console.log("Данная температура по Фаренгейту: " + tempC);


// 2 задание
var a = +prompt('Задайте число "а"');
var b = +prompt('Задайте число "b"');
console.log("a = " + a + "\nb = " + b);
a = a + b;
b = a - b;
a = a - b;
console.log("a = " + a + "\nb = " + b);

// 3 задание
var admin;
var name = "Василий";
admin = name;
console.log(admin);

// 4 задание
console.log(1000 + "108");// 1000108

// 5 задание
console.log('Атрибут async позволяет загружать наш скрипт асинхронно(одновременно со страницей');
console.log('Атрибут defer откладывает выполнение срипта, пока страница не прогрузится полностью.');