'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_QUANTITY = 4;
const COAT_COLORS = [`rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

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

const onCoatColorChange = function () {
  wizardCoat.style.fill = getRandomImport(COAT_COLORS);
};

const onEyesColorChange = function () {
  wizardEyes.style.fill = getRandomImport(EYES_COLOR);
};

const onFireballColorChange = function () {
  let color = getRandomImport(FIREBALL_COLOR);
  setupFireballWrap.style.background = color;
  fireballColor.value = color;
};

const wizadrPopupElement = document.querySelector(`.setup`);
const popupOpenElement = document.querySelector(`.setup-open`);
const popupCloseElement = document.querySelector(`.setup-close`);
const inputNameElement = wizadrPopupElement.querySelector(`.setup-user-name`);

const wizardFormElement = wizadrPopupElement.querySelector(`.setup-wizard-form`);
const wizardCoat = wizardFormElement.querySelector(`.wizard-coat`);
const wizardEyes = wizardFormElement.querySelector(`.wizard-eyes`);

const setupFireballWrap = wizardFormElement.querySelector(`.setup-fireball-wrap`);
const fireballColor = setupFireballWrap.querySelector(`input[name=fireball-color]`);

// wizadrPopupElement.classList.remove(`hidden`);
// wizadrPopupElement.querySelector(`.setup-similar`).classList.remove(`hidden`);
const wizardListElement = wizadrPopupElement.querySelector(`.setup-similar-list`);
const submitElement = wizadrPopupElement.querySelector(`.setup-submit`);
const template = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
// const wizardCoatElement = wizardFormElement.querySelector(`.setup-wizard`).content.querySelector(`.wizard-coat`);
// setCustomValidity
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

inputNameElement.addEventListener(`input`, function () {
  let valueInput = inputNameElement.value.length;
  if (valueInput < MIN_NAME_LENGTH) {
    inputNameElement.setCustomValidity(`Имя должно содержать не менее 2 символов`);
  } else if ((valueInput > MAX_NAME_LENGTH)) {
    inputNameElement.setCustomValidity(`Имя должно содержать не более 25 символов`);
  } else {
    inputNameElement.setCustomValidity(``);
  }
  inputNameElement.reportValidity();
});

wizardCoat.addEventListener(`click`, onCoatColorChange);
wizardEyes.addEventListener(`click`, onEyesColorChange);
setupFireballWrap.addEventListener(`click`, onFireballColorChange);
wizardListElement.appendChild(renderSimilarWizards());
