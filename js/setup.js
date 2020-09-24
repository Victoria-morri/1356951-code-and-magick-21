'use strict';

const popupWizards = document.querySelector(`.setup`);
popupWizards.classList.remove(`hidden`);
popupWizards.querySelector(`.setup-similar`).classList.remove(`hidden`);
const wizardsList = popupWizards.querySelector(`.setup-similar-list`);

const template = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const wizardsName = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const wizardsSurname = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const wizardsColorCoat = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const wizardsEyesColor = [`black`, `red`, `blue`, `yellow`, `green`];
const space = ` `;

const getRandomImport = function (imports) {
  const randomImport = imports[Math.floor(Math.random() * (imports.length - 1))];
  return randomImport;
};

const wizards = [
  {
    name: `${getRandomImport(wizardsName)} ${space} ${getRandomImport(wizardsSurname)}`,
    coatColor: getRandomImport(wizardsColorCoat),
    eyesColor: getRandomImport(wizardsEyesColor)
  },
  {
    name: `${getRandomImport(wizardsName)} ${space} ${getRandomImport(wizardsSurname)}`,
    coatColor: getRandomImport(wizardsColorCoat),
    eyesColor: getRandomImport(wizardsEyesColor)
  },
  {
    name: `${getRandomImport(wizardsName)} ${space} ${getRandomImport(wizardsSurname)}`,
    coatColor: getRandomImport(wizardsColorCoat),
    eyesColor: getRandomImport(wizardsEyesColor)
  },
  {
    name: `${getRandomImport(wizardsName)} ${space} ${getRandomImport(wizardsSurname)}`,
    coatColor: getRandomImport(wizardsColorCoat),
    eyesColor: getRandomImport(wizardsEyesColor)
  }
];

const createWizard = function (wizard) {
  const similarWizardForm = template.cloneNode(true);
  similarWizardForm.querySelector(`.setup-similar-label`).textContent = wizard.name;
  similarWizardForm.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  similarWizardForm.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return similarWizardForm;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(createWizard(wizards[i]));
}
wizardsList.appendChild(fragment);
