// аккордион (выпадающие кнопки фильтра по культурам)
let acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// получаем список кнопок в левом меню
const buttons = document.querySelectorAll(".article-button");
const button = Array.from(buttons);

function buttonActive() {
  const current = document.getElementsByClassName("button-active");
  current[0].className = current[0].className.replace(" button-active", "");
  this.className += " button-active";
}
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", buttonActive);
}

// получаем список кнопок товара и делаем их активными
const productButtons = document.querySelector(".button-group");
const productButton = Array.from(productButtons.children);

function productButtonActive() {
  const current = document.getElementsByClassName("active-btn");
      this.classList.toggle("active-btn");
  // current[0].className = current[0].className.replace(" active-btn", "");
  // this.className += " active-btn";
}

for (let i = 0; i < productButton.length; i++) {
  productButton[i].addEventListener("click", productButtonActive);
}

// Отправить всю информацию в Whatsapp
function sendToWhatsApp() {
  const allInformation = document.getElementById('myDiv').textContent;
  const whatsappMessage = encodeURIComponent(allInformation);
  const whatsappLink = 'https://wa.me/?text=' + whatsappMessage;
  window.open(whatsappLink, '_blank');
}

// Отправить в Whatsapp блок с информацией о фермере
function sendInfoToWhatsApp() {
  const contentInfo = document.getElementById('myInfoDiv').textContent;
  const whatsappMessage = encodeURIComponent(contentInfo);
  const whatsappLink = 'https://wa.me/?text=' + whatsappMessage;
  window.open(whatsappLink, '_blank');
}

// Отправить в Whatsapp текстовый блок
function sendTextToWhatsApp() {
  const contentText = document.getElementById('myTextDiv').textContent;
  const whatsappMessage = encodeURIComponent(contentText);
  const whatsappLink = 'https://wa.me/?text=' + whatsappMessage;
  window.open(whatsappLink, '_blank');
}