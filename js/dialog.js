'use strict';
(function () {

  const onPopupMove = function (evt) {
    evt.preventDefault();
    let startCords = {
      x: evt.clientX,
      y: evt.clientY
    };
    console.log(startCords.x);
    console.log(startCords.y);
    let dragget = false;
    const onMouseMove = function (moveEvt) {
      dragget = true;
      const shift = {
        x: startCords.x - moveEvt.clientX,
        y: startCords.y - moveEvt.clientY
      };

      startCords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.wizard.setupElement.style.top = (window.wizard.setupElement.offsetTop - shift.y) + `px`;
      window.wizard.setupElement.style.left = (window.wizard.setupElement.offsetLeft - shift.x) + `px`;
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
      if (dragget) {
        const onClickPreventDefalt = function (clickEvt) {
          clickEvt.preventDefault();
          window.wizard.setupElement.removeEventListener(`click`, onClickPreventDefalt);
        };
        window.wizard.setupElement.addEventListener(`click`, onClickPreventDefalt);
      }
    };
    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  };

  window.dialog = {
    onPopupMove
  };
}
)();
