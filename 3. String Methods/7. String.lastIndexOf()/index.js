// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.lastIndexOf():";
textName.innerText =
  "Returns the position of the last occurrence of a specified value.";
identifier1.innerText = identifier2.innerText = "lastIndexOfNumber";
// --------------------------------------------
const string = "Hello World!";
const lastIndexOfNumber = string.lastIndexOf("W");
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `"Hello World!".lastIndexOf("W"): ${lastIndexOfNumber}`;
