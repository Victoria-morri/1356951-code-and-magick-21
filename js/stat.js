'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_WIDTH = 40;
const BAR_HEIGHT_MAX = 150;
const GAP_BAR = 50;
const FONT_GAP = 30;
const TEXT_X = 210;

const Font = {
  SIZE: `16px`,
  FAMILY: `PT Mono`
};

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getTimeMax = function (timesAr) {
  let timeMax = timesAr[0];
  for (let j = 1; j < timesAr.length; j++) {
    if (timesAr[j] > timeMax) {
      timeMax = timesAr[j];
    }
  }
  return timeMax;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.font = `${Font.SIZE} ${Font.FAMILY}`;

  const texts = [`Ура вы победили!`, `Список результатов:`];
  const getText = function (textAr) {
    for (let i = 0; i < textAr.length; i++) {
      ctx.fillText(textAr[i], TEXT_X, FONT_GAP * (i + 1));
    }
  };
  getText(texts);

  let colorBar = ``;

  for (let i = 0; i < players.length; i++) {
    if (players[i] !== `Вы`) {
      colorBar = `hsl(240, 94%,` + 15 * (i + 1) + `%)`;
    } else {
      colorBar = `rgba(255, 0, 0, 1)`;
    }
    const barHeight = BAR_HEIGHT_MAX / getTimeMax(times) * times[i];

    ctx.save();
    ctx.fillText(players[i], CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i, CLOUD_HEIGHT - barHeight - FONT_GAP);
    ctx.fillStyle = colorBar;
    ctx.fillRect(CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i, BAR_HEIGHT_MAX + CLOUD_X, BAR_WIDTH, -barHeight);
    ctx.restore();
  }
};
