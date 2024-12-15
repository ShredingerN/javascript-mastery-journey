const array = [];

for (let i = 0; i < 5; i++) {
    const el = Math.floor(Math.random() * 10);
    array.push(el);
}

console.log(array);
let sum = 0;

let strOut = "";
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    strOut += `[${element}] `;
    sum += element;
}

console.log(strOut);
console.log(sum);

const arr1 = [];
for (let i = 0; i < 5; i++) {
    //random заполняет от 0 до 1, умножаем на 10
    //и отсекаем дробную часть, чтобы получить целые числа.
    const el = Math.floor(Math.random() * 10);
    arr1.push(el);

}
console.log(`мой массив ${arr1}`)