let person = Number.parseFloat(prompt("Сколько человек пришло: "));
let bill = Number.parseFloat(prompt("Сумма счета: "));
let tips = Number.parseFloat(prompt("Какой процент чаевых от суммы счета?"));
const coeff = 0.01;


let billWithTips = bill + (bill * tips * 0.01);
let billPerPerson = billWithTips / person
alert(`Счет за человека с учетом чаевых: ${billPerPerson}`)