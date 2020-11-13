'use strict';
(function () {
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

  const onNameField = function () {
    let valueInput = inputNameElement.value.length;
    if (valueInput < MIN_NAME_LENGTH) {
      inputNameElement.setCustomValidity(`Имя должно содержать не менее 2 символов`);
    } else if ((valueInput > MAX_NAME_LENGTH)) {
      inputNameElement.setCustomValidity(`Имя должно содержать не более 25 символов`);
    } else {
      inputNameElement.setCustomValidity(``);
    }
    inputNameElement.reportValidity();
  };

  const inputNameElement = window.wizard.setupElement.querySelector(`.setup-user-name`);

  window.form = {
    onNameField,
    inputNameElement
  };
}
)();
