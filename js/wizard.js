'use strict';
(function () {
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

  const setupElement = document.querySelector(`.setup`);
  const wizardFormElement = setupElement.querySelector(`.setup-wizard-form`);
  const wizardCoat = wizardFormElement.querySelector(`.wizard-coat`);
  const wizardEyes = wizardFormElement.querySelector(`.wizard-eyes`);
  const setupFireballWrap = wizardFormElement.querySelector(`.setup-fireball-wrap`);
  const fireballColor = setupFireballWrap.querySelector(`input[name=fireball-color]`);
  const template = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  window.wizard = {
    setupElement,
    wizardCoat,
    wizardEyes,
    setupFireballWrap,
    onCoatColorChange,
    onEyesColorChange,
    onFireballColorChange,
    renderSimilarWizards
  };
})();
