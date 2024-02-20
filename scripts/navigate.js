// карусель даты представлений
const messages = document.querySelector(".main-content");
const message = Array.from(messages.children);

const btnPrev = document.querySelector("#date__prev");
const btnNext = document.querySelector("#date__next");

message.forEach(function (date, index) {
  
  // скрываем все слайды кроме первого
  if (index !== 0) {
    date.classList.add('hidden')
  }
  
  // добавляем индексы
  date.dataset.index = index;
  // добавляем data атрибут active для активного слайда
  message[0].setAttribute('data-active', '');
})

function showNextDate(direction) {
  // скрыть текущее сообщение
  const currentDate = messages.querySelector('[data-active]');
  const currentDateIndex = +currentDate.dataset.index;
  
  currentDate.classList.add('hidden');
  currentDate.removeAttribute('data-active');

  // рассчитываем индекс в зависимости от направления
  let nextDateIndex;
  if (direction === 'next') {
    nextDateIndex = currentDateIndex + 1 === message.length ? 0 : currentDateIndex + 1;
  } else if (direction === 'prev') {
    nextDateIndex = currentDateIndex === 0 ? message.length - 1 : currentDateIndex - 1;
  }
  // показать следующий слайд
  const nextDate = messages.querySelector(`[data-index="${nextDateIndex}"]`);
  nextDate.classList.remove('hidden');
  nextDate.setAttribute('data-active', '');
}

btnNext.onclick = function () {
  showNextDate('next');
}

btnPrev.onclick = function () {
  showNextDate('prev');
}

