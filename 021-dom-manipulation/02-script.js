// Получаем ссылку на кнопку и контейнер списка
// const addListBtn = document.getElementById("addListBtn");
// const listContainer = document.getElementById("listContainer");

// // Добавляем обработчик события клика на кнопку
// addListBtn.addEventListener("click", function () {
//     for (let i = 0; i < 5; i++) {
//         // Создаем новый элемент списка
//         const listItem = document.createElement("li");
//         listItem.textContent = `${i + 1}-й элемент списка`;

//         // Добавляем элемент в контейнер списка
//         listContainer.appendChild(listItem);
//     }
// });

// Выбор количества пунктов списка на ui
const addListBtn = document.getElementById("addListBtn");
const listContainer = document.getElementById("listContainer");
const itemCounts = document.getElementById("countItems");
const count = document.getElementById("count");

itemCounts.addEventListener("change", () => count.textContent = `Количество: ${itemCounts.value}`)

function addList() {
    if (listContainer.childElementCount > 0) {
        listContainer.innerHTML = "";
    }

    for (let i = 1; i <= itemCounts.value; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Пункт меню № ${i}`;

        listContainer.appendChild(listItem);
    }
}

addListBtn.addEventListener("click", addList);