// 1. Преобразование к строке
let numToStr = 10;
let toStr = String(numToStr);
console.log(toStr); // "10"
console.log(typeof numToStr); // number
console.log(typeof toStr); // string


// 2. Преобразование к числу
let strToNum = "10";
console.log(Number(strToNum)); // 10
console.log(Number(11 == 12)); // 0

// 3. Преобразование к логическому типу
let strToBool = "Hello";
console.log(Boolean(strToBool)); // true

// 4. Неявное преобразование
let implicitConversion = 10 + "20";
console.log(implicitConversion); // "1020"

// 5. Неявное преобразование при сравнении
let num = 10;
let str = "10";
console.log(num == str); // true
console.log(num === str); // false

// Примеры ошибок и путаницы при преобразовании типов

// Непонимание различий между типами данных
let confusionExample = num + str;
console.log(confusionExample); // "1020"

// Неявное преобразование типов
let implicitExample = num.toString() + str;
console.log(implicitExample); // "1020"

// Преобразование строки в число
let intFromString = Number.parseInt("10");
console.log(`Преобразование строки "10" в целое число: ${intFromString}`);
let floatFromString = Number.parseFloat("10.5");
console.log(`Преобразование строки "10.5" в число с плавающей точкой: ${floatFromString}`);

// Проверка на NaN и целое число
console.log(`Является ли "abc" числом: ${Number.isNaN("abc")}`);
console.log(`Является ли 5 целым числом: ${Number.isInteger(5)}`);
console.log(`Является ли 5.5 целым числом: ${Number.isInteger(5.5)}`);
console.log(`Является ли 5.5 вещественным числом: ${Number.isFinite(5.5)}`);

console.log(-10 / 0);