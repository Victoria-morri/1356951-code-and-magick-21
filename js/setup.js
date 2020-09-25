'use strict';

const WIZARDS_POPUP_ELEMENT = document.querySelector(`.setup`);
WIZARDS_POPUP_ELEMENT.classList.remove(`hidden`);
WIZARDS_POPUP_ELEMENT.querySelector(`.setup-similar`).classList.remove(`hidden`);
const WIZARDS_LIST_ELEMENT = WIZARDS_POPUP_ELEMENT.querySelector(`.setup-similar-list`);

const TEMPLATE = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

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
  const similarWizardForm = TEMPLATE.cloneNode(true);
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
WIZARDS_LIST_ELEMENT.appendChild(renderSimilarWizards());
