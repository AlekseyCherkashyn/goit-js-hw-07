const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const makeList = (array, selector) => {
   const newList = array.map(item => {
        const addList = document.createElement('li');
        addList.textContent = item;
        return addList;
   });

    return document.querySelector(selector).append(...newList);
}

makeList(ingredients, '#ingredients');