// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "math.random():";
textName.innerText =
  "Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).";
identifier1.innerText = identifier2.innerText = "randomValue";
// --------------------------------------------
const randomValue = Math.random();
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `Math.random(): ${randomValue}`;
