const counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

const decrementClick = () => counterValueRef.textContent = Number(counterValueRef.textContent) - 1;
const incrementCick = () => counterValueRef.textContent = Number(counterValueRef.textContent) + 1;

decrementBtnRef.addEventListener('click', decrementClick);
incrementBtnRef.addEventListener('click', incrementCick);
