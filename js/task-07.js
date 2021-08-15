const inputSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
function changeFontSize(event) {
    textRef.style.fontSize = `${event.target.value}px`;
}
inputSizeControlRef.addEventListener('input', changeFontSize);