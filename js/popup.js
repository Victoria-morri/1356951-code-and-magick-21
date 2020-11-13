'use strict';
(function () {
  const START_X = 50;
  const START_Y = 80;
  const PX = `px`;
  const PERCENT = `%`;

  const startPopupPosition = function () {
    window.wizard.setupElement.style.top = START_Y + PX;
    window.wizard.setupElement.style.left = START_X + PERCENT;
  };

  const onPopupEscPress = function (evt) {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      closePopup();
    }
  };

  const closePopup = function () {
    window.wizard.setupElement.classList.add(`hidden`);
    window.wizard.setupElement.querySelector(`.setup-similar`).classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  const openPopup = function () {
    startPopupPosition();
    window.wizard.setupElement.classList.remove(`hidden`);
    window.wizard.setupElement.querySelector(`.setup-similar`).classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const onPopupOpen = function (evt) {
    if (evt.key === `Enter`) {
      openPopup();
    }
  };

  const onPopupOpenClick = function () {
    openPopup();
  };

  const onClosePopup = function () {
    closePopup();
  };
  window.popup = {
    onPopupOpen,
    onPopupOpenClick,
    onClosePopup
  };


})();
