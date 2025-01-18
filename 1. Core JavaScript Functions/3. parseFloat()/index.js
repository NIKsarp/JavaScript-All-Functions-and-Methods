// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "parseFloat():";
textName.innerText = "Converts a string to a floating-point number.";
identifier1.innerText = identifier2.innerText = "parseFloatValue";
// --------------------------------------------
const parseFloatValue = parseFloat("3.14");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `parseFloat("3.14"): ${parseFloatValue}`;
