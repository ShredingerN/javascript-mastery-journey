let score = 0;
let question1 = "В каком году в Российской империи отменили крепостное право? \n1. 1816\n2. 1861 \n3. 1917";
let answer1 = prompt(question1);
if (answer1 === '2') {
    score = score + 10
    alert("Бинго! +10 баллов")
} else {
    alert("Ответ не верный 🫣");
}
let question2 = "В каком году произошло одно из первых сражений Великой Северной войны "+
                "между русской армией Петра I и шведской армией Карла XII? \n1. ноябрь 1701\n2. ноябрь 1704 \n3. ноябрь 1700";
let answer2 = prompt(question2);
if (answer2 === '3') {
    score = score + 10
    alert("Бинго! +10 баллов")
} else {
    alert("Ответ не верный 🫣");
}
alert("Ваш счет: " + score);