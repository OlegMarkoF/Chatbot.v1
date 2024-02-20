// получаем список кнопок
const buttons = document.querySelector('.article-buttons');
const button = Array.from(buttons.children);

function buttonActive () {
  const current = document.getElementsByClassName('button-active');
  current[0].className = current[0].className.replace(' button-active', '');
  this.className += ' button-active';
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', buttonActive)
}

// получаем список кнопок товара
const productButtons = document.querySelector('.button-group');
const productButton = Array.from(productButtons.children);

function productButtonActive () {
  const current = document.getElementsByClassName('active-btn');
  current[0].className = current[0].className.replace(' active-btn', '');
  this.className += ' active-btn';
}

for (let i = 0; i < productButton.length; i++) {
  productButton[i].addEventListener('click', productButtonActive)
}

const arr = [
  'apple', 'banana', 'orange'
  
];
const html = arr.map((item) => `<div>${item}</div>`).join('');
document.querySelector('.message-info').innerHTML = html;

// const arr = [
//   'apple', 'banana', 'orange'
// ];
// const html = arr.map((item) => `<div>${item}</div>`).join('');
// document.querySelector('.message-info').innerHTML = html;