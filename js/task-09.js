function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

const changeBackgroundColor = (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanEl.textContent = color;
};

btn.addEventListener('click', changeBackgroundColor);