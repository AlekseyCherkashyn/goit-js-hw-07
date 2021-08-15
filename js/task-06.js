const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener("blur", onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add("valid")
    }
    else {
        event.currentTarget.classList.add("invalid")
    }
}