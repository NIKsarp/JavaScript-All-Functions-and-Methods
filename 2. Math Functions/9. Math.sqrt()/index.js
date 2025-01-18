// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "math.sqrt():";
textName.innerText = "Returns the square root of a number.";
identifier1.innerText = identifier2.innerText = "sqrtValue";
// --------------------------------------------
const sqrtValue = Math.sqrt(16);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `Math.sqrt(16): ${sqrtValue}`;
