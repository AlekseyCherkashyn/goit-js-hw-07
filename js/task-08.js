const inputValueRef = document.querySelector('#controls>input');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxRef = document.querySelector('#boxes');

function getAmount() {
    const amount = Number(inputValueRef.value);
    createBoxes(amount);
}

function random() {
    return Math.floor(Math.random() * 256);
}

function createBoxes(amount) {
    let baseSize = 30;
    for (let i = 0; i < amount; i++) {
        baseSize += 10;
        const newBox = `<div style="width: ${baseSize}px; 
        height: ${baseSize}px; background-color: rgb(${random()}, 
        ${random()}, ${random()})"></div>`;
        boxRef.insertAdjacentHTML('beforeend', newBox);
    }
}

function destroyBoxes() {
    boxRef.innerHTML = '';
}
renderBtnRef.addEventListener('click',getAmount )
destroyBtnRef.addEventListener('click', destroyBoxes)