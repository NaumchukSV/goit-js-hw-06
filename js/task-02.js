const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
function render(arr) {
  const list = document.querySelector('#ingredients');
  
  const elements = arr.map((item) => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = item;
    return liEl;
  });
  
  list.append(...elements);
};

render(ingredients);