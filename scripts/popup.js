// Открытие/закрытие popup
const popup = document.querySelector(".popup");
const openPopupButton = document.querySelector("#scheduleCall");
const closePopupButton = document.querySelector(".popup__close");
const clickPopupButton = document.getElementsByClassName("service-button");

const openPopup = () => {
  popup.classList.add("popup_opened");
};

const closePopup = () => {
  popup.classList.remove("popup_opened");
};

function closePopupWhen(evt) {
  if (evt.key === "Escape" || evt.key === "click" || evt.target === evt.currentTarget) {
    closePopup();
  } 
}

// let n;
// for (n = 0; n < clickPopupButton.length; n++) {
//   clickPopupButton[n].addEventListener("click", closePopup);
// }

// Здесь лежат вызовы функций
openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
popup.addEventListener("click", closePopupWhen);
window.addEventListener("keyup", closePopupWhen);