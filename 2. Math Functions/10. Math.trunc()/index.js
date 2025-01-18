// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "math.trunc():";
textName.innerText =
  "Returns the integer part of a number by removing the fractional part.";
identifier1.innerText = identifier2.innerText = "truncValue";
// --------------------------------------------
const truncValue = Math.trunc(4.9);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `Math.trunc(4.9): ${truncValue}`;
