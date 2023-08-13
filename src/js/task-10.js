function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const butCreate = document.querySelector('button[data-create]');
const butDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

const divBoxSize = 30;

function createBoxes(amount) {
  divBoxes.innerHTML = '';
  let currentBoxSize = divBoxSize;
  const boxes = [];
  
  for (let i = 0; i < amount; i++) {
  const divEl = document.createElement('div');
  divEl.style.width = `${currentBoxSize}px`;
  divEl.style.height = `${currentBoxSize}px`;
  divEl.style.backgroundColor = getRandomHexColor();
    boxes.push(divEl);
    currentBoxSize += 10;
  }

divBoxes.append(...boxes);  
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
}

butCreate.addEventListener("click", () => {
  const inputValue = Number(inputEl.value);
  createBoxes(inputValue);
});
butDestroy.addEventListener("click", destroyBoxes);
