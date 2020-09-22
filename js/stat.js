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
  ctx.fillStyle = `#000`;
  ctx.font = `${Font.SIZE} ${Font.FAMILY}`;
};

const renderTexts = function (ctx, strings) {
  for (let i = 0; i < strings.length; i++) {
    ctx.fillText(strings[i], TEXT_X, FONT_GAP * (i + 1));
  }
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
  renderTexts(ctx, [`Ура вы победили!`, `Список результатов:`]);

  for (let i = 0; i < players.length; i++) {
    const saturate = (Math.floor(Math.random() * 10) + 1) * 10;
    const colorBar = (players[i] !== `Вы`) ? `hsl(240, ${saturate}%, 30%)` : `rgba(255, 0, 0, 1)`;
    const barHeight = BAR_HEIGHT_MAX / getTimeMax(times) * times[i];
    const statisticsX = CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i;
    ctx.save();
    ctx.fillText(players[i], statisticsX, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[i]), statisticsX, CLOUD_HEIGHT - barHeight - FONT_GAP);
    ctx.fillStyle = colorBar;
    ctx.fillRect(statisticsX, BAR_HEIGHT_MAX + CLOUD_X, BAR_WIDTH, -barHeight);
    ctx.restore();
  }
};
