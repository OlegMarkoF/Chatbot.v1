const key = "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";
const url = "http://172.201.225.48:5001/fresh";

function getMessages() {
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json"
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Ошибка запроса к серверу");
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

getMessages()

// const arrInfoObj =[{
//   Date: new Date (2024, 2, 8),
//   Deal_ID: 12345678,
//   Call_ID: 12345678,
//   Farmer_ID: 12345678 /*("Иван Иванов")*/,
//   Crop_ID: 123 /*("Подсолнечник")*/,
//   Storage_ID: 123,
// }, ];

// const arrTextObj = [
//   {
//     Робот: "Алло.",
//     Фермер: "Алло.",
//     Робот:
//       "Здравствуйте, это Сергей из Олсан. Мы закупаем подсолнечник у себя на воротах. Удобно сейчас?",
//     Фермер: "Что подсолнечник?",
//     Робот:
//       "Мы предлагаем у нас на воротах. Без НДС 25,6 рублей за килограмм, а с НДС это 28,2. Будетепродавать?",
//     Фермер: "У меня не на чем доставлять его.",
//     Робот: "Хорошо, давайте попробую согласовать вам индивидуальную цену.",
//     Фермер: "Ну хорошо, согласовывайте.",
//     Робот: "Тогда вернусьпозже с расчетом. До связи.",
//   },
// ];

// const info = arrTextObj.map(
//   (item) =>
//     `<p class="message-text">Робот: ${item.Робот}</p>
// <p class="message-text">Фермер: ${item.Фермер}</p>
// `
// );
// document.querySelector(".message-content-box").innerHTML = info;

// async function serverGetmessage() {
//   let res = await fetch(SERVER_URL + '/deal_id', {
//     method: 'GET',
//     headers: {'Content-Type': 'application/json'}
//   })

//   let data = await res.json()

//   return data
// }

// console.log(serverGetmessage())

// return fetch(SERVER_URL, {
//   method: "GET",
//   headers: { "Content-Type": "application/json" },
// });

// function res(id) {
//   const req = new XMLHttpRequest();
//     req.open('GET', SERVER_URL + id);
//     req.send()
//     req.addEventListener('load', function() {
//       const data = JSON.parse(this.responseText);
//       const info = data.map((item) => (`${item.nameRU}: ${item.year}`));
//       document.querySelector(".message-info").innerHTML = info;
//     })
// }

const arrInfo = [
  "Date: new Date (2024, 2, 8)",
  "Deal_ID: 12345678",
  "Call_ID: 12345678",
  'Farmer_ID: 12345678 ("Иван Иванов") ',
  'Crop_ID: 123 ("Подсолнечник")',
  "Storage_ID: 123,",
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
  "Результат: готов обсуждать продажу по данной или другой цене - нужно рассчитать индивидуальную цену",
];
const result = arrResult.map((item) => `<p>${item}</p>`).join("");
document.querySelector(".message-result").innerHTML = result;

const arrTotal = ["Рекомендация: звонок, встречное предложение"];
const total = arrTotal.map((item) => `<p>${item}</p>`).join("");
document.querySelector(".message-total").innerHTML = total;


const addtionalRec = ["Блок дополнительных рекомендаций"];
const rec = addtionalRec.map((item) => `<p>${item}</p>`).join("");
document.querySelector(".message-additional").innerHTML = rec;