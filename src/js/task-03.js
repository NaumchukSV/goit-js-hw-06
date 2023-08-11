const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

function render() {
  const list = document.querySelector('.gallery');
  const cards = images.map((image) => 
    `<li style="margin-right: 10px;">
    <img src="${image.url}" alt="${image.alt}" width=300px 
    style="border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
    </li>`
  ).join("");

  list.style.listStyle = "none";
  list.style.display = 'flex';
  list.style.margin = '0';
  list.style.padding = '0';
  list.style.flexWrap = 'wrap';
  list.insertAdjacentHTML("afterbegin", cards);
};
render();