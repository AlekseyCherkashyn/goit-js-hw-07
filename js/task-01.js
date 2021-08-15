const itemEl = document.querySelectorAll("li.item");
console.log(`В списке ${itemEl.length} категории.`);
console.log(`Категория: ${itemEl[0].querySelector("h2").textContent}`);
console.log(`Количество элементов: ${itemEl[0].querySelectorAll("li").length}`);
console.log(`Категория: ${itemEl[1].querySelector("h2").textContent}`);
console.log(`Количество элементов: ${itemEl[1].querySelectorAll("li").length}`);
console.log(`Категория: ${itemEl[2].querySelector("h2").textContent}`);
console.log(`Количество элементов: ${itemEl[2].querySelectorAll("li").length}`);
