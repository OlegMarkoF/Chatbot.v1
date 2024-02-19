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

// получаем список иконок
// const btnImg = document.querySelectorAll('.button-img');
// const btnImgList = Array.from(btnImg);

// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener('click', function () {
//     const current = document.getElementsByClassName('button-active');
//     current[0].className = current[0].className.replace(' button-active', '');
//     this.className += ' button-active';
//     const message = document.querySelector('.message');
//     if (message.classList.contains('message') && parentElement.classList.contains('button-active')) {
//       message.src = "../../images/symbols-chat-black.svg";
//     }
    
//   })
// }
