'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_QUANTITY = 4;

const getRandomImport = function (imports) {
  const randomImport = imports[Math.floor(Math.random() * imports.length)];
  return randomImport;
};

const getWizardData = function () {
  const wizardData = {};
  wizardData.name = `${getRandomImport(WIZARD_NAMES)} ${getRandomImport(WIZARD_SURNAMES)}`;
  wizardData.coatColor = getRandomImport(WIZARD_COAT_COLORS);
  wizardData.eyesColor = getRandomImport(WIZARD_EYES_COLORS);
  return wizardData;
};

const createWizard = function (wizard) {
  const similarWizardForm = template.cloneNode(true);
  similarWizardForm.querySelector(`.setup-similar-label`).textContent = wizard.name;
  similarWizardForm.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  similarWizardForm.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return similarWizardForm;
};
const renderSimilarWizards = function () {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < WIZARD_QUANTITY; i++) {
    fragment.appendChild(createWizard(getWizardData()));
  }
  return fragment;
};

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const closePopup = function () {
  wizadrPopupElement.classList.add(`hidden`);
  wizadrPopupElement.querySelector(`.setup-similar`).classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

const openPopup = function () {
  wizadrPopupElement.classList.remove(`hidden`);
  wizadrPopupElement.querySelector(`.setup-similar`).classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const wizadrPopupElement = document.querySelector(`.setup`);
const popupOpenElement = document.querySelector(`.setup-open`);
const popupCloseElement = document.querySelector(`.setup-close`);

const wizardFormElement = wizadrPopupElement.querySelector(`.setup-wizard-form`);
// wizadrPopupElement.classList.remove(`hidden`);
// wizadrPopupElement.querySelector(`.setup-similar`).classList.remove(`hidden`);
const wizardListElement = wizadrPopupElement.querySelector(`.setup-similar-list`);
const submitElement = wizadrPopupElement.querySelector(`.setup-submit`);
const template = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
// const wizardCoatElement = wizardFormElement.querySelector(`.setup-wizard`).content.querySelector(`.wizard-coat`);

popupOpenElement.addEventListener(`click`, function () {
  openPopup();
});

popupOpenElement.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

popupCloseElement.addEventListener(`click`, function () {
  closePopup();
});

popupCloseElement.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

submitElement.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    wizardFormElement.submit();
  }
});
submitElement.addEventListener(`click`, function () {
  wizardFormElement.submit();
});

/* wizardCoatElement.addEventListener(`click`, function () {
  wizardCoatElement.style.fill = `rgb (215, 210, 55)`;
});
*/
wizardListElement.appendChild(renderSimilarWizards());
