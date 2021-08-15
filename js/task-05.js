const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  const input = event.currentTarget;

  nameOutputRef.textContent = input.value ? input.value : 'незнакомец';
}