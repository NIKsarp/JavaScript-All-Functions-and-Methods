// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "math.ceil():";
textName.innerText = "Rounds a number upward to the nearest integer.";
identifier1.innerText = identifier2.innerText = "ceilValue";
// --------------------------------------------
const ceilValue = Math.ceil(4.2);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `Math.ceil(4.2): ${ceilValue}`;
