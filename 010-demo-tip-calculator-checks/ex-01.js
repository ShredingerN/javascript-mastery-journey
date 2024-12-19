let person = Number.parseFloat(prompt("Сколько человек пришло: "));
let bill = Number.parseFloat(prompt("Сумма счета: "));
let tips = Number.parseFloat(prompt("Какой процент чаевых от суммы счета?"));
const coeff = 0.01;

if (isNaN(person) 
    || isNaN(bill) 
    || isNaN(tips) 
    || person <= 0 
    || bill <= 0 
    || tips < 0) {
    alert("Пожалуйста, введите корректные числовые значения (неотрицательные) для количества людей, суммы счета и процента чаевых.");
} else {
    let billWithTips = bill + (bill * tips * 0.01);
    let billPerPerson = billWithTips / person;

    alert(`Счет за человека с учетом чаевых: ${billPerPerson.toFixed(2)}`);
}
