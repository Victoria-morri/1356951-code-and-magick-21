'use strict';
const popupOpenElement = document.querySelector(`.setup-open`);
const popupCloseElement = document.querySelector(`.setup-close`);
const wizardListElement = window.wizard.setupElement.querySelector(`.setup-similar-list`);
const dialog = window.wizard.setupElement.querySelector(`.upload`);

popupOpenElement.addEventListener(`click`, window.popup.onPopupOpenClick);
popupOpenElement.addEventListener(`keydown`, window.popup.onPopupOpen);
popupCloseElement.addEventListener(`click`, window.popup.onClosePopup);
window.form.inputNameElement.addEventListener(`input`, window.form.onNameField);
window.wizard.wizardCoat.addEventListener(`click`, window.wizard.onCoatColorChange);
window.wizard.wizardEyes.addEventListener(`click`, window.wizard.onEyesColorChange);
window.wizard.setupFireballWrap.addEventListener(`click`, window.wizard.onFireballColorChange);
dialog.addEventListener(`mousedown`, window.dialog.onPopupMove);
wizardListElement.appendChild(window.wizard.renderSimilarWizards());
