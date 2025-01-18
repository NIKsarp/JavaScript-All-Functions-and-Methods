// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "math.floor():";
textName.innerText = "Rounds a number downward to the nearest integer.";
identifier1.innerText = identifier2.innerText = "floorValue";
// --------------------------------------------
const floorValue = Math.floor(4.8);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `Math.floor(4.8): ${floorValue}`;
