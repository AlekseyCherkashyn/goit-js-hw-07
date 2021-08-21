const itemEl = document.querySelectorAll("li.item");
console.log(`В списке ${itemEl.length} категории.`);
itemEl.forEach((el) => {
    console.log('Категория : ', el.querySelector("h2").textContent);
    console.log('Количество элементов:', el.querySelectorAll("li").length)
});