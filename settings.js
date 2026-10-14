// ===== Scoring + flow settings (you rarely need to touch this; touching now) =====
window.SETTINGS = {
  holdOptions: true,    // true: question appears first, presenter clicks "Show options" to start the clock
  basePoints: 1000,     // points for a correct answer
  speedBonus: 100,      // extra points for answering instantly (fades to 0 over the window). Set to 0 for no speed bonus.
  speedWindowSec: 15    // seconds over which the bonus fades away
};
// Same math on the presenter screen and on phones.
window.scoreFor = function (answer, correctIdx, elapsedMs) {
  if (answer !== correctIdx) return 0;
  const e = Number.isFinite(elapsedMs) ? Math.max(0, elapsedMs) : Infinity;
  const f = Math.max(0, 1 - e / (SETTINGS.speedWindowSec * 1000));
  return SETTINGS.basePoints + Math.round(SETTINGS.speedBonus * f);
};
