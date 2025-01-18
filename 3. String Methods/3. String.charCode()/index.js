// --------------------------------------------
const titleName = document.getElementById(`titleName`);
const textName = document.getElementById(`textName`);
const identifier1 = document.getElementById(`identifier1`);
const identifier2 = document.getElementById(`identifier2`);
// --------------------------------------------
titleName.innerText = "string.charCodeAt():";
textName.innerText =
  "Returns the Unicode of the character at the specified index.";
identifier1.innerText = identifier2.innerText = "charCodeAtResult";
// --------------------------------------------
const string = "Hello World!";
const charCodeResult = string.charCodeAt(1);
const showAnswer = document.getElementById(`showAnswer`);
showAnswer.innerText = `"Hello World!".charCodeAt(1): ${charCodeResult}`;
