// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "parseInt():";
textName.innerText =
  "Converts a string to an integer, optionally specifying the base (radix).";
identifier1.innerText = identifier2.innerText = "parseIntValue";
// --------------------------------------------
const parseIntValue = parseInt("101", 2);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `parseInt("101", 2): ${parseIntValue}`;
