function btnClick12() {
    const tb = document.getElementById("textBox");
    //с html элементом (input в данном примере) работаем через объект
    // 1. Отыскали элемент на странице
    // 2. Сохранили в объект
    // 3. Изменили атрибут
    tb.value = `Hello, ${tb.value}`;
}

const btn = document.getElementById("btnAct");
// дословно слушальщик события)) что делаем с кнопкой
// сначала клик, потом выполняется функция
// при чем если изменить имя функции(через правый клик мыши), автоматом измениться и тут
btn.addEventListener("click", btnClick12);