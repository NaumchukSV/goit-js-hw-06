const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const changeFontSize = (event) => {
    const inputValue = inputEl.value;
    spanEl.style.fontSize = `${inputValue}px`;
}

inputEl.addEventListener("input", changeFontSize);