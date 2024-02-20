let currentDate = new Date();
const dateMessage = document.querySelector(".date-message");
dateMessage.innerHTML = currentDate.getDate()+'/'+(currentDate.getMonth()+1)+'/'+currentDate.getFullYear();

// получаем список кнопок
const buttons = document.querySelector(".article-buttons");
const button = Array.from(buttons.children);

function buttonActive() {
  const current = document.getElementsByClassName("button-active");
  current[0].className = current[0].className.replace(" button-active", "");
  this.className += " button-active";
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", buttonActive);
}

// получаем список кнопок товара
const productButtons = document.querySelector(".button-group");
const productButton = Array.from(productButtons.children);

function productButtonActive() {
  const current = document.getElementsByClassName("active-btn");
  current[0].className = current[0].className.replace(" active-btn", "");
  this.className += " active-btn";
}

for (let i = 0; i < productButton.length; i++) {
  productButton[i].addEventListener("click", productButtonActive);
}

const arrInfo = [
  "Date: 08/02/2024",
  "Deal_ID: 12345678",
  "Call_ID: 12345678",
  "Farmer_ID: 12345678 (Иван Иванов)",
  "Crop_ID: 123 (Подсолнечник)",
  "Storage_ID: 123",
];
const info = arrInfo.map((item) => `<p>${item}</p>`).join("");
document.querySelector(".message-info").innerHTML = info;

const arrText = [
  "Робот: Алло.",
  "Фермер: Алло.",
  "Робот: Здравствуйте, это Сергей из Олсан. Мы закупаем подсолнечник у себя на воротах. Удобно сейчас?",
  "Фермер: Что подсолнечник?",
  "Робот: Мы предлагаем у нас на воротах. Без НДС 25,6 рублей за килограмм, а с НДС это 28,2. Будетепродавать?",
  "Фермер: У меня не на чем доставлять его.",
  "Робот: Хорошо, давайте попробую согласовать вам индивидуальную цену.",
  "Фермер: Ну хорошо, согласовывайте. Робот: Тогда вернусьпозже с расчетом. До связи.",
];
const text = arrText.map((item) => `<p>${item}</p>`).join("");
document.querySelector(".message-text").innerHTML = text;

const arrResult = [
  'Результат: готов обсуждать продажу по данной или другой цене - нужно рассчитать индивидуальную цену'
];
const result = arrResult.map((item) => `<p>${item}</p>`).join('');
document.querySelector('.message-result').innerHTML = result;

const arrTotal = [
  'Подведём итоги: Здесь будет какой-то текст'
];
const total = arrTotal.map((item) => `<p>${item}</p>`).join('');
document.querySelector('.message-total').innerHTML = total;