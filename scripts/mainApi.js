const url = "http://172.201.225.48:5003/fresh";

function getMessages() {
  fetch(url + "/13427", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Ошибка запроса к серверу");
    })
    .then((data) => {
      console.log(data.records);

      let culturesList = [];
      const response = data.records;
      response.forEach((item) => {
        console.log(item.culture);
        if (
          culturesList.length == 0 ||
          culturesList.includes(item.culture) == false
        ) {
          culturesList.push(item.culture);
        }
      });
      
      culturesList.forEach((item) => {
        console.log(item);
        document.getElementById(
          "cultures"
        ).innerHTML = `<button class="article-button">
        ${item}
      </button>`;
      });

      const text = data.records[0].text;
      document.querySelector(".message-text").innerHTML = text;

      // const text = arrText.map((item) => `<p>${item}</p>`).join("");

      const rec = data.records[0].additional;
      document.querySelector(".message-additional").innerHTML = rec;
    })
    .catch((error) => {
      // console.log(error);
    });
}

getMessages();


// async function serverGetmessage() {
//   let res = await fetch(SERVER_URL + '/deal_id', {
//     method: 'GET',
//     headers: {'Content-Type': 'application/json'}
//   })

//   let data = await res.json()

//   return data
// }

// console.log(serverGetmessage())

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

// const text = arrText.map((item) => `<p>${item}</p>`).join("");
// document.querySelector(".message-text").innerHTML = text;

const arrResult = [
  "Результат: готов обсуждать продажу по данной или другой цене - нужно рассчитать индивидуальную цену",
];
const result = arrResult.map((item) => `<p>${item}</p>`).join("");
document.querySelector(".message-result").innerHTML = result;

const arrTotal = ["Рекомендация: звонок, встречное предложение"];
const total = arrTotal.map((item) => `<p>${item}</p>`).join("");
document.querySelector(".message-total").innerHTML = total;
