// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "math.round():";
textName.innerText = "Rounds a number to the nearest integer.";
identifier1.innerText = identifier2.innerText = "roundValue";
// --------------------------------------------
const roundValue = Math.round(4.5);
const show_answer = document.getElementById(`show_answer`);
show_answer.innerText = `Math.round(4.5): ${roundValue}`;
