const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');
let counterValue = 0;

const clickDecrementButton = (event) => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
}
const clickIncrementButton = (event) => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
}

decrementButton.addEventListener("click", clickDecrementButton);
incrementButton.addEventListener("click", clickIncrementButton);